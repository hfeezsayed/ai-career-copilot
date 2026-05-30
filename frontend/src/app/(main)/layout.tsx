"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Chat",
      href: "/chat",
    },
    {
      name: "Resume Analyzer",
      href: "/resume",
    },
    {
      name: "Job Matcher",
      href: "/job-matcher",
    },
    {
      name: "Roadmap",
      href: "/roadmap",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white overflow-x-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="
          fixed
          top-5
          left-5
          z-50
          rounded-xl
          border
          border-white/10
          bg-zinc-900
          p-2
          text-white
          md:hidden
        "
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-sm
            md:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-[260px]
          border-r
          border-white/10
          bg-black
          px-5
          py-6
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:static
          md:block
        `}
      >
        {/* Mobile Close Button */}
        <div className="mb-6 flex justify-end md:hidden">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold leading-tight text-white">
            AI Career
            <br />
            Copilot
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`
                rounded-2xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
