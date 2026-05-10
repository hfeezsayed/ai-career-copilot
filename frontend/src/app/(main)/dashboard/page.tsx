import { FileText, BriefcaseBusiness, Target } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-10 px-10 py-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-lg text-zinc-400">
          Your AI Career Copilot dashboard.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20">
            <FileText className="text-violet-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Resume Score</p>

          <h2 className="mt-3 text-2xl font-bold text-white">82%</h2>

          <p className="mt-4 text-zinc-500">Strong profile for AI roles</p>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20">
            <BriefcaseBusiness className="text-pink-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Job Match</p>

          <h2 className="mt-3 text-2xl font-bold text-white">76%</h2>

          <p className="mt-4 text-zinc-500">Matches current target jobs</p>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
            <Target className="text-blue-400" size={28} />
          </div>

          <p className="text-base text-zinc-300">Active Goal</p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
            Frontend AI Engineer
          </h2>

          <p className="mt-4 text-zinc-500">Roadmap in progress</p>
        </div>
      </div>
    </div>
  );
}
