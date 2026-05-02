"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import MobileBlocker from "@/components/MobileBlocker";
import { presentations } from "@/data/presentations";
import svgPaths from "@/assets/svg";
import Logo from "@/assets/logo.png";
import { GithubIcon } from "@/lib/Icons";
import Link from "next/link";

/* ───────────── Icon (from editor) ───────────── */
function DocumentIcon() {
  return (
    <div className="h-10 w-7 relative shrink-0 text-text">
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

/* ───────────── Time Helper ───────────── */
function formatTime(date: Date) {
  const now = Date.now();
  const diff = now - date.getTime();

  const MIN = 60_000;
  const HOUR = 3_600_000;
  const DAY = 86_400_000;

  const minutes = Math.floor(diff / MIN);
  const hours = Math.floor(diff / HOUR);
  const days = Math.floor(diff / DAY);

  if (minutes < 1) return "Just now";
  if (hours < 1) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hr ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

/* ───────────── Navbar ───────────── */
function NavBar() {
  return (
    <div className="w-full border-b border-border">
      <div className="flex items-center justify-between px-12 py-2">
        {/* Left */}
        <div className="flex items-center gap-2">
          <DocumentIcon />
          <span className="text-muted font-ubuntu text-lg">
            flollama slides
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link href="https://github.com/flollama/flollama-slides" target="_blank" rel="noopener noreferrer">
            <button className="flex flex-row gap-2 justify-center items-center text-muted hover:text-text border border-transparent hover:border-border transition px-3 py-2 rounded-sm">
              <GithubIcon />
              Github
            </button>
          </Link>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-elevated">
            <Image
              src={Logo}
              alt="user"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Card ───────────── */
function Card({ p, onOpen }: any) {
  const time = p.lastEdited ?? p.createdAt;

  return (
    <div
      onClick={() => onOpen(p.id)}
      className="group relative flex flex-col rounded-md overflow-hidden border border-border cursor-pointer transition-all"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-transparent group-hover:bg-hover transition-colors z-0" />

      {/* content */}
      <div className="relative z-10 aspect-video">
        <Image
          src={p.slides[0]?.src}
          alt={p.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 px-3 py-2 flex flex-col gap-1">
        <p className="text-text text-sm truncate">{p.name}</p>
        <p className="text-subtle text-xs">
          {p.lastEdited ? "Edited " : "Created "}
          {formatTime(time)}
        </p>
      </div>
    </div>
  );
}

/* ───────────── Page ───────────── */
type SortMode = "recent" | "created" | "alpha";

export default function Page() {
  const router = useRouter();

  const [sort, setSort] = useState<SortMode>("recent");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let data = [...presentations];

    if (query) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (sort === "recent") {
      data.sort(
        (a, b) =>
          (b.lastEdited ?? b.createdAt).getTime() -
          (a.lastEdited ?? a.createdAt).getTime()
      );
    }

    if (sort === "created") {
      data.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
    }

    if (sort === "alpha") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    return data;
  }, [query, sort]);

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Mobile */}
      <div className="flex min-[960px]:hidden min-h-screen">
        <MobileBlocker />
      </div>

      {/* Desktop */}
      <div className="hidden min-[960px]:flex flex-col min-h-screen">
        <NavBar />

        <main className="px-12 pt-16 pb-10 flex-1">
          {/* Heading */}
          <div className="flex flex-col gap-2 mb-10">
            <h1 className="text-3xl font-inter font-semibold text-text">
              Hi, Pratyush..
            </h1>
            <p className="text-muted text-base font-poppins">
              What are we working on today?
            </p>
          </div>

          {/* Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-text text-base font-poppins font-bold">
              Your Projects:
            </h2>

            {/* Filters + Search */}
            <div className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-1.5">
                {[
                  { key: "recent", label: "Recently edited" },
                  { key: "created", label: "Date Created" },
                  { key: "alpha", label: "Alphabetical" },
                ].map((f) => {
                  const active = sort === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setSort(f.key as SortMode)}
                      className={`px-4 py-1.5 rounded-md text-xs font-inter border transition-all
                        ${
                          active
                            ? "border-accent text-accent bg-hover"
                            : "border-border text-muted hover:bg-hover"
                        }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 bg-elevated border border-border rounded-md px-3 py-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type to Search"
                  className="bg-transparent text-xs font-inter outline-none w-36 text-muted placeholder:text-subtle"
                />
                <Search size={14} className="text-subtle" />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 pt-1">
              {filtered.map((p) => (
                <Card
                  key={p.id}
                  p={p}
                  onOpen={(id: string) => router.push(`/editor/${id}`)}
                />
              ))}
            </div>

            <p className="text-subtle text-xs font-inter mt-2">
              {filtered.length} of {presentations.length} presentations
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
