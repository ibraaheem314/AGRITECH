# backend/app/api/agribot.py

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import os
import requests
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

OPENROUTER_API_KEY = os.getenv("OPEN_ROUTER_KEY")

class QueryRequest(BaseModel):
    question: str
    history: list = []

@router.post("/api/agribot")
async def agribot_chat(request: QueryRequest):
    if not OPENROUTER_API_KEY:
        raise HTTPException(status_code=500, detail="Clé API OpenRouter manquante")

    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    messages = [{"role": "system", "content": "Tu es AgriBot, un assistant agricole spécialisé, poli, en français."}]
    
    # Ajoute l'historique
    for h in request.history:
        messages.append({"role": h["type"], "content": h["content"]})
    
    # Ajoute la nouvelle question
    messages.append({"role": "user", "content": request.question})

    payload = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": messages
    }

    try:
        r = requests.post(url, headers=headers, json=payload, timeout=30)
        r.raise_for_status()
        data = r.json()

        if "choices" in data and data["choices"]:
            reply = data["choices"][0]["message"]["content"]
            return {"response": reply}
        else:
            raise HTTPException(status_code=500, detail="Réponse vide du modèle.")

    except requests.RequestException as e:
        raise HTTPException(status_code=503, detail=f"Erreur OpenRouter : {str(e)}")
