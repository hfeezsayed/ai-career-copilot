export const saveResumeScore = (score: number) => {
  localStorage.setItem("resumeScore", score.toString());
};

export const getResumeScore = () => {
  return Number(localStorage.getItem("resumeScore") || 0);
};

export const saveJobMatchScore = (score: number) => {
  localStorage.setItem("jobMatchScore", score.toString());
};

export const getJobMatchScore = () => {
  return Number(localStorage.getItem("jobMatchScore") || 0);
};

export const saveCareerGoal = (goal: string) => {
  localStorage.setItem("careerGoal", goal);
};

export const getCareerGoal = () => {
  return localStorage.getItem("careerGoal") || "Not Set";
};

export const saveRecentActivity = (activity: string) => {
  const existing = JSON.parse(
    localStorage.getItem("recentActivities") || "[]"
  );

  const filtered = existing.filter(
    (item: string) => item !== activity
  );

  const updated = [
    activity,
    ...filtered,
  ].slice(0, 5);

  localStorage.setItem(
    "recentActivities",
    JSON.stringify(updated)
  );
};

export const getRecentActivities = (): string[] => {
  return JSON.parse(
    localStorage.getItem("recentActivities") || "[]"
  );
};

export const saveLastUpdated = () => {
  localStorage.setItem(
    "lastUpdated",
    new Date().toLocaleString()
  );
};

export const getLastUpdated = () => {
  return (
    localStorage.getItem("lastUpdated") ||
    "Not Available"
  );
};

