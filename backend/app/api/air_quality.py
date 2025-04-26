# backend/app/api/air_quality.py

from fastapi import APIRouter, HTTPException, Query
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

AIRVISUAL_API_KEY = os.getenv('AIRVISUAL_API_KEY')

@router.get("/api/airquality")
def get_air_quality(lat: float = Query(...), lon: float = Query(...)):
    if not AIRVISUAL_API_KEY:
        raise HTTPException(status_code=500, detail="Clé API AirVisual non trouvée")

    url = f"https://api.airvisual.com/v2/nearest_city?lat={lat}&lon={lon}&key={AIRVISUAL_API_KEY}"

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()

        aqi = data["data"]["current"]["pollution"]["aqius"]

        return {"aqi": aqi}

    except requests.RequestException as e:
        raise HTTPException(status_code=503, detail="Erreur lors de la récupération de la qualité de l'air")
