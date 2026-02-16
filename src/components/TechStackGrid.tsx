"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { Rocket, Leaf, RefreshCw } from "lucide-react";

// --- Sub-components ---

// Jewel Hexagon Component
// Implements the "3D Jewel" look with outer dark border and inner faceted gradient.
const JewelHexagon = ({
    children,
    className,
    gradientFrom = "#3b82f6", // Default Blue
    gradientTo = "#0ea5e9",   // Default Cyan
    iconColor = "white",
}: {
    children?: React.ReactNode;
    className?: string;
    gradientFrom?: string;
    gradientTo?: string;
    iconColor?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex h-28 w-28 items-center justify-center grayscale-[20%] hover:grayscale-0 transition-all duration-300 group",
                className
            )}
        >
            {/* 1. Outer Hexagon Background (Generic for all) */}
            {/* Dark, semi-transparent, subtle border */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md rounded-[20px]"
                style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
            />
            {/* Outer Border (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" fill="none">
                <path d="M50 0.5L99.5 25.25V74.75L50 99.5L0.5 74.75V25.25L50 0.5Z" stroke="white" opacity={0.5} strokeWidth="2" />
            </svg>

            {/* 2. Inner Jewel Hexagon (The Colorful Part) */}
            {/* Sized approx 60% of outer */}
            <div className="relative w-14 h-14 flex items-center justify-center z-10">

                {/* Jewel Background Gradient */}
                <div
                    className="absolute inset-0 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                    }}
                />

                {/* Jewel Facets (Overlays for 3D look) */}
                {/* Top-Left Facet (Lighter) */}
                <div
                    className="absolute inset-0 bg-white/20"
                    style={{
                        clipPath: "polygon(50% 50%, 0% 25%, 50% 0%, 100% 25%)"
                    }}
                />
                {/* Bottom-Right Facet (Darker) */}
                <div
                    className="absolute inset-0 bg-black/20"
                    style={{
                        clipPath: "polygon(50% 50%, 100% 75%, 50% 100%, 0% 75%)"
                    }}
                />

                {/* Inner Highlight/Border for Jewel */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100" fill="none">
                    <path d="M50 1L98 25V75L50 99L2 75V25L50 1Z" stroke="white" strokeWidth="3" />
                </svg>

                {/* Content Icon */}
                <div className="relative z-20 drop-shadow-md text-white">
                    {children}
                </div>

            </div>
        </div>
    );
};


// Custom Logos (Recalibrated for new size/style)
const GitLabLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M22.65 14.39L19 22.15H5L1.35 14.39C1.12 13.88 1.12 13.29 1.35 12.78L4.65 4.65C4.98 3.84 6.13 3.84 6.46 4.65L8 8.41H16L17.54 4.65C17.87 3.84 19.02 3.84 19.35 4.65L22.65 12.78C22.88 13.29 22.88 13.88 22.65 14.39Z" fill="white" />
    </svg>
);

const TerraformLogo = () => (
    <div className="relative w-5 h-5">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.464 22.8596L23.432 10.1543V35.6653L1.464 48.3706V22.8596Z" fill="white" />
            <path d="M25.864 8.75024L47.832 -3.95503L47.832 21.556L25.864 34.2613L25.864 8.75024Z" fill="white" />
            <path d="M25.864 37.0691L47.832 24.3639V49.8749L25.864 62.5802V37.0691Z" fill="white" />
        </svg>
    </div>
);


