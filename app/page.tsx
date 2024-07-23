import { Marquee } from "@/app/ui/marquee";
import { Hero } from "@/app/ui/hero";
import { Possibilities } from "./ui/possibilities";

export default function Home() {
  return (
    <main>
      <Hero />
      <Possibilities />
      <Marquee />
    </main>
  );
}
