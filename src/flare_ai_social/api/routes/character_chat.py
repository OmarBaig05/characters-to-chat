from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
import structlog



from flare_ai_social.ai.character_provider import CharacterProvider
from flare_ai_social.settings import settings

logger = structlog.get_logger(__name__)

class CharacterRequest(BaseModel):
    """Request model for character selection"""
    character: str = Field(..., description="Character name to chat with")
    message: str = Field(..., description="Message to send to the character")


class CharacterResponse(BaseModel):
    """Response model for character chat"""
    character: str
    response: str


class CharacterListResponse(BaseModel):
    """Response model for listing available characters"""
    characters: list[str]


class CharacterChatRouter:
    """Router for character-based chat API"""

    def __init__(self):
        """Initialize with character providers"""
        self.router = APIRouter()
        self.providers: dict[str, CharacterProvider] = {}
        
        # Register routes
        self.router.add_api_route(
            "/chat", self.chat_endpoint, methods=["POST"], response_model=CharacterResponse
        )
        self.router.add_api_route(
            "/characters", self.list_characters, methods=["GET"], response_model=CharacterListResponse
        )

    async def chat_endpoint(self, request: CharacterRequest) -> dict:
        """Process chat message and return character response"""
        character = request.character.lower()
        message = request.message
        
        # Get or create provider for this character
        if character not in self.providers:
            try:
                self.providers[character] = CharacterProvider(
                    api_key=settings.gemini_api_key,
                    character_name=request.character,
                    model_name="gemini-1.5-flash",
                )
            except ValueError as e:
                logger.error("Character not found", character=character, error=str(e))
                raise HTTPException(status_code=404, detail=f"Character '{request.character}' not found")
            except Exception as e:
                logger.error("Failed to initialize character provider", error=str(e))
                raise HTTPException(status_code=500, detail=f"Failed to initialize character: {str(e)}")
        
        # Generate response
        try:
            response = self.providers[character].generate_content(message)
            return {
                "character": request.character,
                "response": response.text
            }
        except Exception as e:
            logger.error("Failed to generate response", character=character, error=str(e))
            raise HTTPException(status_code=500, detail=f"Failed to generate response: {str(e)}")
    
    async def list_characters(self) -> dict:
        """List available characters"""
        return {"characters": CharacterProvider.list_available_characters()}