import { CheckCircle2, XCircle } from "lucide-react";

type Props = {
  detectedSkills: string[];
  missingSkills: string[];
};

export default function KeywordTable({ detectedSkills, missingSkills }: Props) {
  const rows = [
    ...detectedSkills.map((skill) => ({
      keyword: skill,
      status: "Matched",
    })),

    ...missingSkills.map((skill) => ({
      keyword: skill,
      status: "Missing",
    })),
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 h-full">
      <h2 className="text-3xl font-bold mb-3">ATS Keyword Match</h2>

      <p className="text-zinc-400 mb-8 leading-7">
        Important keywords detected and missing from your resume based on AI
        Engineer job descriptions.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="pb-4 text-zinc-400 font-medium">Keyword</th>

              <th className="pb-4 text-zinc-400 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-white/5">
                <td className="py-5 font-medium">{row.keyword}</td>

                <td className="py-5">
                  {row.status === "Matched" ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Matched
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                      <XCircle className="w-4 h-4" />
                      Missing
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
