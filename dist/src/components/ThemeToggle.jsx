"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
export default function ThemeToggle() {
    var _a = useTheme(), setTheme = _a.setTheme, resolvedTheme = _a.resolvedTheme;
    var _b = useState(false), mounted = _b[0], setMounted = _b[1];
    useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (<Button size="icon" variant="ghost" onClick={function () {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}>
      {resolvedTheme === "dark" ? (<SunIcon className="size-4 text-orange-300"/>) : (<MoonIcon className="size-4 text-indigo-500"/>)}
      <span className="sr-only">Theme Toggle</span>
    </Button>);
}
