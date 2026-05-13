import { CheckCircle, XCircle } from "lucide-react";

type Props = {
  detectedSkills: string[];
  missingSkills: string[];
};

export default function SkillsCard({ detectedSkills, missingSkills }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Detected Skills */}
      <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-7">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="text-emerald-400 w-6 h-6" />

          <h3 className="text-2xl font-semibold">Detected Skills</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {detectedSkills?.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2 rounded-full
                bg-emerald-500/10
                border border-emerald-500/20
                text-emerald-300 text-sm
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Missing Skills */}
      <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-7">
        <div className="flex items-center gap-3 mb-8">
          <XCircle className="text-red-400 w-6 h-6" />

          <h3 className="text-2xl font-semibold">Missing Skills</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {missingSkills?.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2 rounded-full
                bg-red-500/10
                border border-red-500/20
                text-red-300 text-sm
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
