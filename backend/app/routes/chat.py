from fastapi import APIRouter
from pydantic import BaseModel

from app.schemas.chat_schema import (
    ChatRequest,
    ChatResponse,
)

from app.services.ai_service import generate_ai_response

from app.services.chat_service import (
    create_chat,
    add_message,
    get_all_chats,
    get_chat,
)

router = APIRouter()


class RenameChatRequest(BaseModel):
    title: str


# Rename Chat
@router.put("/chat/{chat_id}")
async def rename_chat(chat_id: str, data: RenameChatRequest):

    from app.services.chat_service import rename_chat_service

    return await rename_chat_service(chat_id, data.title)


# Send Chat Message
@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(data: ChatRequest):

    chat_id = data.chat_id

    # Create New Chat
    if not chat_id or chat_id == "string":

        title = data.message[:30]

        chat_id = await create_chat(title)

    # Save User Message
    await add_message(
        chat_id,
        "user",
        data.message,
    )

    # Generate AI Response
    ai_response = await generate_ai_response(data.message)

    # Save AI Message
    await add_message(
        chat_id,
        "assistant",
        ai_response,
    )

    return {
        "response": ai_response,
        "chat_id": chat_id,
    }


# Delete Chat
@router.delete("/chat/{chat_id}")
async def delete_single_chat(chat_id: str):

    from app.services.chat_service import delete_chat

    return await delete_chat(chat_id)


# Get All Chats
@router.get("/chats")
async def get_chats():

    return await get_all_chats()


# Get Single Chat
@router.get("/chat/{chat_id}")
async def single_chat(chat_id: str):

    return await get_chat(chat_id)
