import { useEffect, useRef } from "react";
import type { Message } from "../types";

interface Props {
  messages: Message[];
}

export const MessageList: React.FC<Props> = ({ messages }) => {
  const user = localStorage.getItem("user");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message) => {
          const isOwn = message.author === user;

          return (
            <div
              key={message.id}
              className={`message-wrapper ${isOwn ? "message-wrapper--own" : ""}`}
            >
              {!isOwn && (
                <span className="message-author">{message.author}</span>
              )}

              <div
                className={`message-bubble ${isOwn ? "message-bubble--own" : ""}`}
              >
                <p className="message-text">{message.text}</p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
