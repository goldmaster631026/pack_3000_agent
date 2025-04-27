// src/components/PlayAiAgent.tsx
"use client";

import { useEffect } from "react";
import Script from "next/script";

const PlayAiAgent = () => {
  useEffect(() => {
    // Initialize PlayAI only after the script has loaded and PlayAI is available
    if (typeof window !== "undefined" && window.PlayAI && typeof window.PlayAI.open === "function") {
      window.PlayAI.open("g2h8hTPr8-pVeFlOrguOx");
    }
  }, []);

  return (
    <>
      {/* Load PlayAI SDK asynchronously with Next.js Script component */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@play-ai/agent-web-sdk@ht"
        strategy="afterInteractive" // loads script after hydration
        onLoad={() => {
          if (window.PlayAI && typeof window.PlayAI.open === "function") {
            window.PlayAI.open("g2h8hTPr8-pVeFlOrguOx");
          }
        }}
        onError={() => {
          console.error("Failed to load PlayAI SDK script");
        }}
      />
      <div id="play-ai-agent-container"> Here</div>
    </>
  );
};

export default PlayAiAgent;
