import { Inter, Poppins, Ubuntu, Noto_Sans } from "next/font/google";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ThemeProvider from "@/utils/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://slides.flollama.in"),

  title: "Flollama Slides – AI Presentation Generator",
  description:
    "Create structured, visually compelling presentations instantly with Flollama Slides. AI-powered content generation and design automation for modern workflows.",

  keywords: [
    "Flollama Slides",
    "AI presentation generator",
    "AI slides maker",
    "presentation automation",
    "AI content generation",
    "Next.js AI tools",
    "Flollama",
  ],

  authors: [
    { name: "Flollama UnInc.", url: "https://github.com/flollama" },
    { name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app/" },
    { name: "Abdull Manan", url: "https://abdullmanan.xyz/" },
    { name: "Syed Haziq Zia", url: "https://github.com/syedhaziqzia" },
   // more yet to be added
  ],

  creator: "Flollama UnInc.",
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Flollama Slides – AI Presentation Generator",
    description:
      "Turn raw ideas into clean, structured slides using AI. Fast, smart, and beautifully designed presentations.",
    url: "https://slides.flollama.in",
    siteName: "Flollama Slides",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flollama Slides Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flollama Slides – AI Presentation Generator",
    description:
      "Generate stunning presentations instantly with AI-powered automation.",
    images: ["/og-image.png"],
    creator: "@nvmpratyush",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Kill app if JS is disabled */}
        <noscript>
          <style>{`
            body > *:not(noscript) {
              display: none !important;
            }
          `}</style>
        </noscript>

        {/* Enable JS → remove blocker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.remove('no-js');
            `,
          }}
        />
      </head>

      <body
         className={`
          ${inter.variable}
          ${poppins.variable}
          ${ubuntu.variable}
          ${noto.variable}
          min-h-full flex flex-col text-text bg-bg
        `}
      >
        
        {/* JS Disabled UI */}
        <noscript>
          <div className="fixed inset-0 flex items-center justify-center bg-bg z-[9999]">
            <div className="flex flex-col items-center gap-8 px-8 text-center">
              
              <span className="font-ubuntu text-2xl text-muted">
                flollama AI
              </span>

              <div className="w-12 h-px bg-border" />

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

        {/* App */}
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
