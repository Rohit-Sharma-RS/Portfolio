import { useChatbot } from "../contexts/ChatContext";
import { useChat } from "ai/react";
export default function Chat() {
    var _a = useChat(), messages = _a.messages, input = _a.input, handleInputChange = _a.handleInputChange, handleSubmit = _a.handleSubmit, setMessages = _a.setMessages, isLoading = _a.isLoading, error = _a.error;
    var isVisible = useChatbot().isVisible;
    /*
    return (
      isVisible && (
        <Accordion type="single" collapsible className="relative z-40 flexs">
          <AccordionItem
            value="item-1"
            className="fixed bottom-8 right-8 w-80 rounded-md border bg-background"
          >
            <AccordionTrigger className="border-b px-6">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent className="flex max-h-96 min-h-80 flex-col justify-between p-0">
              <ChatMessages
                messages={messages}
                error={error}
                isLoading={isLoading}
              />
              <ChatInput
                input={input}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                setMessages={setMessages}
                isLoading={isLoading}
                messages={messages}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    );
    */
    return null;
}
