import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myfont = localFont({
  src: [
    { path: "./fonts/Roboto-Thin.ttf", weight: "100" },
    { path: "./fonts/Roboto-Light.ttf", weight: "300" },
    { path: "./fonts/Roboto-Regular.ttf", weight: "400" },
    { path: "./fonts/Roboto-Medium.ttf", weight: "500" },
    { path: "./fonts/Roboto-Bold.ttf", weight: "700" },
    { path: "./fonts/Roboto-Black.ttf", weight: "900" },
  ],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Học viện Tiềm Năng Việt Nam | Khoa học Não bộ",
  description:
    "Ứng dụng khoa học não bộ để phát triển tiềm năng bản thân. Thấu hiểu bản thân là thấu hiểu bộ não.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${myfont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
