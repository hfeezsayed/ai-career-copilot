type SkillsSectionProps = {
  title: string;
  skills: string[];
  type: "match" | "missing";
};

export default function SkillsSection({
  title,
  skills,
  type,
}: SkillsSectionProps) {
  return (
    <div
      className="
        min-h-[420px]
        max-h-[420px]
        overflow-y-auto
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-4
        shadow-[0_0_40px_rgba(168,85,247,0.08)]
        backdrop-blur-xl
        sm:p-6
        xl:p-8
      "
    >
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white sm:text-xl">{title}</h2>

        <div
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            ${
              type === "match"
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-rose-500/15 text-rose-400"
            }
          `}
        >
          {skills.length}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div
              key={skill}
              className={`
                break-words
                rounded-full
                border
                px-3
                py-2
                text-xs
                font-medium
                transition-all
                duration-200
                hover:scale-105
                sm:px-4
                sm:text-sm
                ${
                  type === "match"
                    ? `
                      border-emerald-500/20
                      bg-emerald-500/10
                      text-emerald-400
                    `
                    : `
                      border-rose-500/20
                      bg-rose-500/10
                      text-rose-400
                    `
                }
              `}
            >
              {skill}
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-400">No skills found</p>
        )}
      </div>
    </div>
  );
}
