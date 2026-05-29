export interface JobMatchResult {
  match_percentage: number;

  matching_skills: string[];

  missing_skills: string[];

  resume_keywords: string[];

  jd_keywords: string[];
}