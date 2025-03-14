import json
import os
from pathlib import Path
import structlog

from flare_ai_social.ai.gemini import GeminiProvider

logger = structlog.get_logger(__name__)

class CharacterProvider(GeminiProvider):
    """Provider for character-based AI interactions"""

    CHARACTERS_FILE = Path("src/characters/characters.json")
    
    def __init__(self, api_key: str, character_name: str, model_name: str = "gemini-1.5-flash"):
        """
        Initialize the character provider.
        
        Args:
            api_key: Gemini API key
            character_name: Name of the character to load
            model_name: Name of the LLM model to use
        """
        self.character_name = character_name
        character_data = self._load_character(character_name)
        
        if not character_data:
            logger.error("Character not found", character_name=character_name)
            raise ValueError(f"Character '{character_name}' not found")
            
        system_instruction = character_data.get("character_detail", {}).get("text", "")
        
        super().__init__(
            api_key=api_key,
            model_name=model_name,
            system_instruction=system_instruction
        )
        
        logger.info("Character provider initialized", character=character_name)

    def _load_character(self, character_name: str) -> dict:
        """
        Load character data from the characters.json file.
        
        Args:
            character_name: Name of the character to load
            
        Returns:
            Character data dictionary or None if not found
        """
        if not os.path.exists(self.CHARACTERS_FILE):
            logger.error("Characters file not found", path=self.CHARACTERS_FILE)
            raise FileNotFoundError(f"Characters file not found: {self.CHARACTERS_FILE}")
            
        try:
            with open(self.CHARACTERS_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                
            characters = data.get("characters", [])
            for character in characters:
                if character.get("character_name").lower() == character_name.lower():
                    return character
                    
            return {}
            
        except Exception as e:
            logger.error("Failed to load character", error=str(e))
            raise
    
    @classmethod
    def _load_characters_file(cls) -> dict:
        """Load the characters file"""
        if not os.path.exists(cls.CHARACTERS_FILE):
            logger.error("Characters file not found", path=cls.CHARACTERS_FILE)
            raise FileNotFoundError(f"Characters file not found: {cls.CHARACTERS_FILE}")
            
        try:
            with open(cls.CHARACTERS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.error("Failed to load characters file", error=str(e))
            raise
            
    @classmethod
    def list_available_characters(cls) -> list:
        """Return list of available character names from the characters file"""
        try:
            data = cls._load_characters_file()
            characters = data.get("characters", [])
            return [character.get("character_name") for character in characters if character.get("character_name")]
        except Exception as e:
            logger.error("Failed to list available characters", error=str(e))
            return []