
import React from "react";
import { cn } from "@/lib/utils/cn";

export interface JewelHexagonProps {
    children?: React.ReactNode;
    className?: string;
    gradientFrom?: string;
    gradientTo?: string;
}

export const JewelHexagon = ({
    children,
    className,
    gradientFrom = "#3b82f6", // Default Blue
    gradientTo = "#0ea5e9",   // Default Cyan
}: JewelHexagonProps) => {
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
                    clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
            />
            {/* Outer Border (SVG) */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M50 0.5L99.5 25.25V74.75L50 99.5L0.5 74.75V25.25L50 0.5Z"
                    stroke="white"
                    opacity={0.5}
                    strokeWidth="2"
                />
            </svg>

            {/* 2. Inner Jewel Hexagon (The Colorful Part) */}
            {/* Sized approx 60% of outer */}
            <div className="relative w-14 h-14 flex items-center justify-center z-10">
                {/* Jewel Background Gradient */}
                <div
                    className="absolute inset-0 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                    style={{
                        clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                    }}
                />

                {/* Jewel Facets (Overlays for 3D look) */}
                {/* Top-Left Facet (Lighter) */}
                <div
                    className="absolute inset-0 bg-white/20"
                    style={{
                        clipPath: "polygon(50% 50%, 0% 25%, 50% 0%, 100% 25%)",
                    }}
                />
                {/* Bottom-Right Facet (Darker) */}
                <div
                    className="absolute inset-0 bg-black/20"
                    style={{
                        clipPath: "polygon(50% 50%, 100% 75%, 50% 100%, 0% 75%)",
                    }}
                />

                {/* Inner Highlight/Border for Jewel */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <path
                        d="M50 1L98 25V75L50 99L2 75V25L50 1Z"
                        stroke="white"
                        strokeWidth="3"
                    />
                </svg>

                {/* Content Icon */}
                <div className="relative z-20 drop-shadow-md text-white">
                    {children}
                </div>
            </div>
        </div>
    );
};
