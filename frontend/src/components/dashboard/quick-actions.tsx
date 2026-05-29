"use client";

import Link from "next/link";

import { FileText, BriefcaseBusiness, Map, MessageSquare } from "lucide-react";

const actions = [
  {
    title: "Resume Analyzer",
    description:
      "Analyze your resume with AI-powered ATS scoring and insights.",
    href: "/resume",
    icon: FileText,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    title: "Job Matcher",
    description: "Match your resume against job descriptions instantly.",
    href: "/job-matcher",
    icon: BriefcaseBusiness,
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Career Roadmap",
    description: "Generate personalized AI career learning roadmaps.",
    href: "/roadmap",
    icon: Map,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "AI Career Chat",
    description: "Ask career questions and get AI-powered guidance.",
    href: "/chat",
    icon: MessageSquare,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
];

export default function QuickActions() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Quick Actions</h2>

        <p className="mt-2 text-lg text-zinc-400">
          Access AI-powered career tools instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-[#0B0B0F]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]
              "
            >
              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${action.iconBg}
                `}
              >
                <Icon className={`${action.iconColor}`} size={30} />
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                {action.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
