# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Importer toutes les routes
from app.api import weather, air_quality, agribot, soils

# Créer l'app FastAPI
app = FastAPI(
    title="AgriTech API",
    version="1.0",
    description="Backend API pour l'application AgriTech 🌱",
)

# Middleware CORS pour autoriser le frontend (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Autoriser tout pour dev. (à restreindre en production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclure les routes avec préfixe /api
app.include_router(weather.router, prefix="/api")
app.include_router(air_quality.router, prefix="/api")
app.include_router(agribot.router, prefix="/api")
app.include_router(soils.router, prefix="/api")
# app.include_router(predict_plant.router, prefix="/api")  # Pour plus tard

# Petit endpoint health check
@app.get("/", tags=["Health Check"])
def root():
    return {"message": "Bienvenue sur l'API AgriTech 🚀"}

@app.get("/ping", tags=["Health Check"])
def ping():
    return {"message": "Pong 🏓"}
