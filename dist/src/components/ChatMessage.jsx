var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { cn } from "../lib/utils";
import { Bot } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
export default function ChatMessage(_a) {
    var _b = _a.message, role = _b.role, content = _b.content;
    var isBot = role === "assistant";
    return (<div className={cn("mb-3 flex items-center", isBot ? "justify-start" : "justify-end")}>
      {isBot && <Bot className="mr-2"/>}
      <div className={cn("rounded border px-3 py-2 max-w-64", isBot ? "bg-background" : "bg-foreground text-background")}>
        <Markdown components={{
            a: function (_a) {
                var node = _a.node, href = _a.href, props = __rest(_a, ["node", "href"]);
                return (<Link href={href !== null && href !== void 0 ? href : ""} className="underline underline-offset-2" {...props}/>);
            },
            p: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (<p className="mt-3 first:mt-0" {...props}/>);
            },
            ul: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (<ul className="mt-3 list-inside list-disc first:mt-0" {...props}/>);
            },
        }}>
          {content}
        </Markdown>
      </div>
    </div>);
}
