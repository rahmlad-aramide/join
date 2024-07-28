import type { Metadata } from "next";
import { gilroy } from "@/app/fonts";
import "./globals.css";
import { Footer } from "./ui/footer";
import { VideoBackground } from "./ui/bg-video";
import { Navbar } from "./ui/navbar";
import LayoutClient from "./layout-client";

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
      <body className={`${gilroy.className} bg-background text-whitePrimary`} suppressHydrationWarning={true}>
      <LayoutClient>
        {children}
      </LayoutClient>
      {/* <VideoBackground as="header" height="fit-content">
        <Navbar />
      </VideoBackground>
        {children}
        <Footer /> */}
      </body>
    </html>
  );
}
