"use client";

import { useState } from "react";

import UploadBox from "@/components/resume/upload-box";
import ATSScoreCard from "@/components/resume/ats-score-card";
import SkillsCard from "@/components/resume/skills-card";
import ResumePreview from "@/components/resume/resume-preview";
import AIFeedback from "@/components/resume/ai-feedback";
import KeywordTable from "@/components/resume/keyword-table";

export default function ResumePage() {
  const [analysis, setAnalysis] = useState<any>(null);

  return (
    <div className="min-h-screen bg-black text-white px-5 md:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold tracking-tight">
            Resume Analyzer 📄
          </h1>

          <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-3xl leading-7">
            Upload your resume and get AI-powered ATS analysis, skill insights,
            resume strength score, and personalized improvement suggestions.
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-8">
          <UploadBox setAnalysis={setAnalysis} />
        </div>

        {/* Dynamic Analysis */}
        {analysis && (
          <>
            {/* Top Section */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8 items-start">
              {/* Left Score Cards */}
              <div className="xl:col-span-3 space-y-6">
                <ATSScoreCard
                  title="ATS Score"
                  score={analysis.ats_score}
                  description="Resume optimization score based on ATS analysis."
                  type="ats"
                />

                <ATSScoreCard
                  title="Job Match"
                  score={analysis.job_match}
                  description="Matching score for modern engineering roles."
                  type="job"
                />

                <ATSScoreCard
                  title="Resume Strength"
                  score={analysis.resume_strength}
                  description="Overall resume profile strength."
                  type="strength"
                />
              </div>

              {/* Keyword Table */}
              <div className="xl:col-span-9 min-w-0">
                <KeywordTable
                  detectedSkills={analysis.detected_skills}
                  missingSkills={analysis.missing_skills}
                />
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <SkillsCard
                detectedSkills={analysis.detected_skills}
                missingSkills={analysis.missing_skills}
              />
            </div>

            {/* Resume Overview */}
            <div className="mb-8">
              <ResumePreview analysis={analysis} />
            </div>

            {/* AI Suggestions */}
            <div className="mb-8">
              <AIFeedback suggestions={analysis.suggestions} />
            </div>

            {/* Footer */}
            <div className="text-center text-zinc-500 text-sm pb-6">
              Your resume is securely processed and never permanently stored.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
