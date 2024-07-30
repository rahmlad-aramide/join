import { Marquee } from "@/app/ui/marquee";
import { Hero } from "@/app/ui/hero";
import { Possibilities } from "@/app/ui/possibilities";
import { Ecosystem } from "@/app/ui/ecosystem";
import { MarqueeSection } from "@/app/ui/marquee-section";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Possibilities />
      <Ecosystem type="joinda" />
      <div className="hidden lg:block">
        <div className="h-[101px]"></div>
        <Ecosystem type="joint" />
      </div>
      <Marquee />
      <MarqueeSection />
    </main>
  );
}
