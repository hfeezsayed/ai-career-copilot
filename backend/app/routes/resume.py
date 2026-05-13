from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse

from app.utils.resume_parser import (
    extract_text_from_pdf,
    extract_text_from_docx,
)

from app.utils.skill_extractor import (
    extract_skills,
    get_missing_skills,
)

from app.utils.resume_analyzer import (
    extract_candidate_name,
    extract_candidate_role,
    extract_email,
    extract_education,
    extract_experience,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume Analyzer"],
)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    allowed_types = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    # Validate file type
    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed.",
        )

    # Read uploaded file
    contents = await file.read()

    # Validate file size (5MB)
    max_size = 5 * 1024 * 1024

    if len(contents) > max_size:
        raise HTTPException(
            status_code=400,
            detail="File size exceeds 5MB limit.",
        )

    # Extract Resume Text
    extracted_text = ""

    if file.content_type == "application/pdf":
        extracted_text = extract_text_from_pdf(contents)

    else:
        extracted_text = extract_text_from_docx(contents)

    # SKILL EXTRACTION
    detected_skills = extract_skills(extracted_text)

    missing_skills = get_missing_skills(detected_skills)

    # ATS SCORE LOGIC
    ats_score = min(
        100,
        50 + (len(detected_skills) * 5),
    )

    # JOB MATCH LOGIC
    job_match = min(
        100,
        40 + (len(detected_skills) * 4),
    )

    # RESUME STRENGTH
    if ats_score >= 85:
        resume_strength = "Strong"

    elif ats_score >= 70:
        resume_strength = "Intermediate+"

    else:
        resume_strength = "Beginner"

    # AI SUGGESTIONS
    suggestions = []

    if "Docker" not in detected_skills:
        suggestions.append("Add Docker deployment experience.")

    if "AWS" not in detected_skills:
        suggestions.append("Include cloud deployment projects.")

    if "CI/CD" not in detected_skills:
        suggestions.append("Mention CI/CD pipelines or DevOps exposure.")

    if "Kubernetes" not in detected_skills:
        suggestions.append("Add container orchestration exposure.")

    if len(detected_skills) < 5:
        suggestions.append(
            "Add more technical skills relevant to modern engineering roles."
        )

    # DYNAMIC RESUME ANALYSIS
    candidate_name = extract_candidate_name(extracted_text)

    candidate_role = extract_candidate_role(extracted_text)

    candidate_email = extract_email(extracted_text)

    education = extract_education(extracted_text)

    experience = extract_experience(extracted_text)

    # FINAL ANALYSIS RESPONSE
    analysis = {
        "ats_score": ats_score,
        "job_match": job_match,
        "resume_strength": resume_strength,
        "detected_skills": detected_skills,
        "missing_skills": missing_skills,
        "suggestions": suggestions,
        "candidate": {
            "name": candidate_name,
            "role": candidate_role,
            "email": candidate_email,
        },
        "experience": experience,
        "education": education,
        "resume_preview": extracted_text[:1500],
    }

    return JSONResponse(
        status_code=200,
        content=analysis,
    )
