"use client";

import { useState } from "react";

import RoadmapHeader from "@/components/roadmap/roadmap-header";
import RoadmapForm from "@/components/roadmap/roadmap-form";
import RoadmapResult from "@/components/roadmap/roadmap-result";

import {
  saveCareerGoal,
  saveRecentActivity,
  saveLastUpdated,
} from "@/lib/dashboard-storage";

import { roadmapTemplates } from "@/data/roadmap-data";

export default function RoadmapPage() {
  const [targetRole, setTargetRole] = useState("");

  const [currentSkills, setCurrentSkills] = useState("");

  const [experienceLevel, setExperienceLevel] = useState("Beginner");

  const [roadmap, setRoadmap] = useState<any[]>([]);

  const handleGenerateRoadmap = () => {
    if (!targetRole || !currentSkills) {
      alert("Please fill all fields");
      return;
    }

    // SAVE ACTIVE GOAL FOR DASHBOARD
    saveCareerGoal(targetRole);

    saveRecentActivity(`🗺️ Roadmap generated → ${targetRole}`);

    saveLastUpdated();

    const role = targetRole.toLowerCase();

    // AI ROADMAP
    if (
      role.includes("ai") ||
      role.includes("ml") ||
      role.includes("machine learning") ||
      role.includes("llm")
    ) {
      setRoadmap(roadmapTemplates.ai);
      return;
    }

    // FRONTEND ROADMAP
    if (
      role.includes("frontend") ||
      role.includes("react") ||
      role.includes("ui")
    ) {
      setRoadmap(roadmapTemplates.frontend);
      return;
    }

    // BACKEND ROADMAP
    if (
      role.includes("backend") ||
      role.includes("api") ||
      role.includes("server")
    ) {
      setRoadmap(roadmapTemplates.backend);
      return;
    }

    // FULLSTACK ROADMAP
    if (role.includes("full stack") || role.includes("fullstack")) {
      setRoadmap(roadmapTemplates.fullstack);
      return;
    }

    // DEFAULT ROADMAP
    setRoadmap(roadmapTemplates.fullstack);
  };

  return (
    <div
      className="
        mx-auto
        w-full
        max-w-7xl
        space-y-10
        px-4
        py-6
        sm:px-6
        lg:px-8
        xl:px-10
      "
    >
      <RoadmapHeader />

      <RoadmapForm
        targetRole={targetRole}
        setTargetRole={setTargetRole}
        currentSkills={currentSkills}
        setCurrentSkills={setCurrentSkills}
        experienceLevel={experienceLevel}
        setExperienceLevel={setExperienceLevel}
        onGenerate={handleGenerateRoadmap}
      />

      {roadmap.length > 0 && <RoadmapResult roadmap={roadmap} />}
    </div>
  );
}