const TechStackGrid = () => {
    // Colors based on brand or loop position
    const colors = {
        blue: { from: "#3b82f6", to: "#0ea5e9" }, // Azure, Docker, etc
        purple: { from: "#a855f7", to: "#7c3aed" }, // Terraform?
        orange: { from: "#f97316", to: "#ea580c" }, // GitLab
        green: { from: "#22c55e", to: "#10b981" }, // Spring
        cyan: { from: "#06b6d4", to: "#0891b2" },
        red: { from: "#ef4444", to: "#dc2626" },
        gray: { from: "#64748b", to: "#475569" }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-20 flex items-center justify-center min-h-[600px] overflow-hidden">

            {/* Container for the Grid - Centered */}
            <div className="relative w-[500px] h-[500px]">

                {/* 1. Top (GitLab) - Orange */}
               <div className="absolute top-[30px] left-[180px]">
                    <JewelHexagon gradientFrom={colors.orange.from} gradientTo={colors.orange.to}>
                        <GitLabLogo />
                    </JewelHexagon>
                </div>

                {/* 2. Top-Left (>) - The Reference Blue Tile */}
                <div className="absolute top-[30px] left-[60px]">
                    <JewelHexagon gradientFrom={colors.blue.from} gradientTo={colors.blue.to}>
                        <span className="font-bold text-2xl pb-1">{">"}</span>
                    </JewelHexagon>
                </div>

                {/* 3. Top-Right (Refresh/Sync) - Blue/Cyan */}
                <div className="absolute top-[30px] right-[90px]">
                    <JewelHexagon gradientFrom={colors.cyan.from} gradientTo={colors.blue.to}>
                        <RefreshCw className="w-5 h-5" />
                    </JewelHexagon>
                </div>


                {/* --- Middle Row --- */}

                {/* 4. Left (TC) - Vertically Centered, Far Left - Purple */}
                <div className="absolute top-[36%] -translate-y-1/2 left-[0px]">
                    <JewelHexagon gradientFrom={colors.purple.from} gradientTo={colors.purple.to}>
                        <TerraformLogo />
                    </JewelHexagon>
                </div>

                {/* 5. Right (Circle) - Vertically Centered, Far Right - Gray/Blue */}
                <div className="absolute top-[36%] -translate-y-1/2 right-[25px]">
                    <JewelHexagon gradientFrom={colors.gray.from} gradientTo={colors.gray.to}>
                        <div className="w-6 h-6 rounded-full border-[2px] border-white flex items-center justify-center relative">
                            <div className="w-2 h-2 bg-white rounded-full absolute -right-[1px] top-1/2 -translate-y-1/2" />
                        </div>
                    </JewelHexagon>
                </div>


                {/* --- Bottom Row --- */}

                {/* 6. Bottom-Left (Leaf) - Green */}
                <div className="absolute top-[43%] left-[60px]">
                    <JewelHexagon gradientFrom={colors.green.from} gradientTo={colors.green.to}>
                        <div className="flex items-center">
                            <span className="text-lg font-thin text-white/70 bracket">(</span>
                            <Leaf className="w-4 h-4 fill-white stroke-white" />
                            <span className="text-lg font-thin text-white/70 bracket">)</span>
                        </div>
                    </JewelHexagon>
                </div>

                {/* 7. Bottom-Right (Rocket) - Blue */}
                <div className="absolute top-[43%] right-[88px]">
                    <JewelHexagon gradientFrom={colors.blue.from} gradientTo={colors.blue.to}>
                        <Rocket className="text-white w-5 h-5" />
                    </JewelHexagon>
                </div>

                {/* 8. Bottom Center (Ship) - Cyan/Teal */}
                <div className="absolute left-[47%] -translate-x-1/2 top-[43%]">
                    <JewelHexagon gradientFrom={colors.cyan.from} gradientTo={colors.cyan.to}>
                        <div className="w-8 h-8 flex items-center justify-center relative">
                            {/* Simple Ship Icon */}
                            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                <path d="M12 22L3 18V10L12 14L21 10V18L12 22Z" />
                            </svg>
                        </div>
                    </JewelHexagon>
                </div>


                {/* Infinity Loop Overlay */}
                {/* Used distinct segments with gradients to match the "3D" feel */}
                <div className="absolute top-[5%] -left-[12%] pointer-events-none flex items-center justify-center z-0 scale-60">
                    <svg
                        width="600"
                        height="300"
                        viewBox="0 0 600 300"
                        fill="none"
                        className="drop-shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                    >
                        <defs>
                            <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#A855F7" />
                                <stop offset="50%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M 300 150 C 380 50, 500 50, 500 150 C 500 250, 380 250, 300 150 C 220 50, 100 50, 100 150 C 100 250, 220 250, 300 150 Z"
                            stroke="url(#infinityGrad)"
                            strokeWidth="35"
                            strokeLinecap="round"
                            fill="none"
                            opacity="0.9"
                        />

                        {/* Arrows Overlay - White, crisp */}
                        <path d="M 190 85 L 210 100 L 190 115" stroke="white" strokeWidth="4" fill="none" transform="rotate(-20 210 100)" />
                        <path d="M 390 215 L 410 200 L 390 185" stroke="white" strokeWidth="4" fill="none" transform="rotate(-20 410 200)" />
                        <path d="M 390 85 L 410 100 L 390 115" stroke="white" strokeWidth="4" fill="none" transform="rotate(20 410 100) translate(0 0)" />
                        <path d="M 190 215 L 210 200 L 190 185" stroke="white" strokeWidth="4" fill="none" transform="rotate(20 210 200)" />

                    </svg>
                </div>

            </div>
        </div>
    );
};

export default TechStackGrid;
