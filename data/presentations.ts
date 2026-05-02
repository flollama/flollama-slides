// /data/presentations.ts
import bci1 from "@/assets/bci1.png";
import bci2 from "@/assets/bci2.png";
import bci3 from "@/assets/bci3.png";
import bci4 from "@/assets/bci4.png";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import aislide1 from "@/assets/aislide1.png";
import aislide2 from "@/assets/aislide2.png";
import aislide3 from "@/assets/aislide3.png";
import transparent from "@/assets/transparent.png";

/* ───────────────── TYPES ───────────────── */

export type Role = "user" | "assistant";

export interface Message {
  id: number;
  role: Role;
  content: string;
}

export interface Slide {
  id: number;
  src: any;
  label: string;
}

export interface Presentation {
  id: string;
  name: string;
  slides: Slide[];
  chatHistory: Message[];

  createdAt: Date;
  lastEdited?: Date;
}

/* ───────────────── HASH UTILS (SYNC) ───────────────── */

function hash8(input: string): string {
  let h1 = 0xdeadbeef ^ input.length;
  let h2 = 0x41c6ce57 ^ input.length;

  for (let i = 0; i < input.length; i++) {
    const ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);

  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return (h2 >>> 0).toString(16).padStart(8, "0");
}

function generateId(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${hash8(name)}`;
}

/* ───────────────── MOCK TIME HELPERS ───────────────── */

const now = Date.now();
const MIN = 60_000;
const HOUR = 3_600_000;
const DAY = 86_400_000;

/* ───────────────── DATA ───────────────── */

export const presentations: Presentation[] = [
  {
    id: generateId("untitled-design.pptx"),
    name: "Untitled Design",
    slides: [
      {
        id: 1,
        src: transparent,
        label: "Blank Slide",
      },
    ],
    chatHistory: [],

    createdAt: new Date(),
    lastEdited: undefined,
  },
  {
    id: generateId("about-humans.pptx"),
    name: "About Humans",
    slides: [
      { id: 1, src: slide1, label: "Cover" },
      { id: 2, src: slide2, label: "Human Nature" },
      { id: 3, src: slide3, label: "Future" },
    ],
    chatHistory: [
      { id: 1, role: "user", content: "Make a Presentation about Humans" },
      {
        id: 2,
        role: "assistant",
        content:
          "I've created a 3-slide presentation about humans, covering who we are, what defines us, and how we can build a better future together.",
      },
      { id: 3, role: "user", content: "Change the Colors to Light Theme" },
      {
        id: 4,
        role: "assistant",
        content:
          "I've updated the presentation with a light theme using white tones and added relevant images to enhance the visuals.",
      },
    ],

    createdAt: new Date(now - 7 * DAY),
    lastEdited: new Date(now - 4 * HOUR),
  },

  {
    id: generateId("ai-future.pptx"),
    name: "AI future",
    slides: [
      { id: 1, src: aislide1, label: "AI Intro" },
      { id: 2, src: aislide2, label: "Power of AI" },
      { id: 3, src: aislide3, label: "Conclusion" },
    ],
    chatHistory: [
      {
        id: 1,
        role: "user",
        content: "Create a modern presentation on Artificial Intelligence",
      },
      {
        id: 2,
        role: "assistant",
        content:
          "Done. I've generated a 3-slide presentation covering AI basics, its real-world power, and future impact with a modern layout.",
      },
      {
        id: 3,
        role: "user",
        content: "Use a dark blue theme and make it look futuristic",
      },
      {
        id: 4,
        role: "assistant",
        content:
          "Updated. The slides now use a deep blue futuristic theme with clean typography and glowing accent elements.",
      },
      {
        id: 5,
        role: "user",
        content: "Make the second slide more impactful",
      },
      {
        id: 6,
        role: "assistant",
        content:
          "Enhanced the second slide with stronger headings, better visual hierarchy, and key AI applications highlighted.",
      },
      {
        id: 7,
        role: "user",
        content: "Add a strong ending message in the last slide",
      },
      {
        id: 8,
        role: "assistant",
        content:
          "Added a powerful conclusion emphasizing how AI will shape the future and why it matters now.",
      },
    ],

    createdAt: new Date(now - 2 * DAY),
    lastEdited: undefined,
  },
  {
    id: generateId("bci-tech.pptx"),
    name: "BCI Tech",
    slides: [
      { id: 1, src: bci1, label: "Introduction" },
      { id: 2, src: bci2, label: "How It Works" },
      { id: 3, src: bci3, label: "Applications" },
      { id: 4, src: bci4, label: "Future Scope" },
    ],
    chatHistory: [
      {
        id: 1,
        role: "user",
        content: "Create a minimal 4-slide presentation on Brain-Computer Interfaces",
      },
      {
        id: 2,
        role: "assistant",
        content:
          "Done. I've created a clean 4-slide presentation covering introduction, working, applications, and future scope of BCI.",
      },
      {
        id: 3,
        role: "user",
        content: "Use a dark blue futuristic theme",
      },
      {
        id: 4,
        role: "assistant",
        content:
          "Updated. The presentation now uses a deep blue tech-inspired theme with minimal text and strong visuals.",
      },
      {
        id: 5,
        role: "user",
        content: "Keep content minimal and visual-focused",
      },
      {
        id: 6,
        role: "assistant",
        content:
          "Refined. Each slide now highlights only key ideas with clean layout and visual emphasis for better impact.",
      },
    ],

    createdAt: new Date(now - 1 * DAY),
    lastEdited: new Date(now - 30 * MIN),
  }
];

/* ───────────────── FAST LOOKUP ───────────────── */

export const presentationMap: Record<string, Presentation> =
  Object.fromEntries(presentations.map((p) => [p.id, p]));
