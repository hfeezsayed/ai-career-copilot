"use client";

import { useState } from "react";

import { Upload } from "lucide-react";

import { uploadResume } from "@/lib/api";

type Props = {
  setAnalysis: (data: any) => void;
};

export default function UploadBox({ setAnalysis }: Props) {
  const [loading, setLoading] = useState(false);

  const [fileName, setFileName] = useState("");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    try {
      setLoading(true);

      const data = await uploadResume(file);

      console.log("UPLOAD RESPONSE:", data);

      // IMPORTANT
      setAnalysis(data);

      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error(error);

      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-white/10 rounded-3xl bg-zinc-950/70 backdrop-blur-xl p-5 md:p-8">
      <div className="border border-fuchsia-500/20 rounded-2xl p-10 md:p-16 text-center">
        {/* Upload Icon */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/20 mb-8">
          <Upload className="w-10 h-10 text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Upload Your Resume
        </h2>

        {/* Description */}
        <p className="text-zinc-400 max-w-2xl mx-auto leading-8 text-sm md:text-base">
          Drag & drop your PDF or DOCX resume here to receive AI-powered
          analysis, ATS scoring, missing skills detection, and improvement
          suggestions.
        </p>

        {/* Button */}
        <div className="mt-8">
          <label
            className="
              inline-flex
              items-center
              justify-center
              px-8 py-4
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              hover:opacity-90
              transition-all
              text-white
              font-medium
              shadow-lg
              shadow-fuchsia-500/20
              cursor-pointer
            "
          >
            {loading ? "Uploading..." : "Choose Resume"}

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Selected File */}
        {fileName && (
          <p className="text-sm text-emerald-400 mt-4">Selected: {fileName}</p>
        )}

        <p className="text-xs text-zinc-500 mt-4">
          Supported formats: PDF, DOCX
        </p>
      </div>
    </div>
  );
}
