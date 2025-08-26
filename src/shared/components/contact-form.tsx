"use client";

import { useState, useRef } from "react";
import { z } from "zod";
import {
  Send,
  User,
  Phone,
  MessageSquare,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { HoloPopup } from "./holo-popup";

// Enhanced Zod schema with better validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов")
    .regex(
      /^[а-яёa-z\s-]+$/i,
      "Имя может содержать только буквы, пробелы и дефисы"
    ),
  phone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .max(20, "Номер телефона слишком длинный")
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, "Неверный формат номера телефона"),
  message: z
    .string()
    .min(0, "Сообщение не может быть пустым")
    .max(1000, "Сообщение не должно превышать 1000 символов")
    .refine(
      (msg) => !msg.match(/(.)\1{10,}/),
      "Сообщение содержит слишком много повторяющихся символов"
    ),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const ContactForm = ({ onSuccess, onError }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [spamWarning, setSpamWarning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupConfig, setPopupConfig] = useState<{
    title: string;
    message: string;
    type: "success" | "error" | "info";
  }>({
    title: "",
    message: "",
    type: "success",
  });

  // Rate limiting
  const lastSubmissionRef = useRef(0);
  const submissionCountRef = useRef(0);
  const MIN_INTERVAL = 60000; // 1 минута между отправками
  const MAX_SUBMISSIONS = 5; // Максимум 5 заявок в час
  const RESET_INTERVAL = 3600000; // Сброс счетчика через час

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionRef.current;

    // Сброс счетчика через час
    if (timeSinceLastSubmission > RESET_INTERVAL) {
      submissionCountRef.current = 0;
    }

    // Проверка интервала между отправками
    if (timeSinceLastSubmission < MIN_INTERVAL) {
      const remainingTime = Math.ceil(
        (MIN_INTERVAL - timeSinceLastSubmission) / 1000
      );
      onError?.(`Подождите ${remainingTime} секунд перед следующей отправкой`);
      return false;
    }

    // Проверка общего количества отправок
    if (submissionCountRef.current >= MAX_SUBMISSIONS) {
      onError?.(`Превышен лимит отправок. Попробуйте через час.`);
      return false;
    }

    return true;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    // Spam detection for message field
    if (field === "message") {
      const suspiciousPatterns = [
        /(.)\1{5,}/, // 6+ повторяющихся символов
        /(.)\1{3,}(.)\2{3,}/, // Множественные повторения
        /[A-Z]{10,}/, // Много заглавных букв подряд
        /[0-9]{10,}/, // Много цифр подряд
      ];

      const isSuspicious = suspiciousPatterns.some((pattern) =>
        pattern.test(value)
      );
      setSpamWarning(isSuspicious);
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormData> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const sendToTelegram = async (data: ContactFormData) => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    console.log("Debug info:", { botToken, chatId });

    if (!botToken || !chatId) {
      throw new Error("Telegram configuration not found");
    }

    const text = `🔔 Новая заявка с сайта GPrint!

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
💬 Сообщение: ${data.message}

⏰ Время: ${new Date().toLocaleString("ru-RU")}
🌐 IP: ${await getClientIP()}
🛡️ Защита: Rate limiting активен`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: "HTML",
    };

    console.log("Sending to Telegram:", { url, payload });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Telegram response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Telegram error response:", errorText);
      throw new Error(`Telegram API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log("Telegram success response:", result);
  };

  // Simple IP detection (for demo purposes)
  const getClientIP = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip || "Неизвестно";
    } catch {
      return "Неизвестно";
    }
  };

  const showSuccessPopup = () => {
    setPopupConfig({
      title: "Заявка отправлена! 🎉",
      message:
        "Спасибо! Мы свяжемся с вами в течение 15 минут. Ваша заявка уже обрабатывается нашими специалистами.",
      type: "success",
    });
    setShowPopup(true);
  };

  const showErrorPopup = (errorMessage: string) => {
    setPopupConfig({
      title: "Ошибка отправки ⚠️",
      message: errorMessage,
      type: "error",
    });
    setShowPopup(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    if (!checkRateLimit()) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // First, validate through our API route
      const apiResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!apiResponse.ok) {
        const apiError = await apiResponse.json();
        throw new Error(apiError.message || "Ошибка валидации на сервере");
      }

      // If API validation passed, send to Telegram
      await sendToTelegram(formData);

      // Update rate limiting
      lastSubmissionRef.current = Date.now();
      submissionCountRef.current += 1;

      // Show success popup
      showSuccessPopup();

      // Call original success callback
      onSuccess?.();

      // Reset form
      setFormData({ name: "", phone: "", message: "" });
      setSpamWarning(false);
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ошибка отправки формы. Попробуйте позже.";
      showErrorPopup(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto animate-fade-in">
        <div className="glass-card p-8 border border-white/20 hover:border-cyan-500/30 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="holo-text-primary text-2xl font-bold mb-2">
              Свяжитесь с нами
            </h3>
            <p className="text-gray-300 text-sm">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>

            {/* Security info */}
            <div className="mt-4 flex items-center justify-center text-xs text-cyan-400">
              <Shield className="w-4 h-4 mr-2" />
              Защищено от спама
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-cyan-400" />
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 ${
                  errors.name ? "border-red-500/50" : "border-white/20"
                }`}
              />
              {errors.name && (
                <div className="text-red-400 text-sm mt-1 animate-fade-in">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-cyan-400" />
              </div>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 ${
                  errors.phone ? "border-red-500/50" : "border-white/20"
                }`}
              />
              {errors.phone && (
                <div className="text-red-400 text-sm mt-1 animate-fade-in">
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                <MessageSquare className="h-5 w-5 text-cyan-400" />
              </div>
              <textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 resize-none ${
                  errors.message ? "border-red-500/50" : "border-white/20"
                }`}
              />
              {errors.message && (
                <div className="text-red-400 text-sm mt-1 animate-fade-in">
                  {errors.message}
                </div>
              )}

              {/* Spam warning */}
              {spamWarning && (
                <div className="flex items-center text-yellow-400 text-sm mt-1">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Внимание: подозрительный контент
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full holo-button py-3 px-6 rounded-lg font-semibold text-white transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Отправка...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Отправить заявку
                </div>
              )}
            </button>
          </form>

          {/* Security and Privacy */}
          <div className="mt-6 space-y-2">
            <p className="text-xs text-gray-400 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
            <div className="text-xs text-cyan-400 text-center">
              <div className="flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1" />
                Максимум 5 заявок в час • Интервал: 1 минута
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Popup */}
      <HoloPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title={popupConfig.title}
        message={popupConfig.message}
        type={popupConfig.type}
        autoClose={true}
        autoCloseDelay={6000}
      />
    </>
  );
};
