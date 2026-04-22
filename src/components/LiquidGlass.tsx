"use client";

import { useEffect, useId, useState } from "react";

/**
 * Liquid glass effect using physics-based refraction (Snell's Law).
 * Generates a displacement map on canvas encoding the refracted ray deviation
 * for a convex spherical lens surface, then applies it via SVG feDisplacementMap
 * as a backdrop-filter.
 *
 * Chrome only — falls back to plain backdrop blur on other browsers.
 */

function buildDisplacementMap(size: number, refractiveIndex = 1.5): string {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(size, size);
  const d = img.data;

  const eta = 1.0 / refractiveIndex; // air → glass ratio (n1/n2)

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      // Normalize to [-1, 1] within the unit circle
      const x = (px / (size - 1)) * 2 - 1;
      const y = (py / (size - 1)) * 2 - 1;
      const r2 = x * x + y * y;

      let dx = 0;
      let dy = 0;

      if (r2 < 1.0) {
        // Convex sphere surface: z = sqrt(1 - r²)
        const z = Math.sqrt(1 - r2);

        // sin²(θ_i) = r², cos(θ_i) = z
        const sinT2 = eta * eta * r2;

        if (sinT2 < 1.0) {
          // Refracted ray via Snell's law (vector form)
          // f = eta * cos(θ_i) - cos(θ_t)
          const f = eta * z - Math.sqrt(1 - sinT2);
          dx = f * x;
          dy = f * y;
        }

        // Smooth falloff near edge to avoid hard transition
        const edge = Math.max(0, 1 - r2 / 0.95);
        dx *= edge;
        dy *= edge;
      }

      const i = (py * size + px) * 4;
      // Encode: 128 = neutral (no displacement), <128 = negative, >128 = positive
      d[i]     = Math.min(255, Math.max(0, Math.round(128 + dx * 160))); // R → X
      d[i + 1] = Math.min(255, Math.max(0, Math.round(128 + dy * 160))); // G → Y
      d[i + 2] = 128;
      d[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
  /** Pixel displacement scale — higher = more distortion */
  scale?: number;
  /** Refractive index of the glass (1.5 = standard glass, 2.4 = diamond) */
  refractiveIndex?: number;
  style?: React.CSSProperties;
}

export default function LiquidGlass({
  children,
  className = "",
  scale = 50,
  refractiveIndex = 1.5,
  style,
}: LiquidGlassProps) {
  const rawId = useId();
  const filterId = `lg-${rawId.replace(/:/g, "")}`;
  const [mapUrl, setMapUrl] = useState<string>("");

  useEffect(() => {
    setMapUrl(buildDisplacementMap(256, refractiveIndex));
  }, [refractiveIndex]);

  return (
    <>
      {mapUrl && (
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          style={{ position: "absolute", overflow: "hidden" }}
        >
          <defs>
            <filter
              id={filterId}
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              colorInterpolationFilters="sRGB"
            >
              {/* Load displacement map */}
              <feImage
                href={mapUrl}
                result="map"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              />
              {/* Apply physics-based displacement to backdrop */}
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                scale={scale}
                xChannelSelector="R"
                yChannelSelector="G"
                result="refracted"
              />
            </filter>
          </defs>
        </svg>
      )}

      <div
        className={className}
        style={{
          backdropFilter: mapUrl
            ? `url(#${filterId}) blur(0.5px)`
            : "blur(12px)",
          WebkitBackdropFilter: mapUrl
            ? `url(#${filterId}) blur(0.5px)`
            : "blur(12px)",
          ...style,
        }}
      >
        {/* Specular rim highlight — pure CSS, no JS */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background:
              "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        {children}
      </div>
    </>
  );
}
