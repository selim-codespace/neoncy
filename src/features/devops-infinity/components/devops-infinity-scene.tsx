"use client";

import React from "react";

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

      {/* ── Ambient Background Glows ── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />

      <svg
        width="900"
        height="640"
        viewBox="0 0 900 640"
        className="max-w-full drop-shadow-2xl z-10 devops-infinity-core"
        role="img"
        aria-label="DevOps Infinity Loop"
      >
        <defs>
          <linearGradient id="gHex" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a253a" />
            <stop offset="100%" stopColor="#0f1623" />
          </linearGradient>

          {/* ── Loop Gradients ── */}
          <linearGradient id="gLoopLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d946ef" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="gLoopRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>

          {/* ── Icon Gradients ── */}
          <linearGradient id="gAzureHex" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eaefb" />
            <stop offset="100%" stopColor="#0078d4" />
          </linearGradient>

          <linearGradient id="gGitlab" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e24329" />
            <stop offset="100%" stopColor="#fca326" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Custom Arrow Shape */}
          <symbol id="arrowIcon" viewBox="-10 -10 20 20">
            <path d="M -5,-8 L 5,0 L -5,8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </symbol>
        </defs>

        {/* ── 2. Hex Grid ── */}
        <g stroke="#334155" strokeWidth="1" strokeOpacity="0.3" fill="url(#gHex)">
          {Object.keys(CELLS).map(k => {
            const cell = CELLS[k as keyof typeof CELLS];
            return (
              <g key={k} className="group transition-all duration-500 ease-out origin-center" style={{ transformBox: 'fill-box' }}>
                <polygon
                  points={hexPath(cell.cx, cell.cy, 106)}
                  fillOpacity={0.4}
                  className="hover:fillOpacity-60 group-hover:stroke-slate-500 transition-all duration-300"
                />
              </g>
            )
          })}
        </g>

        {/* ── 3. Smooth Infinity Loops ── */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">

          {/* ARC 1: Bottom Left (Purple) */}
          <path d="M 450,320 Q 300,440 200,440 Q 50,440 150,320 Q 200,260 250,220" stroke="#d946ef" strokeWidth="60" opacity="0.1" filter="url(#glow)" />
          <path d="M 450,320 Q 300,440 200,440 Q 50,440 150,320 Q 200,260 250,220" stroke="url(#gLoopLeft)" strokeWidth="60" />

          {/* ARC 2: Top Right (Blue) */}
          <path d="M 646,220 Q 600,200 450,320" stroke="#3b82f6" strokeWidth="60" opacity="0.1" filter="url(#glow)" />
          <path d="M 646,220 Q 600,200 450,320" stroke="url(#gLoopRight)" strokeWidth="60" />

          {/* ARC 3: Top Left (Purple) */}
          <path d="M 250,220 Q 300,200 450,320" stroke="#8b5cf6" strokeWidth="60" opacity="0.1" filter="url(#glow)" />
          <path d="M 250,220 Q 300,200 450,320" stroke="url(#gLoopLeft)" strokeWidth="60" />

          {/* ARC 4: Bottom Right (Green) */}
          <path d="M 450,320 Q 600,440 700,440 Q 850,440 750,320 Q 700,260 646,220" stroke="#22c55e" strokeWidth="60" opacity="0.1" filter="url(#glow)" />
          <path d="M 450,320 Q 600,440 700,440 Q 850,440 750,320 Q 700,260 646,220" stroke="url(#gLoopRight)" strokeWidth="60" />

          {/* ── ARROW FLOW ANIMATION ── */}
          <path id="flowPath1" d="M 250,220 Q 300,200 450,320 Q 600,440 700,440 Q 850,440 750,320 Q 700,260 646,220" stroke="none" />
          <path id="flowPath2" d="M 646,220 Q 600,200 450,320 Q 300,440 200,440 Q 50,440 150,320 Q 200,260 250,220" stroke="none" />

          <g>
            {[0, 1, 2].map((i) => (
              <use key={`f1-${i}`} href="#arrowIcon" width="18" height="18" transform="translate(-9,-9)">
                <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${i * 1.1}s`} rotate="auto">
                  <mpath href="#flowPath1" />
                </animateMotion>
              </use>
            ))}
          </g>

          <g opacity="0.6">
            {[0, 1, 2].map((i) => (
              <use key={`f2-${i}`} href="#arrowIcon" width="18" height="18" transform="translate(-9,-9)">
                <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${i * 1.1 + 0.5}s`} rotate="auto">
                  <mpath href="#flowPath2" />
                </animateMotion>
              </use>
            ))}
          </g>
        </g>

        {/* ── 4. PIXEL-PERFECT ICONS ── */}

        {/* TL: Azure (Faceted Cube) */}
        <g transform={`translate(${CELLS.tl.cx}, ${CELLS.tl.cy})`} className="devops-icon-float devops-icon-float-1">
          <path d="M 0,-34 L 30,-17 L 30,17 L 0,34 L -30,17 L -30,-17 Z" fill="url(#gAzureHex)" />
          {/* Facets */}
          <path d="M 0,-34 L 30,-17 L 0,0 L -30,-17 Z" fill="white" fillOpacity="0.2" />
          <path d="M 0,0 L 30,-17 L 30,17 L 0,34 Z" fill="black" fillOpacity="0.1" />
          {/* White arrow mark */}
          <path d="M -10,-12 L 8,0 L -10,12" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* TM: GitLab (Precise Fox) */}
        <g transform={`translate(${CELLS.tm.cx}, ${CELLS.tm.cy}) scale(1.1)`} className="devops-icon-float devops-icon-float-2">
          <path d="M 0,28 L -24,-20 L -36,-20 L 0,34 Z" fill="#e24329" />
          <path d="M 0,28 L 24,-20 L 36,-20 L 0,34 Z" fill="#e24329" />
          <path d="M -24,-20 L -36,-20 L -10,-34 Z" fill="#fc6d26" />
          <path d="M 24,-20 L 36,-20 L 10,-34 Z" fill="#fc6d26" />
          <path d="M 0,28 L -24,-20 L 24,-20 Z" fill="#fca326" />
        </g>

        {/* TR: Bitbucket (Blue Flow) */}
        <g transform={`translate(${CELLS.tr.cx}, ${CELLS.tr.cy + 5})`} className="devops-icon-float devops-icon-float-3">
          <path d="M -25,2 C -25,-15 -15,-30 0,-30 C 12,-30 22,-20 25,-10 L 10,-5 C 8,-10 3,-15 -2,-15 C -8,-15 -12,-10 -12,-2 C -12,4 -8,10 0,10 C 2,10 5,8 8,5 L 20,15 C 15,22 8,28 0,28 C -18,28 -25,15 -25,2 Z" fill="#2684ff" />
          <path d="M 15,-18 L 30,-32 L 35,-15 Z" fill="#2684ff" />
        </g>

        {/* ML: TeamCity (Multi-Circles) */}
        <g transform={`translate(${CELLS.ml.cx}, ${CELLS.ml.cy})`} className="devops-icon-float devops-icon-float-4">
          <circle cx="-16" cy="-14" r="18" fill="#8b5cf6" fillOpacity="0.8" />
          <circle cx="16" cy="-14" r="16" fill="#10b981" fillOpacity="0.8" />
          <circle cx="-18" cy="18" r="14" fill="#0ea5e9" fillOpacity="0.8" />
          <rect x="-24" cy="-24" width="48" height="48" rx="4" fill="white" />
          <path d="M -16,14 L 16,14" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
          <text x="0" y="8" textAnchor="middle" fontSize="32" fontFamily="Arial" fontWeight="900" fill="#0f172a">TC</text>
        </g>

        {/* MR: CircleCI (Gray Ring) */}
        <g transform={`translate(${CELLS.mr.cx}, ${CELLS.mr.cy})`} className="devops-icon-float devops-icon-float-5">
          <path d="M -30,0 A 30,30 0 1,1 30,0 A 30,30 0 1,1 -30,0 M -20,0 A 20,20 0 1,0 20,0 A 20,20 0 1,0 -20,0" fill="#64748b" />
          <circle cx="25" cy="0" r="6" fill="#64748b" />
        </g>

        {/* BL: Spring (Brackets & Leaf) */}
        <g transform={`translate(${CELLS.bl.cx}, ${CELLS.bl.cy})`} className="devops-icon-float devops-icon-float-6">
          <text x="-40" y="10" fontSize="48" fill="white" fontFamily="serif" fontWeight="100">(</text>
          <text x="30" y="10" fontSize="48" fill="white" fontFamily="serif" fontWeight="100">)</text>
          <path d="M 0,22 C -15,10 -15,-10 0,-25 C 15,-10 15,10 0,22 Z" fill="#22c55e" />
          <path d="M 0,22 C -8,12 -8,0 0,-15" fill="none" stroke="#064e3b" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* BM: Docker (Ship) */}
        <g transform={`translate(${CELLS.bm.cx}, ${CELLS.bm.cy})`} className="devops-icon-float devops-icon-float-7">
          <circle r="36" fill="white" />
          <path d="M -22,6 L 22,6 C 24,6 26,4 26,0 L 22,-8 L -22,-8 L -26,0 C -26,4 -24,6 -22,6 Z" fill="#0db7ed" />
          <rect x="-6" y="-18" width="12" height="8" rx="1" fill="#0db7ed" />
          <path d="M -18,-4 L 18,-4" stroke="white" strokeWidth="2" opacity="0.3" />
        </g>

        {/* BR: Azure Pipelines (Rocket) */}
        <g transform={`translate(${CELLS.br.cx}, ${CELLS.br.cy})`} className="devops-icon-float devops-icon-float-8">
          <path d="M -10,20 L -25,25 L -20,10 Z" fill="#0078d4" />
          <path d="M -10,10 L 25,-25 L 10,-10 L -10,10 Z" fill="#5eaefb" />
          <path d="M -10,10 L 10,-10 L 20,0 L 0,20 L -10,10 Z" fill="#0078d4" />
          <circle cx="8" cy="-8" r="4" fill="white" />
        </g>

      </svg>

      {/* ── Custom Component Styles ── */}
      <style jsx>{`
        .devops-infinity-core {
          filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.5));
        }
      `}</style>
    </div>
  );
};
