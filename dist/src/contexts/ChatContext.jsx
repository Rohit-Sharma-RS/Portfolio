import React, { createContext, useContext, useState } from "react";
var ChatContext = createContext({
    isVisible: true,
    toggleChatbot: function () { },
});
export var useChatbot = function () { return useContext(ChatContext); };
export function ChatProvider(_a) {
    var children = _a.children;
    var _b = useState(true), isVisible = _b[0], setIsVisible = _b[1];
    var toggleChatbot = function () {
        setIsVisible(!isVisible);
    };
    return (<ChatContext.Provider value={{ isVisible: isVisible, toggleChatbot: toggleChatbot }}>
      {children}
    </ChatContext.Provider>);
}
