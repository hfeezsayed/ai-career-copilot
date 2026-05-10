"use client";

import { useEffect, useState } from "react";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { getChats, deleteChat, renameChat } from "@/lib/api";

type Chat = {
  id: string;
  title: string;
};

export default function ChatSidebar() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState("");

  const [openMenu, setOpenMenu] = useState("");

  // Load Chats
  async function loadChats() {
    try {
      const data = await getChats();

      setChats(data);
    } catch (error) {
      console.error(error);
    }
  }

  // Initial Load
  useEffect(() => {
    loadChats();

    const refreshChats = () => {
      loadChats();
    };

    window.addEventListener("chat-created", refreshChats);

    return () => {
      window.removeEventListener("chat-created", refreshChats);
    };
  }, []);

  // Open Chat
  function openChat(chatId: string) {
    setActiveChat(chatId);

    window.dispatchEvent(
      new CustomEvent("open-chat", {
        detail: { chatId },
      }),
    );
  }

  // New Chat
  function newChat() {
    setActiveChat("");

    window.dispatchEvent(new Event("new-chat"));
  }

  // Delete Chat
  async function handleDelete(chatId: string) {
    try {
      await deleteChat(chatId);

      setChats((prev) => prev.filter((chat) => chat.id !== chatId));

      if (activeChat === chatId) {
        setActiveChat("");

        window.dispatchEvent(new Event("new-chat"));
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Rename Chat
  async function handleRename(chatId: string, oldTitle: string) {
    const newTitle = prompt("Rename chat", oldTitle);

    if (!newTitle) return;

    try {
      // Save in MongoDB
      await renameChat(chatId, newTitle);

      // Update frontend
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                title: newTitle,
              }
            : chat,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="
        min-w-[360px]
        max-w-[360px]
        h-full
        border-r
        border-zinc-800
        bg-black
        p-5
        overflow-y-auto
      "
    >
      {/* New Chat */}
      <button
        onClick={newChat}
        className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-600
          py-3
          text-base
          font-medium
          text-white
          transition
          hover:opacity-90
          cursor-pointer
        "
      >
        + New Chat
      </button>

      {/* Chat History */}
      <div className="mt-6 space-y-3">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => openChat(chat.id)}
            className={`
              group
              relative
              flex
              items-center
              justify-between
              rounded-2xl
              px-5
              py-4
              transition-all
              duration-200
              cursor-pointer
              overflow-visible
              ${
                activeChat === chat.id
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                  : "bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
              }
            `}
          >
            {/* Title */}
            <span
              className="
                truncate
                text-sm
                font-medium
              "
            >
              {chat.title}
            </span>

            {/* Menu */}
            <div className="relative">
              {/* 3 Dots */}
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  setOpenMenu(openMenu === chat.id ? "" : chat.id);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  p-1
                  opacity-0
                  transition
                  group-hover:opacity-100
                  hover:bg-black/20
                  cursor-pointer
                "
              >
                <MoreHorizontal size={18} />
              </button>

              {/* Dropdown */}
              {openMenu === chat.id && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-[999]
                    w-44
                    overflow-hidden
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    shadow-2xl
                  "
                >
                  {/* Rename */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      handleRename(chat.id, chat.title);

                      setOpenMenu("");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      px-4
                      py-3
                      text-sm
                      hover:bg-zinc-800
                      cursor-pointer
                    "
                  >
                    <Pencil size={16} />
                    Rename
                  </button>

                  {/* Delete */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      handleDelete(chat.id);

                      setOpenMenu("");
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      px-4
                      py-3
                      text-sm
                      text-red-400
                      hover:bg-zinc-800
                      cursor-pointer
                    "
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
