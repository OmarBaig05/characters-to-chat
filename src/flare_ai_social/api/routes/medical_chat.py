# src/flare_ai_social/api/routes/medical_chat.py
from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field

from flare_ai_social.ai.medical_expert import MedicalExpertProvider

router = APIRouter()

class ChatMessage(BaseModel):
    """Chat message model."""
    message: str = Field(..., min_length=1)

class MedicalChatRouter:
    """Router for medical expert chat API."""
    
    def __init__(self, ai: MedicalExpertProvider):
        """Initialize with AI provider."""
        self.ai = ai
        self.router = APIRouter()
        self.router.add_api_route(
            "/chat", self.chat_endpoint, methods=["POST"], response_model=dict
        )
    
    async def chat_endpoint(self, message: ChatMessage):
        """Process chat message and return AI response."""
        response = self.ai.generate_content(message.message)
        return {"response": response.text}