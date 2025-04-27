"use client";
import { useEffect, useState } from "react";
import { open as openEmbed } from "@play-ai/agent-web-sdk";

const webEmbedId = "g2h8hTPr8-pVeFlOrguOx";

export default function PlayAiAgent() {
  const [text, setText] = useState("Change this text");

  const events = [
    {
      name: "change-text",
      when: "The user says what they want to change the text on the screen to",
      data: {
        text: { type: "string", description: "The text to change to" },
      },
    },
  ] as const;

  const onEvent = (event: any) => {
    console.log("onEvent: ", event);
    if (event.name === "change-text") {
      setText(event.data.text);
    }
  };

  useEffect(() => {
    openEmbed(webEmbedId, { events, onEvent });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="font-medium text-2xl">{text}</div>
      </div>
    </>
  );
}