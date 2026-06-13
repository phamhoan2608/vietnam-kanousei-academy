import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myfont = localFont({
  // src: "./Roboto-Thin.ttf",
  src: [
    {
      path: "./Roboto-Thin.ttf",
      weight: "100",
    },
    {
      path: "./Roboto-Regular.ttf",
      weight: "400",
    },
    // {
    //   path: "./Inter_18pt-Bold.ttf",
    //   weight: "700",
    // },
  ],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Học viện tiềm năng Việt Nam",
  description: "Thấu hiểu bản thân là thấu hiểu bộ não",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myfont.variable} antialiased flex justify-center`}>{children}</body>
    </html>
  );
}
