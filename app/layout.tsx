import { Outfit, Lora, Baumans, Geist } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const baumans = Baumans({
  variable: "--font-baumans",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Orbit YSWS",
  description: "Ship gravity, Defy gravity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", outfit.variable, lora.variable, baumans.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col font-sans">
        <nav className="absolute w-full z-20 bg-transparent">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-end">
            <div className="flex items-center gap-2">
              <a href="/#about" className="border-[#006898] text-white bg-transparent transition-all duration-300 hover:border-[#204B65] hover:bg-[#006898] border-2  p-4 py-2 text-2xl font-(family-name:--font-lora) rounded-4xl">
                about
              </a>
              <a href="/#rewards" className="border-[#006898] text-white bg-transparent transition-all duration-300 hover:border-[#204B65] hover:bg-[#006898] border-2  p-4 py-2 text-2xl font-(family-name:--font-lora) rounded-4xl">
                rewards
              </a>
              <a href="/#faq" className="border-[#006898] text-white bg-transparent transition-all duration-300 hover:border-[#204B65] hover:bg-[#006898] border-2  p-4 py-2 text-2xl font-(family-name:--font-lora) rounded-4xl">
                faq
              </a>
            </div>
          </div>
        </nav>
        <div className="absolute top-0 left-0 z-20">
          <img
            src="https://assets.hackclub.com/flag-orpheus-left.svg"
            alt="Hack Club"
            className="w-60 h-auto"
          />
        </div>
        {children}
      </body>
    </html >
  );
}