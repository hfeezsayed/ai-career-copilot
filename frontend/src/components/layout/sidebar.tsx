"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/lib/sidebar-links";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

export default function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[220px]
          bg-black
          border-r border-white/10
          px-5 py-6
          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0 lg:static
        `}
      >
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold leading-tight text-white">
            AI Career Copilot
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.title}
                href={link.href}
                onClick={closeSidebar}
                className={`
                  flex items-center gap-3
                  rounded-2xl px-4 py-3
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }
                `}
              >
                <Icon size={18} />

                <span className="text-sm font-medium">{link.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
