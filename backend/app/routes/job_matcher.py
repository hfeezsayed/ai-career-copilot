from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
)

from app.services.ats_engine import (
    compare_resume_jd,
)

from app.utils.resume_parser import (
    extract_text_from_file,
)

router = APIRouter()


@router.post("/job-match")
async def job_match(
    resume: UploadFile = File(...),
    job_description: str = Form(...),
):
    resume_text = await extract_text_from_file(resume)

    result = compare_resume_jd(
        resume_text,
        job_description,
    )

    return result
