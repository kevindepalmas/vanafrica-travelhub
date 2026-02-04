"use client";

import Link from "next/link";

export default function Places() {
  const partenaires = [
    { id: 1, nom: "Addo African Home", type: "Hébergement", lieu: "Addo", rating: "4.9", emoji: "🏡" },
    { id: 2, nom: "Knysna Forest Camping", type: "Hébergement", lieu: "Knysna", rating: "4.7", emoji: "🏕️" },
    { id: 3, nom: "Île de Noisy Oyster Bar", type: "Restaurant", lieu: "Knysna", rating: "4.9", emoji: "🦪" },
    { id: 4, nom: "Hermanus Whale Watching", type: "Activité", lieu: "Hermanus", rating: "4.9", emoji: "🐋" },
    { id: 5, nom: "Marianne Wine Estate", type: "Activité", lieu: "Stellenbosch", rating: "4.8", emoji: "🍷" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF6E8] pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#F5C45A] bg-[#FDF6E8]">
        <Link href="/accueil" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F] font-serif">Places We Approve</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-6">
        
        {/* Titre avec tampon */}
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-xl font-bold text-[#3D2B1F] font-serif">Nos partenaires</h2>
          <div className="bg-[#E8A43A] text-white text-xs font-bold px-2 py-1 rounded transform -rotate-3">
            ✓ APPROVED
          </div>
        </div>
        <p className="text-sm text-[#A69580] mb-6">
          Testés et approuvés par Van&apos;Africa. Réductions exclusives.
        </p>

        {/* Filtres */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button className="px-4 py-2 rounded-full text-sm font-semibold bg-[#E8A43A] text-white whitespace-nowrap">
            Tous
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#3D2B1F] whitespace-nowrap">
            🏨 Hébergements
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#3D2B1F] whitespace-nowrap">
            🍽️ Restaurants
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#3D2B1F] whitespace-nowrap">
            🎯 Activités
          </button>
        </div>

        {/* Liste partenaires */}
        <div className="space-y-3">
          {partenaires.map((p) => (
            <Link href="/partenaire/addo-african-home" key={p.id} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#FDF6E8] rounded-lg flex items-center justify-center text-2xl">
                {p.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[#3D2B1F]">{p.nom}</p>
                  <span className="text-[#E8A43A] text-xs">✓</span>
                </div>
                <p className="text-xs text-[#A69580]">📍 {p.lieu} • {p.type}</p>
                <p className="text-xs text-[#3D2B1F]">⭐ {p.rating}</p>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-10%</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          <Link href="/accueil" className="text-center">
            <span className="text-2xl">🏠</span>
            <p className="text-xs text-[#A69580]">Accueil</p>
          </Link>
          <Link href="/carte" className="text-center">
            <span className="text-2xl">🗺️</span>
            <p className="text-xs text-[#A69580]">Carte</p>
          </Link>
          <div className="text-center">
            <span className="text-2xl">⭐</span>
            <p className="text-xs font-semibold text-[#E8A43A]">Partenaires</p>
          </div>
          <Link href="/infos" className="text-center">
            <span className="text-2xl">👤</span>
            <p className="text-xs text-[#A69580]">Infos</p>
          </Link>
        </div>
      </div>
    </div>
  );
}