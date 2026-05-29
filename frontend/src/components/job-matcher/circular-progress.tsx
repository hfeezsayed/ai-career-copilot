type CircularProgressProps = {
  value: number;
  label: string;
};

export default function CircularProgress({
  value,
  label,
}: CircularProgressProps) {
  const radius = 70;

  const strokeWidth = 10;

  const normalizedRadius = radius - strokeWidth * 0.5;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div className="relative">
        <svg height={radius * 2} width={radius * 2} className="-rotate-90">
          {/* Background */}
          <circle
            stroke="rgba(255,255,255,0.08)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress */}
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{
              strokeDashoffset,
              transition: "stroke-dashoffset 1s ease",
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />

              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <span
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            {value}%
          </span>

          <span
            className="
              mt-1
              text-xs
              text-zinc-400
            "
          >
            ATS Score
          </span>
        </div>
      </div>

      <p
        className="
          mt-4
          text-sm
          font-medium
          text-zinc-300
        "
      >
        {label}
      </p>
    </div>
  );
}
