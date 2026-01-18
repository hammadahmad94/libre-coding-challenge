from pydantic import BaseModel
from typing import List, Optional

class ChatMessage(BaseModel):
    role: str
    content: str
    
class ChatRequest(BaseModel):
    messages: List[ChatMessage]

class RoadmapStep(BaseModel):
    id: int
    title: str
    description: str
    estimated_time: str
    status: str = "pending"

class RoadmapResponse(BaseModel):
    steps: List[RoadmapStep]
