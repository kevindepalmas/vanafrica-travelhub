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
<div className="relative h-64 overflow-hidden">
  {/* Image de fond carte */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/map-garden-route.jpg')" }}
  ></div>
  
  {/* Overlay sombre pour lisibilité */}
  <div className="absolute inset-0 bg-black/30"></div>
  
  {/* Titre du voyage */}
  <div className="absolute top-4 left-4 text-white">
    <p className="text-xs opacity-80">Votre voyage</p>
    <h2 className="text-lg font-bold font-serif">Garden Route & Addo</h2>
  </div>

  {/* Points d'étape numérotés */}
  <div className="absolute top-16 left-8">
    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg text-xs font-bold text-[#E8A43A]">1</div>
    <span className="text-[10px] font-bold text-white drop-shadow-lg block mt-1">Cape Town</span>
  </div>

  <div className="absolute top-24 left-20">
    <div className="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center shadow text-xs font-bold text-[#8B4513]">2</div>
  </div>

  <div className="absolute top-28 left-14">
    <div className="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center shadow text-xs font-bold text-[#8B4513]">3</div>
  </div>

  <div className="absolute top-24 right-28">
    <div className="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center shadow text-xs font-bold text-[#8B4513]">4</div>
  </div>

  <div className="absolute top-16 right-20">
    <div className="w-6 h-6 bg-[#E8A43A] rounded-full flex items-center justify-center shadow-lg text-xs font-bold text-white">5</div>
    <span className="text-[10px] font-bold text-white drop-shadow-lg block mt-1">Knysna</span>
  </div>

  <div className="absolute top-20 right-12">
    <div className="w-5 h-5 bg-white/80 rounded-full flex items-center justify-center shadow text-xs font-bold text-[#8B4513]">6</div>
  </div>

  <div className="absolute top-12 right-4">
    <div className="w-6 h-6 bg-[#5D7A3A] rounded-full flex items-center justify-center shadow-lg text-xs font-bold text-white">7</div>
    <span className="text-[10px] font-bold text-white drop-shadow-lg block mt-1">Addo</span>
  </div>

  {/* Ligne de route */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 250">
    <path
      d="M 45 100 Q 100 140 120 160 Q 160 170 240 140 Q 300 110 340 100 Q 370 85 390 75"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="6 4"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>

  {/* Badge distance */}
  <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded-full shadow-lg">
    <span className="text-xs font-bold text-[#3D2B1F]">🚐 ~850 km • 10 jours</span>
  </div>
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