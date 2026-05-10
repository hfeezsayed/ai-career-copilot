from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    chat_id: str | None = None


class ChatResponse(BaseModel):
    response: str
    chat_id: str