import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이규태의 개인 페이지",
  description: "personal_resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
