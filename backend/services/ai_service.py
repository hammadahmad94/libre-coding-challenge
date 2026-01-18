import os
import json
from openai import OpenAI
from dotenv import load_dotenv
from models import ChatMessage, RoadmapResponse, RoadmapStep

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_consultation_response(messages: list[ChatMessage]) -> str:
    """
    Generates a natural language response for the chat consultation phase.
    """
    # Convert Pydantic models to dicts for OpenAI API
    formatted_messages = [{"role": m.role, "content": m.content} for m in messages]
    
    # Add system prompt context if needed, or rely on user history
    # For now, we append a system instruction to the start if not present,
    # or just rely on the model's ability.
    # Let's add a system prompt to guide the persona.
    system_prompt = {
        "role": "system",
        "content": "You are Pathway, an AI Goal Decomposition specialist. Your goal is to help the user clarify their high-level goals through a consultation chat. Ask clarifying questions to understand their timeline, resources, and specific outcomes. Do NOT generate a full plan yet. Just consult."
    }
    
    api_messages = [system_prompt] + formatted_messages

    response = client.chat.completions.create(
        model="gpt-4o", # Using a high-quality model
        messages=api_messages,
        temperature=0.7
    )
    
    return response.choices[0].message.content

def generate_structured_roadmap(messages: list[ChatMessage]) -> RoadmapResponse:
    """
    Generates a structured roadmap based on the conversation history.
    """
    formatted_messages = [{"role": m.role, "content": m.content} for m in messages]
    
    system_prompt = {
        "role": "system",
        "content": """
        You are an expert project planner. Based on the previous conversation, generate a detailed, step-by-step roadmap to achieve the user's goal. 
        Return the result as a JSON object with a key 'steps', which is a list of objects.
        Each step object must have:
        - id: integer (1, 2, 3...)
        - title: string (short actionable title)
        - description: string (detailed explanation)
        - estimated_time: string (e.g., "2 Days", "1 Week")
        - status: string (default to "pending")
        """
    }
    
    api_messages = [system_prompt] + formatted_messages

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=api_messages,
        response_format={"type": "json_object"},
        temperature=0.7
    )
    
    content = response.choices[0].message.content
    data = json.loads(content)
    
    # Validate/Convert to Pydantic model
    steps = [RoadmapStep(**step) for step in data.get("steps", [])]
    return RoadmapResponse(steps=steps)
