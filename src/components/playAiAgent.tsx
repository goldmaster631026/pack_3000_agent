// src/components/playAiAgent.tsx
"use client";

import { useEffect } from "react";

const PlayAiAgent = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.getElementById("playai-sdk")) {
      const script = document.createElement("script");
      script.id = "playai-sdk";
      script.type = "text/javascript";
      script.src = "https://cdn.jsdelivr.net/npm/@play-ai/agent-web-sdk@ht";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.PlayAI && typeof window.PlayAI.open === "function") {
          window.PlayAI.open("g2h8hTPr8-pVeFlOrguOx");
        }
      };
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.PlayAI && typeof window.PlayAI.open === "function") {
        window.PlayAI.open("g2h8hTPr8-pVeFlOrguOx");
      }
    }
  }, []);

  return <div id="play-ai-agent-container"></div>;
};

export default PlayAiAgent;
