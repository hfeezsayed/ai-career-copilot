"use client";

import { useState } from "react";

import JobMatcherHeader from "@/components/job-matcher/job-matcher-header";
import ResumeUploadCard from "@/components/job-matcher/resume-upload-card";
import JobDescriptionCard from "@/components/job-matcher/job-description-card";
import SkillsSection from "@/components/job-matcher/skills-section";
import ScoreCardsGrid from "@/components/job-matcher/score-cards-grid";
import KeywordTable from "@/components/job-matcher/keyword-table";
import ATSInsights from "@/components/job-matcher/ats-insights";
import AnalyzingOverlay from "@/components/job-matcher/analyzing-overlay";
import AISuggestions from "@/components/job-matcher/ai-suggestions";
import {
  saveJobMatchScore,
  saveRecentActivity,
  saveLastUpdated,
} from "@/lib/dashboard-storage";

import { analyzeJobMatch } from "@/lib/job-matcher";

import { JobMatchResult } from "@/types/job-matcher";

export default function JobMatcherPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const [matchResult, setMatchResult] = useState<JobMatchResult | null>(null);

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDescription) {
      alert("Please upload resume and paste job description");

      return;
    }

    try {
      setLoading(true);

      const result = await analyzeJobMatch(resumeFile, jobDescription);

      saveJobMatchScore(result.match_percentage);

      saveRecentActivity(`💼 Job Match checked → ${result.match_percentage}%`);

      saveLastUpdated();

      setMatchResult(result);
    } catch (error) {
      console.error("Job Match Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <AnalyzingOverlay />}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          space-y-10
          px-4
          pt-8
          pb-6
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        <JobMatcherHeader />

        {/* Input Section */}
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            gap-6
            xl:grid-cols-2
          "
        >
          <ResumeUploadCard
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
          />

          <JobDescriptionCard
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />
        </div>

        {/* Analyze Button */}
        <div
          className="
            sticky
            bottom-4
            z-20
            flex
            justify-center
            pt-2
          "
        >
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="
              w-full
              max-w-md
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
              disabled:cursor-not-allowed
              disabled:opacity-50
              sm:w-auto
            "
          >
            {loading ? "Analyzing..." : "Analyze Match"}
          </button>
        </div>

        {/* Results */}
        {matchResult && (
          <div className="space-y-6 pt-4">
            {/* Score Cards */}
            <ScoreCardsGrid
              atsScore={matchResult.match_percentage}
              matchingSkills={matchResult.matching_skills.length}
              totalSkills={matchResult.jd_keywords.length}
            />

            {/* Skills */}
            <div
              className="
                grid
                grid-cols-1
                gap-6
                xl:grid-cols-2
              "
            >
              <SkillsSection
                title="Matching Skills"
                skills={matchResult.matching_skills}
                type="match"
              />

              <SkillsSection
                title="Missing Skills"
                skills={matchResult.missing_skills}
                type="missing"
              />
            </div>

            {/* ATS Insights */}
            <ATSInsights
              atsScore={matchResult.match_percentage}
              missingSkills={matchResult.missing_skills}
              matchingSkills={matchResult.matching_skills}
            />

            {/* AI Suggestions */}
            <AISuggestions
              atsScore={matchResult.match_percentage}
              missingSkills={matchResult.missing_skills}
            />

            {/* Keyword Table */}
            <KeywordTable
              matchedKeywords={matchResult.matching_skills}
              missingKeywords={matchResult.missing_skills}
            />
          </div>
        )}
      </div>
    </>
  );
}
