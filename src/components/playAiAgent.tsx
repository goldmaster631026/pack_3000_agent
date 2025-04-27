// src/components/playAiAgent.tsx
"use client";
// PlayAIAgent.tsx
import React, { useEffect } from 'react';
declare global {
    interface Window {
      PlayAI: {
        open: (agentId: string) => void;
      };
    }
  }
const PlayAIAgent = () => {
    
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@play-ai/agent-web-sdk@latest';
    document.body.appendChild(script);

    const eventListener = () => {
      window.PlayAI.open('g2h8hTPr8-pVeFlOrguOx');
    };
    window.addEventListener('load', eventListener);

    return () => {
      window.removeEventListener('load', eventListener);
    };
  }, []);

  return null;
};

export default PlayAIAgent;