from fastapi import APIRouter
from models import ChatRequest, RoadmapResponse
import controllers.chat as chat_controller

router = APIRouter(prefix="/api/chat", tags=["chat"])

@router.post("/message")
async def chat_message(request: ChatRequest):
    return await chat_controller.get_chat_response(request)

@router.post("/generate-roadmap", response_model=RoadmapResponse)
async def generate_roadmap(request: ChatRequest):
    return await chat_controller.get_roadmap(request)
