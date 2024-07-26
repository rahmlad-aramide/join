import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "../aimated-text";

interface AnimatedTextWrapperProps {
    staticText: string;
  }
  
  export const AnimatedTextWrapper: React.FC<AnimatedTextWrapperProps> = ({ staticText }) => {
    const [animatedWidth, setAnimatedWidth] = useState(0);
    const animatedTextRef = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setAnimatedWidth(entry.contentRect.width);
        }
      });
  
      if (animatedTextRef.current) {
        observer.observe(animatedTextRef.current);
      }
  
      return () => {
        if (animatedTextRef.current) {
          observer.unobserve(animatedTextRef?.current);
        }
      };
    }, []);
  
    return (
      <div className="relative inline-flex items-center">
        <span ref={animatedTextRef}>
          <AnimatedText />
        </span>
        <span 
          className="py-2 inline-flex items-center leading-tight transition-all duration-1000"
          style={{ marginLeft: `${animatedWidth + 8}px` }} // Adding 8px gap
        >
          {staticText}
        </span>
      </div>
    );
  };