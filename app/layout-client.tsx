"use client";
import { Navbar } from "@/app/ui/navbar";
import { VideoBackground } from "@/app/ui/bg-video";
import { Footer } from "@/app/ui/footer";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/loadingme";
import { Preloader } from "./ui/preloader";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <VideoBackground as="header" height="fit-content">
            <Navbar />
          </VideoBackground>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
