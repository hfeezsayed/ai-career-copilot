type Props = {
  analysis: any;
};

export default function ResumePreview({ analysis }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Resume Overview</h2>

        <p className="text-zinc-400 mt-2">
          AI-structured candidate profile analysis.
        </p>
      </div>

      <div className="space-y-8">
        {/* Candidate */}
        <div className="rounded-2xl border border-white/5 bg-black/40 p-6">
          <h3 className="text-xl font-semibold mb-5">👤 Candidate</h3>

          <div className="space-y-3">
            <p className="text-2xl font-bold">{analysis.candidate.name}</p>

            <p className="text-zinc-400">{analysis.candidate.role}</p>

            <p className="text-zinc-500 text-sm">{analysis.candidate.email}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="rounded-2xl border border-white/5 bg-black/40 p-6">
          <h3 className="text-xl font-semibold mb-5">🛠 Skills</h3>

          <div className="flex flex-wrap gap-3">
            {analysis.detected_skills.map((skill: string) => (
              <span
                key={skill}
                className="
                    px-4 py-2
                    rounded-full
                    bg-fuchsia-500/10
                    border border-fuchsia-500/20
                    text-fuchsia-300
                    text-sm
                  "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-2xl border border-white/5 bg-black/40 p-6">
          <h3 className="text-xl font-semibold mb-5">💼 Experience</h3>

          <div className="space-y-4">
            {analysis.experience.map((exp: string, index: number) => (
              <div
                key={index}
                className="border-l-2 border-fuchsia-500/30 pl-4"
              >
                <p className="text-zinc-200">{exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-white/5 bg-black/40 p-6">
          <h3 className="text-xl font-semibold mb-5">🎓 Education</h3>

          <div className="space-y-3">
            {analysis.education.map((edu: string, index: number) => (
              <p key={index} className="text-zinc-300">
                {edu}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
