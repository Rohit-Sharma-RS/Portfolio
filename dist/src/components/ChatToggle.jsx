"use client";
import { useChatbot } from "../contexts/ChatContext";
import { BotOff } from "lucide-react";
import { Button } from "./ui/Button";
export default function ChatToggle() {
    var isVisible = useChatbot().isVisible;
    return (<Button size="icon" variant="ghost" onClick={function () { }} title="under maintenance">
      <BotOff className="size-5"/>
      <span className="sr-only">Chat Toggle</span>
    </Button>);
}
