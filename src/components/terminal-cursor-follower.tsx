"use client";

import { useEffect, useRef, useState } from "react";

interface TerminalCursorFollowerProps {
  theme?: "dark" | "light";
}

export function TerminalCursorFollower({ theme = "dark" }: TerminalCursorFollowerProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'button' | 'link' | 'input'>('default');
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
      const target = e.target as HTMLElement
      
      if (target.tagName === "BUTTON" || target.closest("button") || target.tagName === "A" || target.closest("a") || target.tagName === "IMG" || target.closest("img") || target.tagName === "VIDEO" || target.closest("video") || target.closest("[data-media-item]") || target.closest(".aspect-square")) {
        setIsHovering(true);
        setCursorState('button');
      } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.closest("input") || target.closest("textarea")) {
        setIsHovering(true);
        setCursorState('input');
      } else {
        setIsHovering(false);
        setCursorState('default');
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

  // Custom offsets for different cursor states
  const getOffset = () => {
    switch (cursorState) {
      case 'button':
        return { x: -75, y: -27 }; // SELECT offset
      case 'input':
        return { x: -62, y: -36 };  // TYPE offset
      default:
        return { x: -70, y: -25 }; // CURSOR offset
    }
  };

  const offset = getOffset();

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
      style={{
        transform: `translate(${position.x + offset.x}px, ${position.y + offset.y}px)`,
        willChange: "transform",
      }}
    >
      <div 
        className={`font-mono text-xs font-medium transition-all duration-150 px-1.5 py-0.5 rounded ${
          theme === "dark" 
            ? "bg-black/80 text-white border border-green-400" 
            : "bg-white/90 text-black border border-green-600"
        }`}
        style={{
          transform: isHovering ? "scale(1.2)" : "scale(1)",
          filter: isHovering ? "drop-shadow(0 0 6px rgba(0,0,0,0.5))" : "drop-shadow(0 0 3px rgba(0,0,0,0.3))",
        }}
      >
        {cursorState === 'button' && (
          <div className="flex items-center space-x-1">
            <span className="animate-pulse text-sm">▶</span>
            <span className="text-xs font-bold">SELECT</span>
          </div>
        )}
        {cursorState === 'input' && (
          <div className="flex items-center space-x-1">
            <span className="animate-pulse text-sm">✏</span>
            <span className="text-xs font-bold">TYPE</span>
          </div>
        )}
        {cursorState === 'default' && (
          <div className="flex items-center space-x-1">
            <span className="animate-pulse text-sm">_</span>
            <span className="text-xs font-bold">CURSOR</span>
          </div>
        )}
      </div>
    </div>
  );
}
