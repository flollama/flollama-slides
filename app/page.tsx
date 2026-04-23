"use client";

import Button from "@/components/ui/Buttons";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text px-6">
      <main className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Build Something Clean.
        </h1>

        {/* Paragraph */}
        <p className="text-text-muted text-lg max-w-xl">
          This is a starter homepage for Flollama projects. It exists purely to
          test UI components, typography, spacing, and theme behavior across
          light and dark modes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">

          {/* Primary Button → Issues */}
          <Button
            variant="primary"
          >
            View Tasks
          </Button>

          {/* Secondary Button → Repo */}
          <Button
            variant="outline"
          >
            View Repo
          </Button>

        </div>

        {/* Debug Info (Optional for devs) */}
        <div className="mt-8 text-sm text-text-muted opacity-70">
          <p>Theme, colors, spacing, and interactions test layer</p>
        </div>
      </main>
    </div>
  );
}