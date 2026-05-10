"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading = false }: Props) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    if (!input.trim()) return;

    onSend(input);

    setInput("");
  }

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder="Ask AI about your career..."
        className="
          flex-1
          bg-zinc-900
          border
          border-zinc-700
          rounded-xl
          px-4
          py-3
          text-white
          outline-none
        "
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-600
          text-white
          font-medium
          disabled:opacity-50
        "
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
