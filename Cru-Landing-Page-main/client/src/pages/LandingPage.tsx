import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";

export const LandingPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email;

    try {
      const form = new FormData();
      form.append("email", value);

      const res = await fetch("https://formspree.io/f/xgvnnwkn", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: form,
      });

      let data: any = {};
      try { data = await res.json(); } catch {}

      if (!res.ok) {
        const msg = data?.errors?.[0]?.message || `Error ${res.status}`;
        throw new Error(msg);
      }

      setMessage("Time noted. You'll hear from us soon.");
      setEmail("");
    } catch (err: any) {
      setMessage(err?.message || "Error sending. Please try again later.");
    }
  };

  return (
    <main className="bg-black overflow-x-hidden w-full min-h-screen relative lg:min-w-[1440px] lg:min-h-[1024px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black" />

      {/* Logo - responsive */}
      <img
        className="absolute top-[40px] left-[calc(50%+30%)] -translate-x-1/2 w-[140vw] max-w-[600px] h-auto pointer-events-none select-none z-20 sm:w-[120vw] sm:top-[60px] lg:top-[60px] lg:left-[160px] lg:translate-x-0 lg:w-[1650px] lg:max-w-none"
        alt="CRU Logo"
        src="/figmaAssets/Logo.svg"
      />

      {/* Welcome text - responsive */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[90%] max-w-[439px] [font-family:'Review_Mono-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal] sm:text-base sm:top-[240px] lg:top-[386px] lg:left-[241px] lg:translate-x-0 lg:text-[15px] lg:w-[330px]">
        WELCOME TO CRU.
        <br />
        JOIN THE WAITLIST.
      </div>

      {/* Form - responsive */}
      <form onSubmit={handleSubmit} className="absolute top-[260px] left-1/2 -translate-x-1/2 w-[85%] max-w-[439px] sm:top-[310px] sm:w-[90%] lg:top-[443px] lg:left-[237px] lg:translate-x-0 lg:w-[330px]">
        <div className="relative mt-2">
          <Input
            id="email-input"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-[#686767]/40 focus:border-[#686767]/60 hover:border-[#686767]/50 text-white [font-family:'Review_Mono-Regular',Helvetica] placeholder:text-[#686767]/60 text-sm sm:text-base lg:text-sm pr-10"
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
            aria-label="Submit email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </form>

      {/* Message - responsive */}
      {message && (
        <div className="absolute top-[330px] left-1/2 -translate-x-1/2 w-[85%] max-w-[439px] text-white [font-family:'Review_Mono-Regular',Helvetica] text-center text-sm sm:top-[385px] sm:w-[90%] sm:text-base lg:top-[503px] lg:left-[237px] lg:translate-x-0 lg:w-[330px] lg:text-sm">
          {message}
        </div>
      )}

      {/* Animation - responsive, video replacement for GIF */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="block absolute top-[380px] left-1/2 -translate-x-1/2 w-[85%] max-h-[250px] object-cover z-10 sm:top-[440px] sm:w-[90%] sm:max-h-[280px] lg:top-[360px] lg:right-[50px] lg:left-auto lg:translate-x-0 lg:w-[690px] lg:h-[301px] lg:max-h-none"
      >
        <source src="/figmaAssets/CruLoop.webm" type="video/webm" />
        <source src="/figmaAssets/CruLoop.mp4" type="video/mp4" />
      </video>

      {/* Footer - responsive */}
      <footer className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4 lg:top-[822px] lg:bottom-auto lg:left-[calc(50%-580px)] lg:w-[1160px] lg:h-[15px]">
        <div className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap lg:text-[11px]">
          BUILT ON NOSTR
        </div>

        <div className="flex gap-4 lg:gap-6">
          <Link href="/about">
            <a className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-400 transition-colors cursor-pointer lg:text-[11px]">
              ABOUT US
            </a>
          </Link>
          
          <Link href="/privacy">
            <a className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-400 transition-colors cursor-pointer lg:text-[11px]">
              PRIVACY
            </a>
          </Link>
        </div>
      </footer>
    </main>
  );
};