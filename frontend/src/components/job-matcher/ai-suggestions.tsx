type AISuggestionsProps = {
  missingSkills: string[];

  atsScore: number;
};

export default function AISuggestions({
  missingSkills,
  atsScore,
}: AISuggestionsProps) {
  const suggestions = [];

  if (atsScore < 70) {
    suggestions.push(
      "Your resume needs better alignment with the job description.",
    );
  }

  if (missingSkills.length > 0) {
    suggestions.push(
      `Add missing skills like ${missingSkills
        .slice(0, 5)
        .join(", ")} to improve ATS matching.`,
    );
  }

  suggestions.push("Include measurable achievements and project impact.");

  suggestions.push("Optimize resume keywords for ATS systems.");

  suggestions.push("Add more technical depth in your experience section.");

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
      <div className="mb-6">
        <h2
          className="
            text-xl
            font-semibold
            text-white
          "
        >
          AI Suggestions
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-zinc-400
          "
        >
          AI-powered recommendations to improve your ATS compatibility.
        </p>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-violet-500/10
                bg-violet-500/5
                p-4
              "
          >
            <div
              className="
                  mt-1
                  h-2
                  w-2
                  rounded-full
                  bg-violet-400
                "
            />

            <p
              className="
                  text-sm
                  leading-7
                  text-zinc-300
                "
            >
              {suggestion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
