import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Server-side validation schema
const serverContactSchema = z.object({
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

// In-memory storage for rate limiting (in production use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function getRateLimitKey(req: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return `contact_form:${ip}`;
}

function checkRateLimit(
  key: string
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(key, record);
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - record.count,
    resetTime: record.resetTime,
  };
}

// Clean up old rate limit records (simplified version)
function cleanupOldRecords() {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    // Clean up old records on each request
    cleanupOldRecords();

    // Check rate limit
    const rateLimitKey = getRateLimitKey(req);
    const rateLimit = checkRateLimit(rateLimitKey);

    if (!rateLimit.allowed) {
      const resetTime = new Date(rateLimit.resetTime).toLocaleString("ru-RU");
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: `Превышен лимит запросов. Попробуйте после ${resetTime}`,
          resetTime: rateLimit.resetTime,
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    const validatedData = serverContactSchema.parse(body);

    // Additional spam detection
    const spamScore = calculateSpamScore(validatedData);
    if (spamScore > 0.7) {
      return NextResponse.json(
        {
          error: "Spam detected",
          message:
            "Обнаружен подозрительный контент. Попробуйте изменить сообщение.",
        },
        { status: 400 }
      );
    }

    // Log the request (in production, save to database)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || "unknown",
      userAgent: req.headers.get("user-agent"),
      data: validatedData,
      spamScore,
      rateLimit: {
        remaining: rateLimit.remaining,
        resetTime: rateLimit.resetTime,
      },
    });

    // Return success with rate limit info
    return NextResponse.json({
      success: true,
      message: "Данные валидированы успешно",
      rateLimit: {
        remaining: rateLimit.remaining,
        resetTime: rateLimit.resetTime,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          message: "Ошибка валидации данных",
        },
        { status: 400 }
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Внутренняя ошибка сервера",
      },
      { status: 500 }
    );
  }
}

function calculateSpamScore(data: z.infer<typeof serverContactSchema>): number {
  let score = 0;

  // Check for suspicious patterns in name
  if (data.name.match(/[0-9]{3,}/)) score += 0.3;
  if (data.name.match(/[A-Z]{5,}/)) score += 0.2;
  if (data.name.match(/(.)\1{3,}/)) score += 0.4;

  // Check for suspicious patterns in phone
  if (data.phone.match(/[a-zA-Z]/)) score += 0.5;
  if (data.phone.match(/(.)\1{5,}/)) score += 0.3;

  // Check for suspicious patterns in message
  if (data.message.match(/(.)\1{8,}/)) score += 0.6;
  if (data.message.match(/[A-Z]{8,}/)) score += 0.4;
  if (data.message.match(/[0-9]{8,}/)) score += 0.3;
  if (data.message.match(/[!@#$%^&*()]{5,}/)) score += 0.5;

  // Check for common spam words
  const spamWords = [
    "casino",
    "poker",
    "viagra",
    "loan",
    "credit",
    "money",
    "free",
    "winner",
  ];
  const messageLower = data.message.toLowerCase();
  spamWords.forEach((word) => {
    if (messageLower.includes(word)) score += 0.2;
  });

  return Math.min(score, 1.0);
}
