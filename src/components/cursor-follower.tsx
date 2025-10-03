"use client";

import { useEffect, useRef, useState } from "react";

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        willChange: "transform",
      }}
    >
      <div 
        className="h-6 w-6 rounded-full border-2 border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))]/10 transition-transform duration-150"
        style={{
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />
    </div>
  );
}

