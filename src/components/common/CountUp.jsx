import React, { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useSite } from "@/context/SiteContext";

/**
 * Animated number. First reveal counts from zero; later target changes
 * tween from the currently displayed value (no reset to zero on live ticks).
 */
export const CountUp = ({ value, duration = 1600, format, className, style }) => {
  const [ref, inView] = useInView({ threshold: 0.4, once: true });
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const fromRef = useRef(0);
  const startedRef = useRef(false);

  const fmt = format || ((n) => Math.round(n).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    // first reveal animates from zero; later updates snap so every instance of the
    // same figure on the page always shows an identical value
    if (startedRef.current) {
      fromRef.current = value;
      setDisplay(value);
      return;
    }
    cancelAnimationFrame(rafRef.current);
    startedRef.current = true;
    const from = 0;
    const dur = duration;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = from + (value - from) * eased;
      fromRef.current = v;
      setDisplay(v);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else {
        fromRef.current = value;
        setDisplay(value);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {fmt(display)}
    </span>
  );
};

export { useSite };
