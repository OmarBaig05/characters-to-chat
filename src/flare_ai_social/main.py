"""
AI Agent API Main Application Module

This module initializes and configures the FastAPI application for the AI Agent API.
It sets up CORS middleware, integrates various providers (AI, blockchain, attestation),
and configures the chat routing system.

Dependencies:
    - FastAPI for the web framework
    - Structlog for structured logging
    - CORS middleware for cross-origin resource sharing
    - Custom providers for AI, blockchain, and attestation services
"""

import google.generativeai as genai
import structlog
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from flare_ai_social.settings import settings
from flare_ai_social.api.routes.character_chat import CharacterChatRouter

logger = structlog.get_logger(__name__)
genai.configure(api_key=settings.gemini_api_key)


def create_app() -> FastAPI:
    """Create and configure the FastAPI application instance."""
    app = FastAPI(title="PromptPlay Character API", redirect_slashes=False)

    # Configure CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Add the character chat router
    character_chat = CharacterChatRouter()
    app.include_router(character_chat.router, prefix="/api/characters", tags=["characters"])

    return app


app = create_app()


def start() -> None:
    """
    Start the FastAPI application server using uvicorn.

    This function initializes and runs the uvicorn server with the configuration:
    - Host: 0.0.0.0 (accessible from all network interfaces)
    - Port: 8080 (default HTTP port for the application)
    - App: The FastAPI application instance
    """
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)  # noqa: S104


if __name__ == "__main__":
    start()
