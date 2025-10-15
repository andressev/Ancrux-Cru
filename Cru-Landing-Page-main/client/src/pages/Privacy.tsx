import React, { useState } from "react";
import { Link } from "wouter";

export const Privacy = (): JSX.Element => {
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
            Privacy 
          </h1>

          <div className="[font-family:'Review_Mono-Regular',Helvetica] font-normal text-sm tracking-[0] leading-relaxed space-y-6 lg:text-base lg:space-y-8">
            <div>
              <p>
                Ancrux is a privacy project first. Without privacy, creators and viewers lose the control
                our protocol exists to protect, so every feature starts from that guarantee.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">
                Privacy as the Core of Freedom

              </h2>
              <p>
                Privacy is not secrecy — it’s control. Ancrux exists to protect the right to share,
                earn, and create without exposure. Every encrypted stream and payment flow is built
                to reveal only what’s necessary. No trackers. No identifiers. Only peers, code, and
                consent.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">
                Decentralized and Anonymous Media
              </h2>
              <p>
                Ancrux removes intermediaries between creators and audiences. Content is streamed and
                paid for directly through the Lightning Network, one satoshi at a time. You can use the protocol tuned to any infrastructure you want achieving fair media distribution. You can broadcast, watch, and get paid
                without surrendering identity.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">The Protocol and the Platform</h2>
              <p>
                The Ancrux protocol is open, decentralized, and self-hostable. The Ancrux platform lets
                users rely on our infrastructure if they prefer not to run their own. When you use our
                nodes, minimal operational data is temporarily processed — encrypted, never linked to
                identity, and automatically purged. We don’t sell information. Ever.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4">
                Financial Privacy and Anonymous Bitcoin
              </h2>
              <p>
                Money should be as private as speech. Ancrux integrates with tools that enable anonymous
                Bitcoin use — including peer-to-peer exchanges, privacy wallets, and Lightning-compatible
                mixers. No KYC. No surveillance. Payments stay between sender and receiver, as they should.
              </p>
            </div>

            <div>
              <h2 className="text-base mb-3 lg:text-xl lg:mb-4"> Our Commitment</h2>
              <p>
                Ancrux is a protocol for free expression and fair exchange — without compromise. We
                commit to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Never collecting personal data.</li>
                <li>Keeping all code open and auditable.</li>
                <li>Continuously improving encryption and decentralization.</li>
              </ul>
              <p className="mt-4">Privacy isn’t a feature. It’s the foundation.</p>
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
