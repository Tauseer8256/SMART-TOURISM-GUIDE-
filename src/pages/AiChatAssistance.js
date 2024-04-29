import React from "react"; // [1]
import { AiChat } from "@nlux/react"; // [2]
import { useChatAdapter } from "@nlux/langchain-react"; // [3]

const AiChatAssistance = () => {
  const gptAdapter = useChatAdapter({
    url: "https://<Your LangServe Runnable URL>",
  });
  return (
    <section id="ai-chat">
      <div className="container">
        <div className="row">
          <div className="col-md-12 chat-box">
            <AiChat
              adapter={gptAdapter}
              promptBoxOptions={{
                placeholder: "How can I help you today?",
              }}
              conversationOptions={{
                historyPayloadSize: "max",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChatAssistance;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] nlux. (2024). AiChat. [Software library]. GitHub. Available: https://github.com/nlux-ai/react. Accessed on: April 29, 2024.
// [3] nlux. (2024). useChatAdapter. [Software library]. GitHub. Available: https://github.com/nlux-ai/langchain-react. Accessed on: April 29, 2024.