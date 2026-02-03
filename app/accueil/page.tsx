"use client";import Link from "next/link";
import Image from "next/image";

export default function Accueil() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6E8] to-[#F5E6D3] pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Image src="/icon-192.png" alt="Van'Africa" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-[#8B4513] font-serif">Van&apos;Africa</span>
        </div>
        <Link href="/favoris" className="text-2xl">
          ♡
        </Link>
      </div>

      {/* Contenu */}
      <div className="px-4">
        
        {/* Bienvenue */}
        <h1 className="text-2xl font-bold text-[#3D2B1F] mb-4 font-serif">
          Bienvenue Stéphane ! 👋
        </h1>

        {/* Hero Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <div className="h-32 bg-cover bg-center" style={{ backgroundImage: "url('/hero-garden-route.jpg')", backgroundPosition: "center 40%" }}>
          </div>
          <div className="bg-white p-4">
            <p className="text-sm text-[#A69580]">Votre aventure</p>
            <h2 className="text-lg font-bold text-[#3D2B1F] font-serif">
              GARDEN ROUTE & ADDO PARK
            </h2>
            <p className="text-sm text-[#8B4513]">10 jours • 7 étapes • ~850 km</p>
          </div>
        </div>

        {/* Grille de navigation */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link href="/carte" className="bg-white p-4 rounded-xl shadow-sm text-center">
            <span className="text-3xl">🗺️</span>
            <p className="text-sm font-semibold text-[#3D2B1F] mt-2 font-serif">Mon itinéraire</p>
          </Link>
          <Link href="/carte" className="bg-white p-4 rounded-xl shadow-sm text-center">
            <span className="text-3xl">📍</span>
            <p className="text-sm font-semibold text-[#3D2B1F] mt-2 font-serif">Étapes (7)</p>
          </Link>
          <Link href="/partenaires" className="bg-white p-4 rounded-xl shadow-sm text-center">
            <span className="text-3xl">⭐</span>
            <p className="text-sm font-semibold text-[#3D2B1F] mt-2 font-serif">Partenaires (12)</p>
          </Link>
          <Link href="/infos" className="bg-white p-4 rounded-xl shadow-sm text-center">
            <span className="text-3xl">📋</span>
            <p className="text-sm font-semibold text-[#3D2B1F] mt-2 font-serif">Infos pratiques</p>
          </Link>
        </div>

        {/* Conseil du jour */}
        <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#E8A43A]">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <p className="font-semibold text-sm text-[#3D2B1F]">Conseil du jour</p>
              <p className="text-sm text-[#A69580]">
                N&apos;oubliez pas de télécharger les cartes hors-ligne avant de partir !
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          <div className="text-center">
            <span className="text-2xl">🏠</span>
            <p className="text-xs font-semibold text-[#E8A43A]">Accueil</p>
          </div>
          <Link href="/carte" className="text-center">
            <span className="text-2xl">🗺️</span>
            <p className="text-xs text-[#A69580]">Carte</p>
          </Link>
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