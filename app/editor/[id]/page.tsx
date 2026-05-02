"use client";

import React from "react";
import { useParams } from "next/navigation";

import { presentations } from "@/data/presentations";

import ChatPanel from "@/components/ChatPanel";
import ViewerPanel from "@/components/ViewerPanel";
import MobileBlocker from "@/components/MobileBlocker";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const presentation = presentations.find((p) => p.id === id);

  // ❌ Not found
  if (!presentation) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-white bg-bg">
        404 — Presentation not found
      </div>
    );
  }

  const handleSend = (msg: string) => {
    console.log(`[${id}]`, msg);
  };

  return (
    <React.Fragment>
      <div className="w-screen h-screen overflow-hidden bg-[#1c1c1c] font-inter">
        
        {/* 🔧 RESTORED mobile guard */}
        <div className="flex min-[960px]:hidden size-full">
          <MobileBlocker />
        </div>

        {/* 🔧 Main App */}
        <div className="hidden min-[960px]:flex size-full overflow-hidden">
          
          {/* Viewer */}
          <ViewerPanel
            slides={presentation.slides}
            presentationName={presentation.name}
          />

          {/* Chat */}
          <ChatPanel
            messages={presentation.chatHistory}
            onSend={handleSend}
          />

        </div>
      </div>
    </React.Fragment>
  );
}
