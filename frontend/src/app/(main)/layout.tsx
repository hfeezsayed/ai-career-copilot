"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect } from "react";

import { Menu, X, ChevronDown, LogOut } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user, setUser] = useState<any>(null);

  const [profileOpen, setProfileOpen] = useState(false);

  // Auth Protection
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  // Logout
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  }

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
    <div className="flex min-h-screen overflow-x-hidden bg-black text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="
          fixed
          left-5
          top-5
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
          flex
          h-screen
          w-[260px]
          flex-col
          border-r
          border-white/10
          bg-black
          px-5
          py-6
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:static
          md:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <div className="mb-6 flex justify-end md:hidden">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative mb-8">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-zinc-900
              p-3
              transition-all
              hover:bg-zinc-800
            "
          >
            {/* Avatar */}
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-600
                text-lg
                font-bold
                text-white
              "
            >
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            {/* User Info */}
            <div className="flex-1 text-left">
              <p className="font-semibold text-white">{user?.name || "User"}</p>

              <p className="truncate text-xs text-zinc-400">
                {user?.email || ""}
              </p>
            </div>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {profileOpen && (
            <div
              className="
                absolute
                left-0
                top-full
                z-50
                mt-2
                w-full
                rounded-2xl
                border
                border-white/10
                bg-zinc-950
                p-2
              "
            >
              <button
                onClick={handleLogout}
                className="
                  flex
                  w-full
                  items-center
                  gap-2
                  rounded-xl
                  px-3
                  py-3
                  text-red-400
                  transition-all
                  hover:bg-red-500/10
                "
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="mb-8">
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
