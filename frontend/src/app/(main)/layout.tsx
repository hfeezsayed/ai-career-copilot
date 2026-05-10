"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
      href: "/jobs",
    },
    {
      name: "Roadmap",
      href: "/roadmap",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-[240px] border-r border-white/10 bg-black px-5 py-6">
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
              className={`
                rounded-2xl px-4 py-3
                text-sm font-medium
                transition-all duration-200
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
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
