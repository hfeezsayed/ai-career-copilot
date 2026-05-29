type ATSInsightsProps = {
  atsScore: number;

  missingSkills: string[];

  matchingSkills: string[];
};

export default function ATSInsights({
  atsScore,
  missingSkills,
  matchingSkills,
}: ATSInsightsProps) {
  const insights = [];

  if (atsScore >= 80) {
    insights.push("Your resume is strongly aligned with this job description.");
  } else if (atsScore >= 60) {
    insights.push(
      "Your resume has moderate alignment with the job requirements.",
    );
  } else {
    insights.push("Your resume needs optimization for this role.");
  }

  if (matchingSkills.length >= 5) {
    insights.push("Strong technical skill overlap detected.");
  }

  if (missingSkills.length > 0) {
    insights.push(
      `Consider adding skills like ${missingSkills
        .slice(0, 3)
        .join(", ")} to improve ATS compatibility.`,
    );
  }

  return (
    <div
      className="
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
      <h2 className="mb-5 text-xl font-semibold text-white">ATS Insights</h2>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border
              border-violet-500/20
              bg-violet-500/5
              p-4
            "
          >
            <p className="text-sm leading-7 text-zinc-300 sm:text-base">
              {insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
