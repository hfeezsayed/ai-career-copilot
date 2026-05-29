import { Loader2 } from "lucide-react";

export default function AnalyzingOverlay() {
  const steps = [
    "Scanning Resume...",
    "Extracting Skills...",
    "Matching Keywords...",
    "Calculating ATS Score...",
    "Generating Insights...",
  ];

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-md
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-[#0B0B0F]
          p-8
          shadow-[0_0_80px_rgba(168,85,247,0.2)]
        "
      >
        <div className="flex flex-col items-center">
          <div
            className="
              mb-6
              rounded-full
              bg-violet-500/10
              p-5
            "
          >
            <Loader2
              className="
                h-10
                w-10
                animate-spin
                text-violet-400
              "
            />
          </div>

          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            AI ATS Analysis
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-zinc-400
            "
          >
            Processing your resume...
          </p>

          <div className="mt-8 w-full space-y-4">
            {steps.map((step) => (
              <div
                key={step}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/5
                  p-3
                "
              >
                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-violet-400
                    animate-pulse
                  "
                />

                <span
                  className="
                    text-sm
                    text-zinc-300
                  "
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
