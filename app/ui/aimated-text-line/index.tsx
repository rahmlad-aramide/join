"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatedText } from "../aimated-text";

const texts = ["Socials", "Rewards", "Gamings"];
const widths = [180 + 320, 216 + 320, 228 + 320];

export const AnimatedTextLine: React.FC = () => {
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
    <span className="relative inline-flex items-center transition-all duration-500 space-x-2">
      <AnimatedText />
      <span
        style={{
          marginLeft: `${widths[currentTextIndex]}px`,
        }}
        className="py-2 inline-flex items-center leading-tight mr-auto ml-2"
      >
        meet Blockchain
      </span>
    </span>
  );
};
