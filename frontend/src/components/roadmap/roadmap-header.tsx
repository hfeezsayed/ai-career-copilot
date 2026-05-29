import { Map } from "lucide-react";

export default function RoadmapHeader() {
  return (
    <div className="space-y-4">
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-white
            sm:text-5xl
          "
        >
          Career Roadmap
        </h1>

        <div
          className="
            rounded-2xl
            bg-violet-500/10
            p-3
            text-violet-400
          "
        >
          <Map className="h-8 w-8" />
        </div>
      </div>

      <p
        className="
          max-w-3xl
          text-base
          leading-8
          text-zinc-400
          sm:text-lg
        "
      >
        Generate personalized AI-powered learning roadmaps for your target
        career path, skills, projects, and growth journey.
      </p>
    </div>
  );
}
