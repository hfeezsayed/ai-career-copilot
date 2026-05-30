from fastapi import APIRouter, HTTPException

from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
)

from app.db.mongodb import users_collection

from app.services.auth_service import (
    hash_password,
    verify_password,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
async def register_user(
    payload: RegisterRequest,
):
    existing_user = users_collection.find_one({"email": payload.email})

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered.",
        )

    users_collection.insert_one(
        {
            "name": payload.name,
            "email": payload.email,
            "password": hash_password(payload.password),
        }
    )

    return {"message": "User registered successfully."}


@router.post("/login")
async def login_user(
    payload: LoginRequest,
):
    user = users_collection.find_one({"email": payload.email})

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials.",
        )

    if not verify_password(
        payload.password,
        user["password"],
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials.",
        )

    return {
        "message": "Login successful.",
        "user": {
            "name": user["name"],
            "email": user["email"],
        },
    }
