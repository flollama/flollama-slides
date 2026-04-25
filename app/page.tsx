"use client";

import Button from "@/components/ui/Buttons";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text px-6">
      <main className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Build Something Clean.
        </h1>

        <p className="text-text-muted text-lg max-w-xl">
          This is a starter homepage for Flollama projects. It exists purely to
          test UI components, typography, spacing, and theme behavior across
          light and dark modes.
        </p>

        <div className="flex flex-col sm:flex-col gap-4 mt-4">
          <Button variant="primary" href="https://github.com/orgs/flollama/projects/1">View Project</Button>
          <Button variant="secondary">I'm Useless</Button>
          <Button variant="outline" href="https://github.com/flollama/flollama-slides.git">View Repo</Button>
        </div>

        <div className="mt-8 text-sm text-text-muted opacity-70">
          <p>Theme, colors, spacing, and interactions test layer</p>
        </div>
      </main>
    </div>
  );
}