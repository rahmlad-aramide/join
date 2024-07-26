"use client";
import { gilroy } from "@/app/fonts";
import React, { useState, useEffect, useRef } from "react";

const texts = ["Socials", "Rewards", "Gamings"];
// const widths = [22, 25, 28];
const widths = [180+60, 216+60, 228+60];

export const AnimatedText: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`relative inline-flex items-center rounded-full animated-text-background text-center transition-all duration-1000 ${gilroy.className}`}
      style={{
        width: `${widths[currentTextIndex]}px`,
      }}
    >
      <span
        ref={textRef}
        className={`${
          isAnimating ? "animate-slide-out" : "animate-slide-in"
        } rounded-full inline-flex items-center leading-tight my-2.5 animated-text-color text-center mx-auto`}
      >
        {texts[currentTextIndex]}
      </span>
    </span> 
  );
};

