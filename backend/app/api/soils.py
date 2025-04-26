# backend/app/api/soils.py

from fastapi import APIRouter, HTTPException, Query
import requests

router = APIRouter()

SOILGRIDS_BASE_URL = "https://rest.soilgrids.org/query"

@router.get("/api/soils", summary="Analyse complète du sol", tags=["Soil"])
def get_soil_profile(
    lat: float = Query(..., description="Latitude de la position"),
    lon: float = Query(..., description="Longitude de la position")
):
    """
    Récupère différentes propriétés du sol (argile, sable, limon, carbone organique, pH) à une localisation donnée.
    """

    url = f"{SOILGRIDS_BASE_URL}?lon={lon}&lat={lat}&attributes=clay,sand,silt,soc,phh2o"

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()

        properties = data.get("properties", {}).get("layers", [])

        if not properties:
            raise HTTPException(status_code=404, detail="Aucune donnée de sol disponible pour cette localisation.")

        # Structurer les résultats
        soil_data = {}
        for layer in properties:
            attribute = layer.get("name")
            if attribute:
                soil_data[attribute] = {
                    "units": layer.get("units"),
                    "depths": layer.get("depths", [])
                }

        return soil_data

    except requests.RequestException:
        raise HTTPException(status_code=503, detail="Erreur réseau lors de l'accès aux données de sol.")
