
import React, { useEffect, useRef } from "react";

interface SpotlightProps {
  variant?: "static" | "moving";
}

export const Spotlight: React.FC<SpotlightProps> = ({ variant = "moving" }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === "moving") {
      const handleMouseMove = (e: MouseEvent) => {
        if (!divRef.current) return;
        
        const { clientX, clientY } = e;
        const { left, top } = divRef.current.getBoundingClientRect();
        
        const x = clientX - left;
        const y = clientY - top;
        
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [variant]);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: variant === "moving" 
          ? "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)"
          : "radial-gradient(800px circle at 50% 50%, rgba(255,255,255,0.07), transparent 40%)"
      }}
    />
  );
};

