# import google.generativeai as genai
# from flare_ai_social.settings import settings

# def delete_tuned_model():
#     """Delete a tuned model."""
#     genai.configure(api_key=settings.gemini_api_key)
    
#     # Get the model ID
#     model_id = f"tunedModels/{settings.tuned_model_name}"
    
#     try:
#         # Delete the model
#         print(f"Attempting to delete model: {model_id}")
#         genai.delete_tuned_model(model_id)
#         print(f"Successfully deleted model: {model_id}")
#     except Exception as e:
#         print(f"Error deleting model: {e}")

# if __name__ == "__main__":
#     delete_tuned_model()



import requests

API_URL = "http://localhost:8080/api/routes/medical-chat/chat"
test_prompt = "Rate this medical statement: Drinking orange juice cures the common cold."

response = requests.post(
    API_URL,
    json={"message": test_prompt},
    headers={"Content-Type": "application/json"}
)

if response.status_code == 200:
    result = response.json()
    print(f"Response: {result['response']}")
else:
    print(f"Error: Status code {response.status_code}")
    print(response.text)