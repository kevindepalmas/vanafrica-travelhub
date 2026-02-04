"use client";

import Link from "next/link";import BackButton from "@/app/components/BackButton";

export default function Journey() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <BackButton />
        <h1 className="font-bold text-[#3D2B1F] font-serif">Votre voyage</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-6">
        
        <h2 className="text-xl font-bold text-[#3D2B1F] mb-2 font-serif">Mon itinéraire</h2>

        {/* Travel Frame */}
        <div className="bg-gradient-to-r from-[#FDF6E8] to-[#FFF8F0] p-5 rounded-xl border-2 border-[#E8A43A] mb-6">
          <h3 className="font-bold text-[#E8A43A] mb-4 font-serif">🚐 Votre cadre de voyage</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#A69580]">Pick-up location</span>
              <span className="font-semibold text-[#3D2B1F]">Aéroport de Cape Town</span>
            </div>
            <div className="border-t border-[#E8A43A]/30"></div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#A69580]">Drop-off location</span>
              <span className="font-semibold text-[#3D2B1F]">Aéroport de Cape Town</span>
            </div>
            <div className="border-t border-[#E8A43A]/30"></div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#A69580]">Durée</span>
              <span className="font-semibold text-[#3D2B1F]">10 jours</span>
            </div>
            <div className="border-t border-[#E8A43A]/30"></div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#A69580]">Temps de conduite</span>
              <span className="font-semibold text-[#3D2B1F]">2-4h/jour (recommandé)</span>
            </div>
          </div>
        </div>

        {/* Étapes ajoutées */}
        <h3 className="font-semibold text-[#3D2B1F] mb-3">📍 Vos étapes</h3>
        
        <div className="bg-gray-50 p-6 rounded-xl text-center mb-6">
          <span className="text-4xl mb-3 block">🗺️</span>
          <p className="text-sm text-[#A69580] mb-4">
            Votre itinéraire se construira au fur et à mesure de vos choix.
          </p>
          <Link href="/travel-your-way" className="inline-block px-4 py-2 bg-[#E8A43A] text-white rounded-lg font-semibold text-sm">
            Composer mon voyage →
          </Link>
        </div>

        {/* Lien vers carte */}
        <Link href="/carte" className="block w-full py-3 rounded-xl font-semibold text-[#E8A43A] border-2 border-[#E8A43A] text-center">
          🗺️ Voir la carte
        </Link>
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