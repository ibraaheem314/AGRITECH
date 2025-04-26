# backend/app/api/weather.py

from fastapi import APIRouter, HTTPException, Query
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
AIRVISUAL_API_KEY = os.getenv("AIRVISUAL_API_KEY")

@router.get("/api/weather/current")
def get_current_weather(lat: float = Query(...), lon: float = Query(...)):
    if not OPENWEATHER_API_KEY:
        raise HTTPException(status_code=500, detail="Clé API OpenWeather manquante")

    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={OPENWEATHER_API_KEY}&units=metric&lang=fr"

    try:
        r = requests.get(url)
        r.raise_for_status()
        data = r.json()

        return {
            "temperature": round(data["main"]["temp"]),
            "description": data["weather"][0]["description"].capitalize(),
            "humidity": data["main"]["humidity"],
            "pressure": data["main"]["pressure"],
            "wind_speed": data["wind"]["speed"]
        }

    except requests.RequestException:
        raise HTTPException(status_code=503, detail="Erreur avec OpenWeather API")

@router.get("/api/weather/forecast")
def get_forecast(lat: float = Query(...), lon: float = Query(...)):
    url = (
        f"https://api.open-meteo.com/v1/forecast?"
        f"latitude={lat}&longitude={lon}"
        f"&daily=temperature_2m_max,temperature_2m_min,precipitation_sum"
        f"&current_weather=true&timezone=Europe%2FParis"
    )

    try:
        r = requests.get(url)
        r.raise_for_status()
        data = r.json()

        daily_forecast = []
        days = data.get("daily", {})

        for i in range(len(days.get("time", []))):
            daily_forecast.append({
                "day": days["time"][i],
                "max_temp": days["temperature_2m_max"][i],
                "min_temp": days["temperature_2m_min"][i],
                "rainfall": days["precipitation_sum"][i]
            })

        return {
            "location": f"{lat},{lon}",
            "forecast": daily_forecast
        }

    except requests.RequestException:
        raise HTTPException(status_code=503, detail="Erreur avec Open-Meteo API")

@router.get("/api/weather/airquality")
def get_air_quality(lat: float = Query(...), lon: float = Query(...)):
    if not AIRVISUAL_API_KEY:
        raise HTTPException(status_code=500, detail="Clé API AirVisual manquante")

    url = f"https://api.airvisual.com/v2/nearest_city?lat={lat}&lon={lon}&key={AIRVISUAL_API_KEY}"

    try:
        r = requests.get(url)
        r.raise_for_status()
        data = r.json()

        aqi = data["data"]["current"]["pollution"]["aqius"]
        return {"aqi": aqi}

    except requests.RequestException:
        raise HTTPException(status_code=503, detail="Erreur avec AirVisual API")
