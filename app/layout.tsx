import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/app/fonts";
import { Navbar } from "@/app/ui/navbar";
import { VideoBackground } from "@/app/ui/hero/video";

export const metadata: Metadata = {
  title: "JOIN - One For All",
  description:
    "Unite and Play: Connect with Others, Transform Gaming into Rewards, and Earn Every Step of the Way with Blockchain-Powered Security and Innovation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} bg-background text-whitePrimary`}>
        <header>
          <VideoBackground height="fit-content">
            <Navbar />
          </VideoBackground>
        </header>
        {children}
      </body>
    </html>
  );
}
