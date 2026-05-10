"use client";

import { useEffect, useRef, useState } from "react";

import ChatInput from "@/components/chat/chat-input";
import ChatMessage from "@/components/chat/chat-message";
import ChatSidebar from "@/components/chat/chat-sidebar";

import { sendMessage, getSingleChat } from "@/lib/api";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Send Message
  async function handleSendMessage(message: string) {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage({
        message,
        chat_id: chatId,
      });

      // Save chat id
      if (!chatId && response.chat_id) {
        setChatId(response.chat_id);

        window.dispatchEvent(new Event("chat-created"));
      }

      // AI response
      const aiMessage: Message = {
        role: "assistant",
        content: response.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Load Existing Chat
  async function loadChat(id: string) {
    try {
      const data = await getSingleChat(id);

      setChatId(id);

      const formattedMessages = data.messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      }));

      setMessages(formattedMessages);
    } catch (error) {
      console.error(error);
    }
  }

  // New Chat Event
  useEffect(() => {
    const handler = () => {
      setMessages([]);
      setChatId("");
    };

    window.addEventListener("new-chat", handler);

    return () => {
      window.removeEventListener("new-chat", handler);
    };
  }, []);

  // Open Chat Event
  useEffect(() => {
    const handler = (event: any) => {
      loadChat(event.detail.chatId);
    };

    window.addEventListener("open-chat", handler);

    return () => {
      window.removeEventListener("open-chat", handler);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      {/* Chat Sidebar */}
      <ChatSidebar />

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-white/10 px-8 py-5">
          <h1 className="text-2xl font-semibold">AI Career Copilot</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col gap-6">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {loading && (
              <div className="text-sm text-zinc-400">AI is typing...</div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-white/10 bg-black px-8 py-4 shrink-0">
          <div className="mx-auto w-full max-w-4xl">
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
