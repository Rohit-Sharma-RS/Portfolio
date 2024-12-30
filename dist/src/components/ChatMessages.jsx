import { Bot, Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
export default function ChatMessages(_a) {
    var _b;
    var messages = _a.messages, error = _a.error, isLoading = _a.isLoading;
    var isLastMessageUser = ((_b = messages[messages.length - 1]) === null || _b === void 0 ? void 0 : _b.role) === "user";
    // Scroll to new messages automatically
    var scrollRef = useRef(null);
    useEffect(function () {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);
    return (<div className="h-full overflow-y-auto p-3" ref={scrollRef}>
      <ul>
        {messages.map(function (msg) { return (<li key={msg.id}>
            <ChatMessage message={msg}/>
          </li>); })}
      </ul>

      {/* empty */}
      {!error && messages.length === 0 && (<div className="flex h-full flex-col items-center justify-center mt-16 gap-2">
          <Bot />
          <p className="font-medium">Send a message to start the chat!</p>
          <p className="text-center text-xs text-muted-foreground">
            You can ask the bot anything about me and it will help finding relevant information!
          </p>
        </div>)}

      {/* loading */}
      {isLoading && isLastMessageUser && (<div className="flex items-center justify-center">
          <Loader2 className="mr-1.5 size-3 animate-spin text-muted-foreground"/>
          <p className="text-center text-xs text-muted-foreground">
            Thinking...
          </p>
        </div>)}

      {/* error */}
      {error && (<p className="text-center text-xs text-rose-500">
          Something went wrong. Please try again!
        </p>)}
    </div>);
}
