"use client";
import { gilroy } from "@/app/fonts";
import React, { useState, useEffect, useRef } from "react";

const texts = ["Socials", "Rewards", "Gamings"];
const widths = [180 + 60, 216 + 60, 228 + 60];

export const AnimatedTextNew: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [nextTextIndex, setNextTextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setNextTextIndex((currentTextIndex + 1) % texts.length);

      setTimeout(() => {
        setCurrentTextIndex(nextTextIndex);
        setIsAnimating(false);
      }, 1000); // Match this with the transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-flex items-center rounded-full animated-text-background overflow-hidden ${gilroy.className}`}
      style={{
        width: `${widths[currentTextIndex]}px`,
        transition: "width 200ms ease-in-out",
        height: 120,
      }}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center animated-text-color ${
          isAnimating ? "animate-slide-out" : "animate-slide-in"
        }`}
      >
        {texts[currentTextIndex]}
      </span>
      {isAnimating && (
        <span
          className="absolute inset-0 flex items-center justify-center animated-text-color animate-slide-in"
        >
          {texts[nextTextIndex]}
        </span>
      )}
    </span>
  );
};