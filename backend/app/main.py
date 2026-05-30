from fastapi import FastAPI

from fastapi.middleware.cors import (
    CORSMiddleware,
)

from app.routes.auth import (
    router as auth_router,
)

from app.routes.chat import (
    router as chat_router,
)

from app.routes.resume import (
    router as resume_router,
)

from app.routes.job_matcher import (
    router as job_matcher_router,
)

app = FastAPI(title="AI Career Copilot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Chat Routes
app.include_router(chat_router)

# auth router
app.include_router(auth_router)

# Resume Analyzer Routes
app.include_router(resume_router)

# Job Matcher Routes
app.include_router(
    job_matcher_router,
    prefix="/api",
    tags=["Job Matcher"],
)


@app.get("/")
async def root():
    return {"message": "AI Career Copilot API Running"}
