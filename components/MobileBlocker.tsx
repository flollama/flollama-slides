import { Monitor } from "lucide-react";
import svgPaths from "@/assets/svg";

function FlollamaLogoMini() {
  return (
    <div className="h-10 w-9 relative opacity-60">
      <svg
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 32"
        className="absolute inset-0 block size-full"
      >
        <g clipPath="url(#clip_blocker_logo)">
          <path d={svgPaths.p3e749db2} fill="currentColor" />
          <path d={svgPaths.p37d4ae00} fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip_blocker_logo">
            <rect fill="white" height="32" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function MobileBlocker() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-8 bg-bg">
      
      {/* Brand */}
      <div className="flex flex-col items-center gap-4 text-muted">
        <FlollamaLogoMini />
        <span className="font-ubuntu text-2xl leading-none">
          flollama AI
        </span>
      </div>

      {/* Separator */}
      <div className="w-12 h-px bg-border" />

      {/* Desktop-only notice */}
      <div className="flex flex-col items-center gap-3 max-w-xs">
        
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-elevated border border-border">
          <Monitor size={20} className="text-icon" />
        </div>

        <p className="text-sm font-inter font-light text-center text-muted leading-relaxed">
          This application can only be used in Desktop
        </p>

        <p className="text-xs font-inter text-center text-subtle leading-relaxed">
          Please open Flollama Slides on a screen wider than 960 px.
        </p>
      </div>
    </div>
  );
}
