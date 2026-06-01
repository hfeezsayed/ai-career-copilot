from fastapi import APIRouter, Depends

from app.dependencies.auth import get_current_user
from app.schemas.dashboard import DashboardUpdate
from app.db.mongodb import users_collection

router = APIRouter(
    prefix="/user",
    tags=["User"],
)


@router.get("/dashboard")
async def get_dashboard(
    current_user=Depends(get_current_user),
):
    return {
        "resume_score": current_user.get(
            "resume_score",
            0,
        ),
        "job_match_score": current_user.get(
            "job_match_score",
            0,
        ),
        "career_goal": current_user.get(
            "career_goal",
            "Not Set",
        ),
        "recent_activities": current_user.get(
            "recent_activities",
            [],
        ),
    }


@router.post("/dashboard")
async def update_dashboard(
    data: DashboardUpdate,
    current_user=Depends(get_current_user),
):
    users_collection.update_one(
        {"email": current_user["email"]},
        {
            "$set": {
                "resume_score": data.resume_score,
                "job_match_score": data.job_match_score,
                "career_goal": data.career_goal,
                "recent_activities": data.recent_activities,
            }
        },
    )

    return {"message": "Dashboard updated successfully."}
