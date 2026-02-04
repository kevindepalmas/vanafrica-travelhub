"use client";

import Link from "next/link";

export default function Inspiration() {
  const itineraires = [
    {
      id: 1,
      nom: "Garden Route Classic",
      jours: 10,
      km: 850,
      description: "Le grand classique : Cape Town → Addo via la côte",
      emoji: "🌊",
      etapes: ["Cape Town", "Stellenbosch", "Hermanus", "Wilderness", "Knysna", "Addo"],
    },
    {
      id: 2,
      nom: "Wine & Coast",
      jours: 7,
      km: 400,
      description: "Vignobles et plages, sans se presser",
      emoji: "🍷",
      etapes: ["Cape Town", "Franschhoek", "Stellenbosch", "Hermanus"],
    },
    {
      id: 3,
      nom: "Safari & Beach",
      jours: 14,
      km: 1200,
      description: "Le meilleur des deux mondes",
      emoji: "🦁",
      etapes: ["Cape Town", "Garden Route", "Addo", "Wild Coast"],
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <Link href="/accueil" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F] font-serif">Need Inspiration?</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-6">
        
        <h2 className="text-xl font-bold text-[#3D2B1F] mb-2 font-serif">Itinéraires tout faits</h2>
        <p className="text-sm text-[#A69580] mb-6">
          Inspirez-vous de nos routes signatures, testées et approuvées.
        </p>

        {/* Liste des itinéraires */}
        <div className="space-y-4">
          {itineraires.map((it) => (
            <Link href="/carte" key={it.id} className="block bg-gradient-to-r from-[#FDF6E8] to-[#FFF8F0] p-5 rounded-xl border border-[#F5C45A] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{it.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#3D2B1F] font-serif">{it.nom}</h3>
                  <p className="text-xs text-[#E8A43A] mb-2">{it.jours} jours • ~{it.km} km</p>
                  <p className="text-sm text-[#A69580] mb-3">{it.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {it.etapes.map((etape, i) => (
                      <span key={i} className="text-xs bg-white px-2 py-1 rounded-full text-[#8B4513]">
                        {etape}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-sm font-semibold text-[#E8A43A]">Voir cet itinéraire →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA personnalisé */}
        <div className="mt-8 bg-[#3D2B1F] p-5 rounded-xl text-center">
          <p className="text-white font-semibold mb-2">Envie d&apos;autre chose ?</p>
          <p className="text-sm text-white/70 mb-4">Créez votre propre aventure</p>
          <Link href="/travel-your-way" className="inline-block px-6 py-3 bg-[#E8A43A] text-white rounded-lg font-semibold">
            Composer mon voyage →
          </Link>
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
          <Link href="/places" className="text-center">
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