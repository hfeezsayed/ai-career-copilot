type JobDescriptionCardProps = {
  jobDescription: string;

  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
};

export default function JobDescriptionCard({
  jobDescription,
  setJobDescription,
}: JobDescriptionCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-4 text-xl font-semibold text-white">Job Description</h2>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description here..."
        className="
          min-h-[350px]
          w-full
          rounded-2xl
          border
          border-white/10
          bg-black/40
          p-4
          text-sm
          text-white
          outline-none
          transition-all
          placeholder:text-zinc-500
          focus:border-violet-500
        "
      />
    </div>
  );
}
