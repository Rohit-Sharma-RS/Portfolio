import { SendHorizontal, Trash } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
export default function ChatInput(_a) {
    var input = _a.input, handleSubmit = _a.handleSubmit, handleInputChange = _a.handleInputChange, setMessages = _a.setMessages, isLoading = _a.isLoading, messages = _a.messages;
    console.log(messages);
    return (<form onSubmit={handleSubmit} className="flex gap-1 border-t px-2 py-3">
      <Button title="Clear chat" variant="outline" onClick={function () { return setMessages([]); }} className="px-3 py-2" disabled={messages.length === 0} type="button">
        <Trash className="size-4 text-rose-500"/>
      </Button>
      <Input autoFocus placeholder="Ask something from Ro..." 
    // className="bg-muted"
    value={input} onChange={handleInputChange} onKeyDown={function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit(e);
            }
        }}/>
      <Button title="Send message" variant="default" className="px-3 py-2" disabled={input.length === 0} type="submit">
        <SendHorizontal className="size-4"/>
      </Button>
    </form>);
}
