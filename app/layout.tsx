import { Outfit, Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit YSWS",
  description: "Ship gravity, Defy gravity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <nav className="fixed top-0 w-full z-50 bg-[#010C15]/80 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <a href="/" className="border-[#006898] bg-transparent transition-all duration-300 hover:border-[#204B65] hover:bg-[#006898] border p-4 py-2 text-xl rounded-4xl">
                Home
              </a>


          </div>
        </div>
      </nav>
      {children}
    </body>
    </html >
  );
}