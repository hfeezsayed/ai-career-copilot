import { FileText, Briefcase, TrendingUp } from "lucide-react";

type ATSScoreCardProps = {
  title: string;
  score: number | string;
  description: string;
  type: "ats" | "job" | "strength";
};

export default function ATSScoreCard({
  title,
  score,
  description,
  type,
}: ATSScoreCardProps) {
  const config = {
    ats: {
      icon: FileText,
      iconBg: "bg-violet-500/20",
      iconColor: "text-violet-400",
    },

    job: {
      icon: Briefcase,
      iconBg: "bg-fuchsia-500/20",
      iconColor: "text-fuchsia-400",
    },

    strength: {
      icon: TrendingUp,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
  };

  const current = config[type];

  const Icon = current.icon;

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-7">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${current.iconBg}`}
      >
        <Icon className={`w-7 h-7 ${current.iconColor}`} />
      </div>

      <p className="text-zinc-300 text-lg">{title}</p>

      <h2 className="text-2xl font-bold mt-4">
        {typeof score === "number" ? `${score}%` : score}
      </h2>

      <p className="text-zinc-500 mt-5 leading-7 text-sm">{description}</p>
    </div>
  );
}
