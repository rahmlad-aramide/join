'use client'
import { gilroy } from '@/app/fonts';
import React, { useState, useEffect, useRef } from 'react';

const texts = ["Socials", "Gamings", "Rewards"];
const colors = ["bg-[#DE4EAC40] text-[#DE4EAC]", "bg-[#5BBE8A40] text-[#5BBE8A]", "bg-[#F4535340] text-[#F45353]"];

const AnimatedText: React.FC = () => {
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

  useEffect(()=> {
    console.log(textRef?.current?.offsetWidth)
  }, [textRef.current?.offsetWidth])

  return (
    <span 
      className={`relative inline-flex items-center rounded-[50px] ${colors[currentTextIndex]} transition-all duration-1000 ${gilroy.className}`}
      style={{ width: textRef.current ? textRef.current.offsetWidth + 'px' : 'auto', height: 'fit-content' }}
    >
      <span 
        ref={textRef}
        className={`${isAnimating ? 'animate-slide-out' : 'animate-slide-in'} rounded-[50px] inline-flex items-center leading-tight mx-3`}
      >
        {texts[currentTextIndex]}
      </span>
    </span>
  );
};

export default AnimatedText;