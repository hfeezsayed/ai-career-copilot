"use client";
import { BriefcaseBusiness } from "lucide-react";

export default function JobMatcherHeader() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-bold text-white">Job Matcher</h1>

        <BriefcaseBusiness className="h-8 w-8 text-violet-400" />
      </div>

      <p className="max-w-3xl text-lg text-zinc-400">
        Compare your resume against job descriptions with AI-powered ATS
        matching, keyword analysis, and skill gap detection.
      </p>
    </div>
  );
}
