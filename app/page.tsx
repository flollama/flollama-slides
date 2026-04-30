"use client";
import React from "react";

import Button from "@/components/ui/Buttons";
import MobileBlocker from "@/components/MobileBlocker";
import ChatPanel from "@/components/ChatPanel";
import ViewerPanel from "@/components/ViewerPanel";

export default function Home() {
  return (
    <React.Fragment>
      <noscript>
        <div className="fixed inset-0 flex items-center justify-center bg-bg z-[9999]">
          <div className="flex flex-col items-center gap-8 px-8 text-center">
      
            {/* Brand */}
            <div className="flex flex-col items-center gap-4 text-muted">
              <span className="font-ubuntu text-2xl">
                flollama AI
              </span>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-border" />

            {/* Message */}
            <div className="flex flex-col gap-2 max-w-xs">
              <p className="text-sm font-inter text-muted">
                This application requires JavaScript to run.
              </p>
              <p className="text-xs font-inter text-subtle">
                Please enable JavaScript to continue.
              </p>
            </div>

          </div>
        </div>
      </noscript>
    
      {/* ── Bounce keyframe for typing indicator ── */}
      <style>{`
        @keyframes flollama-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%            { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>

      <div
        className="w-screen h-screen overflow-hidden bg-[#1c1c1c] font-inter"
      >
        {/* ── Desktop-only blocker (< 960 px) ── */}
        <div className="flex min-[960px]:hidden size-full">
          <MobileBlocker />
        </div>

        {/* ── Main App (≥ 960 px) ── */}
        <div className="hidden min-[960px]:flex size-full overflow-hidden">
          <ViewerPanel />
          <ChatPanel />
        </div>
      </div>
    </React.Fragment>
  );
}
