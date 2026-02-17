import { Rocket, Leaf, RefreshCw } from "lucide-react";
import { JewelHexagon } from "./jewel-hexagon";
import { GitLabLogo, TerraformLogo } from "./logos";
import { JEWEL_COLORS } from "./constants";

const TechStackGrid = () => {
  return (
    <div className="relative mx-auto flex min-h-[600px] w-full max-w-4xl items-center justify-center overflow-hidden py-20">
      {/* Container for the Grid - Centered */}
      <div className="relative h-[500px] w-[500px]">
        {/* 1. Top (GitLab) - Orange */}
        <div className="absolute top-[30px] left-[180px]">
          <JewelHexagon gradientFrom={JEWEL_COLORS.orange.from} gradientTo={JEWEL_COLORS.orange.to}>
            <GitLabLogo />
          </JewelHexagon>
        </div>

        {/* 2. Top-Left (>) - The Reference Blue Tile */}
        <div className="absolute top-[30px] left-[60px]">
          <JewelHexagon gradientFrom={JEWEL_COLORS.blue.from} gradientTo={JEWEL_COLORS.blue.to}>
            <span className="pb-1 text-2xl font-bold">{">"}</span>
          </JewelHexagon>
        </div>

        {/* 3. Top-Right (Refresh/Sync) - Blue/Cyan */}
        <div className="absolute top-[30px] right-[90px]">
          <JewelHexagon gradientFrom={JEWEL_COLORS.cyan.from} gradientTo={JEWEL_COLORS.blue.to}>
            <RefreshCw className="h-5 w-5" />
          </JewelHexagon>
        </div>

        {/* --- Middle Row --- */}

        {/* 4. Left (TC) - Vertically Centered, Far Left - Purple */}
        <div className="absolute top-[36%] left-[0px] -translate-y-1/2">
          <JewelHexagon gradientFrom={JEWEL_COLORS.purple.from} gradientTo={JEWEL_COLORS.purple.to}>
            <TerraformLogo />
          </JewelHexagon>
        </div>

        {/* 5. Right (Circle) - Vertically Centered, Far Right - Gray/Blue */}
        <div className="absolute top-[36%] right-[25px] -translate-y-1/2">
          <JewelHexagon gradientFrom={JEWEL_COLORS.gray.from} gradientTo={JEWEL_COLORS.gray.to}>
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-white">
              <div className="absolute top-1/2 -right-[1px] h-2 w-2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </JewelHexagon>
        </div>

        {/* --- Bottom Row --- */}

        {/* 6. Bottom-Left (Leaf) - Green */}
        <div className="absolute top-[43%] left-[60px]">
          <JewelHexagon gradientFrom={JEWEL_COLORS.green.from} gradientTo={JEWEL_COLORS.green.to}>
            <div className="flex items-center">
              <span className="bracket text-lg font-thin text-white/70">(</span>
              <Leaf className="h-4 w-4 fill-white stroke-white" />
              <span className="bracket text-lg font-thin text-white/70">)</span>
            </div>
          </JewelHexagon>
        </div>

        {/* 7. Bottom-Right (Rocket) - Blue */}
        <div className="absolute top-[43%] right-[88px]">
          <JewelHexagon gradientFrom={JEWEL_COLORS.blue.from} gradientTo={JEWEL_COLORS.blue.to}>
            <Rocket className="h-5 w-5 text-white" />
          </JewelHexagon>
        </div>

        {/* 8. Bottom Center (Ship) - Cyan/Teal */}
        <div className="absolute top-[43%] left-[47%] -translate-x-1/2">
          <JewelHexagon gradientFrom={JEWEL_COLORS.cyan.from} gradientTo={JEWEL_COLORS.cyan.to}>
            <div className="relative flex h-8 w-8 items-center justify-center">
              {/* Simple Ship Icon */}
              <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                <path d="M12 22L3 18V10L12 14L21 10V18L12 22Z" />
              </svg>
            </div>
          </JewelHexagon>
        </div>

        {/* Infinity Loop Overlay */}
        {/* Used distinct segments with gradients to match the "3D" feel */}
        <div className="pointer-events-none absolute top-[5%] -left-[13%] z-0 flex scale-[0.65] items-center justify-center">
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

              {/* Arrow Shape Definition */}
              <symbol id="arrow-head" viewBox="-15 -15 30 30">
                <path
                  d="M -10 -10 L 10 0 L -10 10"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </symbol>
            </defs>

            {/* Infinity Path with ID for animation */}
            <path
              id="infinity-path"
              d="M 300 150 C 380 50, 500 50, 500 150 C 500 250, 380 250, 300 150 C 220 50, 100 50, 100 150 C 100 250, 220 250, 300 150 Z"
              stroke="url(#infinityGrad)"
              strokeWidth="35"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />

            {/* Animated Arrows */}
            {/* We use <use> with animateMotion to move the arrows along the path */}

            {/* Arrow 1 */}
            <use href="#arrow-head" width="30" height="30" x="-15" y="-15">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#infinity-path" />
              </animateMotion>
            </use>

            {/* Arrow 2 - Offset by 1.5s (25%) */}
            <use href="#arrow-head" width="30" height="30" x="-15" y="-15">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                begin="-1.5s"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#infinity-path" />
              </animateMotion>
            </use>

            {/* Arrow 3 - Offset by 3s (50%) */}
            <use href="#arrow-head" width="30" height="30" x="-15" y="-15">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                begin="-3s"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#infinity-path" />
              </animateMotion>
            </use>

            {/* Arrow 4 - Offset by 4.5s (75%) */}
            <use href="#arrow-head" width="30" height="30" x="-15" y="-15">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                begin="-4.5s"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#infinity-path" />
              </animateMotion>
            </use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TechStackGrid;
