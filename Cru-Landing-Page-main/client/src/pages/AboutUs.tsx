import React, { useState } from "react";
import { Link } from "wouter";

export const AboutUs = (): JSX.Element => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyNpub = async () => {
    const npub = "npub1wnwtk7f0w57jndwrrg6e5f7x6tgxzjutt0yuj92rj0t8fuvh0dfsj4avm9";
    try {
      await navigator.clipboard.writeText(npub);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy npub:", err);
    }
  };

  return (
    <main className="bg-black overflow-hidden w-full min-h-screen relative lg:min-w-[1440px] lg:min-h-[1024px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black" />

      {/* Logo - responsive */}
      <Link href="/">
        <a className="absolute top-4 left-4 w-[100px] h-auto cursor-pointer lg:top-8 lg:left-8 lg:w-[200px]">
          <img
            className="w-full h-auto"
            alt="CRU Logo"
            src="/figmaAssets/Logo.svg"
          />
        </a>
      </Link>

      {/* Content - responsive */}
      <div className="absolute top-[80px] left-0 right-0 bottom-[140px] overflow-y-auto px-4 pb-24 lg:top-[100px] lg:left-1/2 lg:-translate-x-1/2 lg:w-[900px] lg:max-h-[800px] lg:px-8 lg:bottom-[80px] lg:pb-0">
        <div className="text-white max-w-[900px] mx-auto">
          <h1 className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-lg text-center tracking-[0] leading-[normal] mb-8 lg:text-2xl lg:mb-12">
            Time has value, and value finds its rhythm.
          </h1>

          <div className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-sm tracking-[0] leading-relaxed space-y-6 lg:text-base lg:space-y-8">
            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">The Illusion of Free</h2>
              <p>
                We’ve mistaken “free” for freedom, forgetting that creation was never meant to be endless.<br />
                True storytelling lives in rhythm, in the weight of each frame, in time well spent.<br />
                Here, time regains its worth as every second watched becomes a moment of exchange between creator and viewer.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">Conscious Consumption</h2>
              <p>
                Cru transforms consumption into awareness.<br />
                Every second you watch, you pay.<br />
                Every frame holds weight.<br />
                When consumption has a cost, awareness returns.<br />
                You begin to see what truly matters, what's worth your time.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">Conscious Creation</h2>
              <p>
                For creators, Cru is liberation.<br />
                No intermediaries. No platforms taking their cut.<br />
                Every sat paid flows directly from viewer to creator.<br />
                Value for value, in its purest form.<br />
                If your work moves people, it earns.<br />
                If it doesn't, the silence speaks for itself.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">A new Home for Cinema</h2>
              <p>
                Cru begins by disrupting what's broken.<br />
                Streaming monopolies that gate content, strip ownership, and decide what stories deserve to be told.<br />
                Here, every creator owns their idea completely.<br />
                100% of what's created returns to its source.<br />
                We're building a space for the filmmakers who never fit the mold—the ones who make art, not content.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">Value for Value</h2>
              <p>
                This is the principle that binds Cru:<br />
                Give value for value.<br />
                Every interaction, every moment watched, every sat exchanged.<br />
                A direct conversation between creator and consumer.<br />
                Powered by open protocols—Nostr for connection, Bitcoin for flow.<br />
                No gatekeepers. No extraction. Only exchange.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">Time is Too Precious to Waste</h2>
              <p>
                Cru isn't another platform.<br />
                It's a correction.<br />
                A reminder that your time is your wealth.<br />
                Spend it wisely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - responsive */}
      <footer className="absolute bottom-4 left-4 right-4 px-4 lg:top-[963px] lg:bottom-auto lg:left-[calc(50.00%_-_780px)] lg:w-[1549px]">
        <div className="relative z-20 flex justify-between items-center mb-4 lg:mb-6">
          <div className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap lg:text-[15px]">
            BUILT ON NOSTR
          </div>

          <Link href="/">
            <a className="relative z-30 [font-family:'Review_Mono-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-400 transition-colors cursor-pointer lg:text-[15px]">
              BACK TO HOME
            </a>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="relative z-10 w-full flex justify-center items-center gap-6 lg:gap-8 mt-6 mb-2 translate-y-0 lg:-translate-y-14 shrink-0">
          <button
            onClick={handleCopyNpub}
            className="relative z-10 bg-transparent border-0 p-0 hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center min-w-[60px] min-h-[60px]"
            title="Copy npub"
            aria-label="Copy npub to clipboard"
          >
            <img
              src="/figmaAssets/Nostr.png"
              alt="Nostr"
              className="w-8 h-8 lg:w-10 lg:h-10 pointer-events-none"
            />
            {showCopied && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded text-xs whitespace-nowrap [font-family:'Review_Mono-Regular',Helvetica] animate-in fade-in duration-200 z-50 lg:-top-12">
                Npub copied!
              </div>
            )}
          </button>
          <a
            href="https://x.com/cru_net"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 hover:opacity-70 transition-opacity flex items-center justify-center min-w-[60px] min-h-[60px]"
            title="Follow on X"
            aria-label="Follow on X"
          >
            <img
              src="/figmaAssets/X.png"
              alt="X (Twitter)"
              className="w-8 h-8 lg:w-10 lg:h-10 pointer-events-none"
            />
          </a>
          <a
            href="https://www.instagram.com/cru_network"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 hover:opacity-70 transition-opacity flex items-center justify-center min-w-[60px] min-h-[60px]"
            title="Follow on Instagram"
            aria-label="Follow on Instagram"
          >
            <img
              src="/figmaAssets/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6 lg:w-8 lg:h-8 pointer-events-none"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};
