from fastapi import HTTPException
from models import ChatRequest, RoadmapResponse
import services.ai_service as ai_service

async def get_chat_response(request: ChatRequest) -> dict:
    try:
        response_text = ai_service.get_consultation_response(request.messages)
        return {"response": response_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_roadmap(request: ChatRequest) -> RoadmapResponse:
    try:
        roadmap = ai_service.generate_structured_roadmap(request.messages)
        return roadmap
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
