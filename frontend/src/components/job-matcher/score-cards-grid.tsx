import { BriefcaseBusiness, TrendingUp } from "lucide-react";

import CircularProgress from "./circular-progress";

type ScoreCardsGridProps = {
  atsScore: number;

  matchingSkills: number;

  totalSkills: number;
};

export default function ScoreCardsGrid({
  atsScore,
  matchingSkills,
  totalSkills,
}: ScoreCardsGridProps) {
  const skillMatchPercentage =
    totalSkills > 0 ? Math.round((matchingSkills / totalSkills) * 100) : 0;

  const hiringProbability =
    atsScore >= 80 ? "High" : atsScore >= 60 ? "Medium" : "Low";

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4
        lg:grid-cols-3
      "
    >
      {/* ATS Circular Progress */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          shadow-[0_0_40px_rgba(168,85,247,0.08)]
          backdrop-blur-xl
          lg:col-span-1
        "
      >
        <CircularProgress value={atsScore} label="ATS Match Score" />
      </div>

      {/* Other Cards */}
      <div
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:col-span-2
        "
      >
        {/* Skills Match */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            shadow-[0_0_40px_rgba(168,85,247,0.08)]
            backdrop-blur-xl
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">Skills Match</p>

            <div
              className="
                rounded-xl
                bg-violet-500/10
                p-3
                text-violet-400
              "
            >
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-white
            "
          >
            {skillMatchPercentage}%
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-zinc-500
            "
          >
            Resume skill compatibility
          </p>
        </div>

        {/* Hiring Probability */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            shadow-[0_0_40px_rgba(168,85,247,0.08)]
            backdrop-blur-xl
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">Hiring Probability</p>

            <div
              className="
                rounded-xl
                bg-violet-500/10
                p-3
                text-violet-400
              "
            >
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
          </div>

          <h2
            className={`
              mt-6
              text-4xl
              font-bold
              ${
                hiringProbability === "High"
                  ? "text-emerald-400"
                  : hiringProbability === "Medium"
                    ? "text-yellow-400"
                    : "text-rose-400"
              }
            `}
          >
            {hiringProbability}
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-zinc-500
            "
          >
            Estimated ATS selection chance
          </p>
        </div>
      </div>
    </div>
  );
}
