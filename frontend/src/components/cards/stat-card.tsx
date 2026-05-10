type StatCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300">
      {/* Title */}
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      {/* Value */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 break-words">
        {value}
      </h2>

      {/* Description */}
      <p className="text-zinc-500 text-sm mt-2">
        {description}
      </p>
    </div>
  );
}