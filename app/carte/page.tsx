"use client";

import Link from "next/link";

export default function Carte() {
  const etapes = [
    { id: 1, jour: "J1-2", emoji: "🏔️", nom: "Cape Town", description: "Départ & Muizenberg" },
    { id: 2, jour: "J2", emoji: "🍷", nom: "Stellenbosch", description: "Route des vins" },
    { id: 3, jour: "J3", emoji: "🐋", nom: "Hermanus", description: "Baleines" },
    { id: 4, jour: "J4-5", emoji: "🌿", nom: "Wilderness", description: "Nature sauvage" },
    { id: 5, jour: "J6-7", emoji: "🦪", nom: "Knysna", description: "Gastronomie" },
    { id: 6, jour: "J8", emoji: "🏙️", nom: "Port Elizabeth", description: "Ville côtière" },
    { id: 7, jour: "J9-10", emoji: "🐘", nom: "Addo Park", description: "Safari Big Five" },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <Link href="/accueil" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F] font-serif">Mon itinéraire</h1>
        <div className="w-6"></div>
      </div>

      {/* Carte visuelle style Polarsteps */}
      <div className="relative h-52 bg-gradient-to-br from-[#87CEEB] via-[#98D4BB] to-[#C2B280] overflow-hidden">
        {/* Points d'étape sur la carte */}
        <div className="absolute top-8 left-6">
          <div className="w-4 h-4 bg-[#E8A43A] rounded-full border-2 border-white shadow-lg"></div>
          <span className="text-[10px] font-bold text-white drop-shadow-md ml-1">CPT</span>
        </div>
        
        <div className="absolute top-12 left-16">
          <div className="w-3 h-3 bg-[#CD6A32] rounded-full border-2 border-white shadow"></div>
        </div>

        <div className="absolute top-20 left-12">
          <div className="w-3 h-3 bg-[#CD6A32] rounded-full border-2 border-white shadow"></div>
        </div>

        <div className="absolute top-24 right-32">
          <div className="w-3 h-3 bg-[#CD6A32] rounded-full border-2 border-white shadow"></div>
        </div>

        <div className="absolute top-16 right-24">
          <div className="w-4 h-4 bg-[#E8A43A] rounded-full border-2 border-white shadow-lg"></div>
          <span className="text-[10px] font-bold text-white drop-shadow-md">Knysna</span>
        </div>

        <div className="absolute top-12 right-12">
          <div className="w-3 h-3 bg-[#CD6A32] rounded-full border-2 border-white shadow"></div>
        </div>

        <div className="absolute top-8 right-4">
          <div className="w-4 h-4 bg-[#5D7A3A] rounded-full border-2 border-white shadow-lg"></div>
          <span className="text-[10px] font-bold text-white drop-shadow-md">Addo</span>
        </div>

        {/* Ligne de route pointillée */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
          <path
            d="M 30 50 Q 80 70 100 90 Q 140 120 200 100 Q 280 80 320 70 Q 360 55 385 50"
            fill="none"
            stroke="#E8A43A"
            strokeWidth="3"
            strokeDasharray="8 5"
            strokeLinecap="round"
          />
        </svg>

        {/* Badge distance */}
        <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full shadow">
          <span className="text-xs font-semibold text-[#3D2B1F]">~850 km • 10 jours</span>
        </div>

        {/* Dégradé bas */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
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
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
              etape.nom === "Knysna" ? "bg-[#E8A43A]" : "bg-[#FDF6E8]"
            }`}>
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