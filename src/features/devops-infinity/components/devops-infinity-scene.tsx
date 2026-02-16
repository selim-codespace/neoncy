"use client";

import React from "react";
import TechStackGrid from "@/components/tech-stack-grid/tech-stack-grid";

/**
 * DevOps Infinity Scene
 * ---------------------
 * A high-fidelity, animated recreation of the DevOps infinity loop.
 * Pixel-perfect icons and hexagonal grid based on the provided reference.
 */

// ─── GEOMETRY CONSTANTS ───
const HEX_R = 108; // Radius
const HEX_W = HEX_R * 1.732; // ~187
const HEX_H = HEX_R * 2;
const GAP = 14;

const DX = HEX_W + GAP;
const DY = HEX_H * 0.75 + GAP;

const CX = 450;
const CY = 320;

const CELLS = {
  tl: { cx: CX - DX, cy: CY - DY },
  tm: { cx: CX, cy: CY - DY },
  tr: { cx: CX + DX, cy: CY - DY },
  ml: { cx: CX - DX * 1.5, cy: CY },
  mr: { cx: CX + DX * 1.5, cy: CY },
  bl: { cx: CX - DX, cy: CY + DY },
  bm: { cx: CX, cy: CY + DY },
  br: { cx: CX + DX, cy: CY + DY },
} as const;

// Hexagon Path Generation
function hexPath(cx: number, cy: number, r: number) {
  return [0, 60, 120, 180, 240, 300]
    .map((deg) => {
      const rad = deg * (Math.PI / 180);
      return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
    })
    .join(" ");
}

export const DevopsInfinityScene = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#02040a] p-4 text-slate-200 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Render the new TechStackGrid component taking over the scene */}
      <TechStackGrid />
    </div>
  );
};


