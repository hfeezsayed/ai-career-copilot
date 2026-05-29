import { ExternalLink } from "lucide-react";

type RoadmapResultProps = {
  roadmap: {
    title: string;
    description: string;
    duration: string;
    skills: string[];

    resources: {
      title: string;
      link: string;
    }[];
  }[];
};

export default function RoadmapResult({ roadmap }: RoadmapResultProps) {
  return (
    <div className="relative space-y-8">
      {/* Timeline Line */}
      <div
        className="
          absolute
          left-5
          top-0
          hidden
          h-full
          w-[2px]
          bg-gradient-to-b
          from-violet-500
          via-fuchsia-500
          to-transparent
          sm:block
        "
      />

      {roadmap.map((step, index) => (
        <div
          key={index}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            shadow-[0_0_40px_rgba(168,85,247,0.08)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-violet-500/30
            hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]
            sm:ml-14
            sm:p-8
          "
        >
          {/* Timeline Dot */}
          <div
            className="
              absolute
              -left-11
              top-10
              hidden
              h-6
              w-6
              rounded-full
              border-4
              border-black
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              shadow-[0_0_20px_rgba(168,85,247,0.8)]
              sm:block
            "
          />

          {/* Step Number */}
          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-violet-500/20
              text-sm
              font-bold
              text-violet-300
            "
          >
            {index + 1}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white">{step.title}</h2>

          {/* Duration */}
          <p className="mt-2 text-sm font-medium text-violet-400">
            {step.duration}
          </p>

          {/* Description */}
          <p className="mt-5 leading-7 text-zinc-300">{step.description}</p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {step.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  bg-violet-500/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-violet-300
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Resources */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Learning Resources
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {step.resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-violet-500/40
                    hover:bg-violet-500/10
                  "
                >
                  <span
                    className="
                      font-medium
                      text-zinc-200
                      transition
                      group-hover:text-white
                    "
                  >
                    {resource.title}
                  </span>

                  <ExternalLink
                    className="
                      h-5
                      w-5
                      text-violet-400
                    "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
