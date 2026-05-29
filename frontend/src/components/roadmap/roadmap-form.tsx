"use client";

import { Sparkles } from "lucide-react";

type RoadmapFormProps = {
  targetRole: string;
  setTargetRole: (value: string) => void;

  currentSkills: string;
  setCurrentSkills: (value: string) => void;

  experienceLevel: string;
  setExperienceLevel: (value: string) => void;

  onGenerate: () => void;

  loading: boolean;
};

export default function RoadmapForm({
  targetRole,
  setTargetRole,
  currentSkills,
  setCurrentSkills,
  experienceLevel,
  setExperienceLevel,
  onGenerate,
  loading,
}: RoadmapFormProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        shadow-[0_0_40px_rgba(168,85,247,0.08)]
        backdrop-blur-xl
        sm:p-8
      "
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Generate Your Career Roadmap
        </h2>

        <p className="mt-2 text-zinc-400">
          Enter your target role and current skills to get an AI-powered
          roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Target Role */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Target Role
          </label>

          <input
            type="text"
            placeholder="e.g. AI Engineer, Full Stack Developer"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/40
              px-4
              py-4
              text-white
              outline-none
              transition
              focus:border-violet-500
            "
          />
        </div>

        {/* Skills */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Current Skills
          </label>

          <textarea
            rows={5}
            placeholder="e.g. React, Node.js, Python, MongoDB"
            value={currentSkills}
            onChange={(e) => setCurrentSkills(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/40
              px-4
              py-4
              text-white
              outline-none
              transition
              focus:border-violet-500
            "
          />
        </div>

        {/* Experience */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Experience Level
          </label>

          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/40
              px-4
              py-4
              text-white
              outline-none
              transition
              focus:border-violet-500
            "
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Button */}
        <button
          onClick={onGenerate}
          disabled={loading}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            px-6
            py-4
            text-lg
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.01]
            hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <Sparkles className="h-5 w-5" />

          {loading ? "Generating..." : "Generate Roadmap"}
        </button>
      </div>
    </div>
  );
}
