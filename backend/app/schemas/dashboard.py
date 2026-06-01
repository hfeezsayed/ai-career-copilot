from pydantic import BaseModel


class DashboardUpdate(BaseModel):
    resume_score: int
    job_match_score: int
    career_goal: str
    recent_activities: list[str]
