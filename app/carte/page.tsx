"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import BackButton from "@/app/components/BackButton";

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2aW5kZXBhbG1hcyIsImEiOiJjbWw3cm5ndzgwbHk2M2VzMmEyOTZrcXJqIn0.vD9dmUOpRgqX4Qc7CgO1bQ";

export default function Carte() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const etapes = [
    { id: 1, jour: "J1-2", emoji: "🏔️", nom: "Cape Town", description: "Départ & Muizenberg", lat: -33.9249, lng: 18.4241 },
    { id: 2, jour: "J2", emoji: "🍷", nom: "Stellenbosch", description: "Route des vins", lat: -33.9346, lng: 18.8600 },
    { id: 3, jour: "J3", emoji: "🐋", nom: "Hermanus", description: "Baleines", lat: -34.4187, lng: 19.2345 },
    { id: 4, jour: "J4-5", emoji: "🌿", nom: "Wilderness", description: "Nature sauvage", lat: -33.9910, lng: 22.5806 },
    { id: 5, jour: "J6-7", emoji: "🦪", nom: "Knysna", description: "Gastronomie", lat: -34.0356, lng: 23.0488 },
    { id: 6, jour: "J8", emoji: "🏙️", nom: "Port Elizabeth", description: "Ville côtière", lat: -33.9608, lng: 25.6022 },
    { id: 7, jour: "J9-10", emoji: "🐘", nom: "Addo Park", description: "Safari Big Five", lat: -33.4543, lng: 25.7679 },
  ];

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [22.5, -33.8],
      zoom: 5.5,
    });

    map.current.on("load", () => {
      // Ajouter la ligne de route
      map.current!.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: etapes.map((e) => [e.lng, e.lat]),
          },
        },
      });

      map.current!.addLayer({
        id: "route-line",
        type: "line",
        source: "route",
        paint: {
          "line-color": "#E8A43A",
          "line-width": 3,
          "line-dasharray": [2, 1],
        },
      });

      // Ajouter les marqueurs
      etapes.forEach((etape) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "32px";
        el.style.height = "32px";
        el.style.borderRadius = "50%";
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
        el.style.fontWeight = "bold";
        el.style.fontSize = "14px";
        el.style.cursor = "pointer";
        el.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
        
        if (etape.id === 1 || etape.id === 5 || etape.id === 7) {
          el.style.backgroundColor = "#E8A43A";
          el.style.color = "white";
        } else {
          el.style.backgroundColor = "white";
          el.style.color = "#8B4513";
          el.style.border = "2px solid #E8A43A";
        }
        
        el.textContent = String(etape.id);

        el.addEventListener("click", () => {
  if (etape.nom === "Knysna") {
    window.location.href = "/etape/knysna";
  } else if (etape.nom === "Addo Park") {
    window.location.href = "/etape/addo";
  }
});

new mapboxgl.Marker(el)
  .setLngLat([etape.lng, etape.lat])
  .addTo(map.current!);
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <BackButton />
        <h1 className="font-bold text-[#3D2B1F] font-serif">Mon itinéraire</h1>
        <div className="w-6"></div>
      </div>

      {/* Carte Mapbox */}
      <div className="relative h-64">
        <div ref={mapContainer} className="w-full h-full" />
        
        {/* Badge distance */}
        <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded-full shadow-lg z-10">
          <span className="text-xs font-bold text-[#3D2B1F]">🚐 ~850 km • 10 jours</span>
        </div>
      </div>

      {/* Info itinéraire */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-[#3D2B1F] font-serif">Garden Route & Addo Park</h2>
        <p className="text-sm text-[#A69580]">7 étapes inoubliables</p>
      </div>

      {/* Titre section */}
      <div className="px-4 mb-3">
        <h3 className="font-semibold text-[#3D2B1F]">Vos étapes</h3>
      </div>

      {/* Liste des étapes */}
      <div className="px-4 space-y-2">
        {etapes.map((etape) => (
          <Link
            href={etape.nom === "Knysna" ? "/etape/knysna" : etape.nom === "Addo Park" ? "/etape/addo" : "#"}
            key={etape.id}
            className={`flex items-center gap-3 p-3 rounded-xl shadow-sm ${
              etape.nom === "Knysna"
                ? "bg-gradient-to-r from-[#FDF6E8] to-[#FFF8F0] border-2 border-[#E8A43A]"
                : "bg-white"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                etape.nom === "Knysna" ? "bg-[#E8A43A]" : "bg-[#FDF6E8]"
              }`}
            >
              {etape.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FDF6E8] text-[#8B4513]">
                  {etape.jour}
                </span>
                <span className="font-semibold text-[#3D2B1F]">{etape.nom}</span>
              </div>
              <p className="text-xs text-[#A69580]">{etape.description}</p>
            </div>
            <span className="text-[#A69580]">›</span>
          </Link>
        ))}
      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          <Link href="/accueil" className="text-center">
            <span className="text-2xl">🏠</span>
            <p className="text-xs text-[#A69580]">Accueil</p>
          </Link>
          <div className="text-center">
            <span className="text-2xl">🗺️</span>
            <p className="text-xs font-semibold text-[#E8A43A]">Carte</p>
          </div>
          <Link href="/partenaires" className="text-center">
            <span className="text-2xl">⭐</span>
            <p className="text-xs text-[#A69580]">Partenaires</p>
          </Link>
          <Link href="/infos" className="text-center">
            <span className="text-2xl">👤</span>
            <p className="text-xs text-[#A69580]">Infos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}