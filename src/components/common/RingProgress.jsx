import React from "react";
import { useInView } from "@/hooks/useInView";

// Lightweight animated SVG progress ring (no external chart dependency).
export const RingProgress = ({
  value = 0,
  size = 168,
  stroke = 12,
  trackClass = "text-border",
  progressClass = "text-utilized",
  children,
}) => {
  const [ref, inView] = useInView({ threshold: 0.4, once: true });
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const offset = inView ? c - (pct / 100) * c : c;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={r}
          className={trackClass} stroke="currentColor" strokeWidth={stroke} fill="none"
        />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          className={progressClass} stroke="currentColor" strokeWidth={stroke} fill="none"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};
