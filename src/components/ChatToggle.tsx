"use client";

import { useChatbot } from "../contexts/ChatContext";
import { BotOff } from "lucide-react";
import { Button } from "./ui/Button";

export default function ChatToggle() {
  const { isVisible } = useChatbot();

  return (
    <Button size="icon" variant="ghost" onClick={() => {}} title="under maintenance">
      <BotOff className="size-5" />
      <span className="sr-only">Chat Toggle</span>
    </Button>
  );
}
