import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import { QueryClientProviderWrapper } from "@/shared/context/app-context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "@/features/header/header";
import { Footer } from "@/features/footer";

const onestFont = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Голограмм принт - голограммы опт от производителя больее 10 лет на рынке",
  description: "Заказ абсолютно любых голограмм",
};

function BackgroundWrapper() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-100" />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${onestFont.variable} ${interFont.className} antialiased`}
      >
        <QueryClientProviderWrapper>
          <BackgroundWrapper />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
