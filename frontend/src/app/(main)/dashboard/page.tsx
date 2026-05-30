"use client";

import { useEffect, useState } from "react";

import { FileText, BriefcaseBusiness, Target } from "lucide-react";

import QuickActions from "@/components/dashboard/quick-actions";

import RecentActivity from "@/components/dashboard/recent-activity";

import {
  getResumeScore,
  getJobMatchScore,
  getCareerGoal,
  getRecentActivities,
} from "@/lib/dashboard-storage";

export default function DashboardPage() {
  const [resumeScore, setResumeScore] = useState(0);

  const [jobMatchScore, setJobMatchScore] = useState(0);

  const [careerGoal, setCareerGoal] = useState("Not Set");

  const [activities, setActivities] = useState<string[]>([]);

  const profileCompletion =
    (resumeScore > 0 ? 33 : 0) +
    (jobMatchScore > 0 ? 33 : 0) +
    (careerGoal !== "Not Set" ? 34 : 0);

  useEffect(() => {
    setResumeScore(getResumeScore());

    setJobMatchScore(getJobMatchScore());

    setCareerGoal(getCareerGoal());

    setActivities(getRecentActivities());
  }, []);

  return (
    <div className="space-y-10 px-6 py-20 md:px-10 md:py-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Welcome Back,
        </h1>

        <p className="mt-3 text-base md:text-lg text-zinc-400 max-w-2xl">
          Your AI Career Copilot dashboard.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Resume Score */}
        <div
          className="
        rounded-3xl border border-white/10 bg-[#0B0B0F] p-7 transition-all duration-300 hover:-translate-y-1
        hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
        >
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20">
            <FileText className="text-violet-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Resume Score</p>

          <h2 className="mt-3 text-2xl font-bold text-white">{resumeScore}%</h2>

          <p className="mt-4 text-zinc-500">Latest ATS analysis score</p>
        </div>

        {/* Job Match */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20">
            <BriefcaseBusiness className="text-pink-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Job Match</p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {jobMatchScore}%
          </h2>

          <p className="mt-4 text-zinc-500">Latest job match result</p>
        </div>

        {/* Career Goal */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
            <Target className="text-blue-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Active Goal</p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
            {careerGoal}
          </h2>

          <p className="mt-4 text-zinc-500">Current roadmap target</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
            <Target className="text-emerald-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Profile Completion</p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {profileCompletion}%
          </h2>

          <p className="mt-4 text-zinc-500">Career profile readiness</p>
        </div>
      </div>

      <QuickActions />

      <RecentActivity activities={activities} />
    </div>
  );
}
