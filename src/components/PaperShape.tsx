"use client";

import { useParallax } from "@/hooks/useParallax";

interface PaperShapeProps {
  color: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  speed: number;
  rotate?: number;
  shape?: "circle" | "square" | "triangle" | "blob";
  className?: string;
}

export default function PaperShape({
  color,
  size,
  top,
  left,
  right,
  speed,
  rotate = 0,
  shape = "circle",
  className = "",
}: PaperShapeProps) {
  const scrollY = useParallax();
  const offset = scrollY * speed;

  const shapeStyles: Record<string, React.CSSProperties> = {
    circle: { borderRadius: "50%" },
    square: { borderRadius: "8px" },
    triangle: {
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      borderRadius: 0,
    },
    blob: {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
  };

  return (
    <div
      className={`absolute pointer-events-none paper-shadow ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        backgroundColor: color,
        transform: `translateY(${offset}px) rotate(${rotate + offset * 0.02}deg)`,
        willChange: "transform",
        ...shapeStyles[shape],
      }}
    />
  );
}
