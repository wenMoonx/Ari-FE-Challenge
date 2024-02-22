import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Assessment",
  description: "This is a home assessment project for techncial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='h-[100px]'></header>
        <div className='m-auto max-w-[1200px] px-20 py-5'>{children}</div>
      </body>
    </html>
  );
}
