import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "custom-gray": "#DBDCDF",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Holographic color palette
        holo: {
          cyan: "#00ffff",
          magenta: "#ff00ff",
          yellow: "#ffff00",
          green: "#00ff00",
          blue: "#0080ff",
          purple: "#8000ff",
          orange: "#ff8000",
          red: "#ff0000",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Enhanced holographic animations
        "holo-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "holo-border-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "400% 50%" },
        },
        "holo-rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "particle-float": {
          "0%": {
            transform: "translateY(100vh) translateX(0)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-100px) translateX(100px)",
            opacity: "0",
          },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
            opacity: "0.6",
          },
        },
        "float-delayed": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateY(-15px) scale(1.03)",
            opacity: "0.6",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateY(-25px) scale(1.08)",
            opacity: "0.6",
          },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "holo-shift": "holo-shift 4s ease-in-out infinite",
        "holo-border-shift": "holo-border-shift 8s linear infinite",
        "holo-rotate": "holo-rotate 10s linear infinite",
        "particle-float": "particle-float 6s infinite linear",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 8s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
      },
      
      customTextShadow: {
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.5)",
      },
      
      fontFamily: {
        heading: ['var(--font-onest)'], 
        sans: ['var(--font-inter)'], 
      },
      
      // Enhanced spacing and sizing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Enhanced shadows
      boxShadow: {
        'holo-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'holo-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
        'holo-yellow': '0 0 20px rgba(255, 255, 0, 0.5)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      },
      
      // Enhanced backdrop filters
      backdropBlur: {
        xs: '2px',
      },
      
      // Enhanced gradients
      backgroundImage: {
        'holo-primary': 'linear-gradient(135deg, #00ffff 0%, #ff00ff 25%, #ffff00 50%, #00ff00 75%, #0080ff 100%)',
        'holo-secondary': 'linear-gradient(135deg, #ff0080 0%, #8000ff 25%, #0080ff 50%, #00ff80 75%, #ff8000 100%)',
        'holo-border': 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #0080ff, #8000ff, #00ffff)',
      },
    },
  },
} satisfies Config;
