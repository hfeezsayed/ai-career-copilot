type ResumeUploadCardProps = {
  resumeFile: File | null;
  setResumeFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function ResumeUploadCard({
  resumeFile,
  setResumeFile,
}: ResumeUploadCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-4 text-xl font-semibold text-white">Upload Resume</h2>

      <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-violet-500/30 bg-black/40 p-6">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              setResumeFile(file);
            }
          }}
          className="text-white"
        />

        {resumeFile && (
          <p className="mt-4 text-sm text-zinc-400">
            Selected: {resumeFile.name}
          </p>
        )}
      </div>
    </div>
  );
}
