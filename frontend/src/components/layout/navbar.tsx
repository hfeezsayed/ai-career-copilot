"use client";

import { Menu } from "lucide-react";

type NavbarProps = {
  openSidebar: () => void;
};

export default function Navbar({
  openSidebar,
}: NavbarProps) {
  return (
    <header className="h-[60px] border-b border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          onClick={openSidebar}
          className="lg:hidden text-zinc-300"
        >
          <Menu size={22} />
        </button>

        <h2 className="text-white text-sm md:text-base font-semibold">
          AI Career Copilot
        </h2>
      </div>

      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
    </header>
  );
}