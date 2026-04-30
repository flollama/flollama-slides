"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reorder, motion, AnimatePresence } from "framer-motion";
import svgPaths from "@/assets/svg";
import slide1Src from "@/assets/slide1.png";
import slide2Src from "@/assets/slide2.png";
import slide3Src from "@/assets/slide3.png";

const initialSlides = [
  { id: 1, src: slide1Src, label: "Humans – Cover" },
  { id: 2, src: slide2Src, label: "What Makes Us Human?" },
  { id: 3, src: slide3Src, label: "Building a Better Future" },
];

function DocumentIcon() {
  return (
    <div className="h-9 w-6 relative shrink-0 text-text m-1">
      <svg viewBox="0 0 16 23" className="absolute inset-0 size-full">
        <g clipPath="url(#clip_doc_icon)">
          <path d={svgPaths.p164a0840} fill="currentColor" />
          <path d={svgPaths.p39b65000} fill="currentColor" />
          <path d={svgPaths.p193b7500} fill="currentColor" />
          <path d={svgPaths.p3ca30400} fill="currentColor" />
          <path d={svgPaths.pc1f9f00} fill="currentColor" />
          <path d={svgPaths.p3e0dd000} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

const navActions = ["Home", "Undo", "Redo", "Download"];

export default function ViewerPanel({ presentationName = "humans.pptx" }) {
  const [slides, setSlides] = useState(initialSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ FIXED TYPES
  const [thumbError, setThumbError] = useState<Record<number, boolean>>({});
  const [thumbLoading, setThumbLoading] = useState<Record<number, boolean>>({});

  const currentSlide = slides[activeSlide];

  useEffect(() => {
    setImgError(false);
    setIsLoading(true);
  }, [currentSlide.id]);

  return (
    <div className="flex-1 flex flex-col h-full min-w-[640px] border-r-2 border-border overflow-hidden bg-bg">
      {/* Top */}
      <div className="relative h-10 flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <DocumentIcon />
          {navActions.map((label) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={label}
              className="px-1.5 py-2 text-sm font-light font-inter text-muted hover:text-text transition-colors cursor-pointer select-none"
            >
              {label}
            </motion.button>
          ))}
        </div>
        <span className="text-sm text-muted">{presentationName}</span>
        <div className="absolute bottom-0 inset-x-0 h-px bg-border" />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-6">
        <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-bg-elevated" />

          {isLoading && !imgError && (
            <motion.div
              className="absolute inset-0 bg-elevated"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />
          )}

          <AnimatePresence mode="wait">
            {!imgError && (
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentSlide.src}
                  alt="slide"
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setImgError(true);
                    setIsLoading(false);
                  }}
                  priority
                  loading="eager"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {imgError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center text-subtle"
            >
              No preview
            </motion.div>
          )}
        </div>

        {/* Thumbnails */}
        <Reorder.Group
          axis="x"
          values={slides}
          onReorder={(newSlides) => {
            setSlides(newSlides);
            const newIndex = newSlides.findIndex(
              (s) => s.id === currentSlide.id
            );
            setActiveSlide(newIndex);
          }}
          className="flex flex-wrap gap-2.5 justify-center"
        >
          {slides.map((slide, i) => {
            const isActive = i === activeSlide;

            // ✅ FIXED SAFE ACCESS
            const isThumbLoading = thumbLoading[i] ?? true;

            return (
              <Reorder.Item
                key={slide.id}
                value={slide}
                whileDrag={{ scale: 1.1, zIndex: 10 }}
                className="flex flex-col items-center gap-1.5 p-1 w-36 h-24 cursor-grab active:cursor-grabbing"
                onClick={() => setActiveSlide(i)}
              >
                <motion.div
                  layout
                  className="relative w-full h-full rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-bg-elevated" />

                  {isThumbLoading && !thumbError[i] && (
                    <motion.div
                      className="absolute inset-0 bg-elevated"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    />
                  )}

                  {!thumbError[i] && (
                    <Image
                      src={slide.src}
                      alt="thumb"
                      fill
                      sizes="144px"
                      className={`object-cover transition-opacity ${
                        isThumbLoading ? "opacity-0" : "opacity-80"
                      }`}
                      onLoad={() =>
                        setThumbLoading((p) => ({ ...p, [i]: false }))
                      }
                      onError={() =>
                        setThumbError((p) => ({ ...p, [i]: true }))
                      }
                    />
                  )}

                  {thumbError[i] && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-subtle">
                      Preview
                    </div>
                  )}

                  <motion.div
                    layout
                    className={`absolute inset-0 border-2 rounded-lg ${
                      isActive ? "border-accent" : "border-border"
                    }`}
                  />
                </motion.div>

                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                  />
                )}
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>
    </div>
  );
}

