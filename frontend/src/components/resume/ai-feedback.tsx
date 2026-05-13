import { Sparkles } from "lucide-react";

type Props = {
  suggestions: string[];
};

export default function AIFeedback({ suggestions }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-fuchsia-400 w-7 h-7" />

        <h2 className="text-3xl font-bold">AI Suggestions</h2>
      </div>

      <div className="space-y-4">
        {suggestions?.map((tip, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border border-white/5
              bg-black/40
              px-5 py-5
              flex items-start gap-4
            "
          >
            <div className="w-7 h-7 rounded-full bg-fuchsia-500/10 flex items-center justify-center mt-1">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
            </div>

            <p className="text-zinc-300 leading-8 text-sm md:text-base">
              {tip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
