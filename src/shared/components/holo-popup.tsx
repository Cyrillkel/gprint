"use client";

import { useEffect, useState } from "react";
import { CheckCircle, X, Sparkles } from "lucide-react";

interface HoloPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export const HoloPopup = ({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
  autoClose = true,
  autoCloseDelay = 5000,
}: HoloPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);

      if (autoClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);

        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          borderColor: "border-emerald-500/30",
          bgColor: "bg-emerald-500/10",
          iconColor: "text-emerald-400",
          icon: <CheckCircle className="w-8 h-8" />,
        };
      case "error":
        return {
          borderColor: "border-red-500/30",
          bgColor: "bg-red-500/10",
          iconColor: "text-red-400",
          icon: <X className="w-8 h-8" />,
        };
      case "info":
        return {
          borderColor: "border-cyan-500/30",
          bgColor: "bg-cyan-500/10",
          iconColor: "text-cyan-400",
          icon: <Sparkles className="w-8 h-8" />,
        };
      default:
        return {
          borderColor: "border-emerald-500/30",
          bgColor: "bg-emerald-500/10",
          iconColor: "text-emerald-400",
          icon: <CheckCircle className="w-8 h-8" />,
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`relative w-full max-w-md transform transition-all duration-300 ${
          isAnimating
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Holographic background */}
        <div className="absolute inset-0 holo-bg opacity-20 rounded-2xl" />

        {/* Main content */}
        <div
          className={`relative glass-card p-8 border ${styles.borderColor} ${styles.bgColor} rounded-2xl shadow-2xl`}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center ${styles.iconColor} shadow-lg`}
            >
              {styles.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="holo-text-primary text-2xl font-bold text-center mb-4">
            {title}
          </h3>

          {/* Message */}
          <p className="text-gray-300 text-center text-lg leading-relaxed mb-6">
            {message}
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>

          {/* Holographic border effect */}
          <div className="absolute inset-0 rounded-2xl holo-border pointer-events-none" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="particles opacity-30" />
        </div>
      </div>
    </div>
  );
};
