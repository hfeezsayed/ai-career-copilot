from pydantic import BaseModel
from typing import List


class Message(BaseModel):
    role: str
    content: str


class Chat(BaseModel):
    title: str
    messages: List[Message]