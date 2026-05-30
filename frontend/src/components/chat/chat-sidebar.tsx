"use client";

import { useEffect, useState } from "react";

import { MoreHorizontal, Pencil, Trash2, Menu, X, Home } from "lucide-react";

import { getChats, deleteChat, renameChat } from "@/lib/api";

import Link from "next/link";

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

    // Close mobile sidebar
    setOpenMenu("");

    window.dispatchEvent(
      new CustomEvent("open-chat", {
        detail: { chatId },
      }),
    );
  }

  // New Chat
  function newChat() {
    setActiveChat("");

    // Close mobile sidebar
    setOpenMenu("");

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
      await renameChat(chatId, newTitle);

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
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 flex gap-2 md:hidden">
        {/* Sidebar Toggle */}
        <button
          onClick={() => setOpenMenu(openMenu === "sidebar" ? "" : "sidebar")}
          className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-zinc-700
      bg-zinc-900
      text-white
    "
        >
          {openMenu === "sidebar" ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Dashboard Button */}
        <Link
          href="/dashboard"
          className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-zinc-700
      bg-zinc-900
      text-white
    "
        >
          <Home size={18} />
        </Link>
      </div>

      {/* Mobile Overlay */}
      {openMenu === "sidebar" && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            md:hidden
          "
          onClick={() => setOpenMenu("")}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed
          left-0
          top-0
          z-50
          h-full
          w-[280px]
          overflow-y-auto
          border-r
          border-zinc-800
          bg-black
          p-5
          transition-transform
          duration-300

          ${openMenu === "sidebar" ? "translate-x-0" : "-translate-x-full"}

          md:relative
          md:h-full
          md:w-[360px]
          md:translate-x-0
        `}
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
    </>
  );
}
