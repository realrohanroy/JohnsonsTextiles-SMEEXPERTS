import React from "react";

// Abstract architectural mark: a stepped shikhara silhouette under a rising sun.
export const Logo = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
    <circle cx="20" cy="11" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M20 4.5v-3M20 21.5v-2M11.5 11h-3M31.5 11h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
    <path d="M20 18.5 L28.5 30.5 H11.5 Z" stroke="currentColor" strokeWidth="1.6" opacity="0.85" />
    <path d="M8 33.5h24M10 36.5h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
