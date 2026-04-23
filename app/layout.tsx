import { Inter, Poppins, Ubuntu, Noto_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/theme/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

// export const metadata = {
//   title: "Flollama – Open‑Source Gemini 2.0 Flash Lite AI Chatbot by Pratyush",
//   description:
//     "Flollama by Pratyush is an open‑source, privacy‑first AI chatbot built with Gemini and Next.js. Enjoy fast, stylish conversations powered by the Gemini 2.0 Flash Lite.",
//   keywords: [
//     "Flollama",
//     "AI chatbot",
//     "Gemini 2.0 Flash Lite",
//     "open‑source",
//     "Gemini",
//     "Next.js",
//     "private AI",
//     "React AI",
//     "Tailwind CSS",
//     "Pratyush",
//   ],
//   authors: [{ name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app/" }],
//   creator: "Pratyush Kumar",
//   robots: "index, follow",
//   metadataBase: new URL("https://flollama.in"),
//   alternates: {
//     canonical: "/",
//   },

//   icons: {
//     icon: [
//       { url: "/favicon.svg", type: "image/svg+xml" },
//       { url: "/favicon.webp", type: "image/webp", sizes: "32x32" },
//     ],
//     apple: "/apple-touch-icon.png",
//   },

//   openGraph: {
//     title:
//       "Flollama – Open‑Source Gemini 2.0 Flash Lite AI Chatbot by Pratyush",
//     description:
//       "Flollama is a blazing‑fast, private AI chatbot powered by Gemini 2.0 Flash Lite, built with Next.js and Tailwind CSS. No API key required—chat instantly.",
//     url: "https://flollama.in/",
//     siteName: "Flollama",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Banner for Flollama AI",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Flollama – Open‑Source LLaMA 3 AI Chatbot",
//     description:
//       "Flollama by Pratyush is an open‑source AI chatbot with Ollama + Next.js. Enjoy private, fast chats powered by LLaMA 3—no API key needed.",
//     images: ["/og-image.png"],
//     creator: "@nvmpratyush",
//   },

//   verification: {
//     google: "jRUy_ry4PSX-sDVpjn9c4bc-eVC5f_w4E5IVyTepHC8",
//   },

//   other: {
//     "geo.region": "IN-CT",
//     "geo.placename": "Durg, Chhattisgarh",
//     "geo.position": "21.1905;81.2849",
//     ICBM: "21.1905, 81.2849",
//     "revisit-after": "7 days",
//     language: "en-US",
//   },
// };

export const metadata: Metadata = {
  title: "flollama slides",
  description: "AI-powered presentation engine that transforms raw ideas into structured, visually compelling slides using intelligent content generation and design automation.",
  keywords: [
    "flollama slides",
    "ai-powered presentation",
    "intelligent content generation",
    "design automation",
    "presentation engine",
    "structured slides",
    "visually compelling slides",
  ],
  authors: [
    { name: "Flollama UnInc.", url: "https://github.com/flollama" },
    { name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app/" },
    { name: "Abdull Manan", url: "https://abdullmanan.xyz/" },
    // ... [more]
  ],
  creator: "Flollama UnInc.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          ${ubuntu.variable}
          ${noto.variable}
          min-h-full flex flex-col
        `}
      >
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
