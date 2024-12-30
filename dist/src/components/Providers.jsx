"use client";
import { ChatProvider } from "../contexts/ChatContext";
import { ThemeProvider, useTheme } from "next-themes";
import React from "react";
import { Toaster } from "sonner";
import Chat from "./Chat";
export default function Providers(_a) {
    var children = _a.children;
    return (<ThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange>
      <ChatProvider>
        {children}
        <Chat />
      </ChatProvider>
      <ToastProvider />
    </ThemeProvider>);
}
function ToastProvider() {
    var resolvedTheme = useTheme().resolvedTheme;
    return (<Toaster className="mt-12" position="top-right" theme={resolvedTheme === "dark" ? "dark" : "light"}/>);
}
