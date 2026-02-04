"use client";import HeartButton from "@/app/components/HeartButton";import Link from "next/link";import BackButton from "@/app/components/BackButton";

export default function Addo() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <BackButton />
        <h1 className="font-bold text-[#3D2B1F]">Étapes</h1>
        <HeartButton />
      </div>

   {/* Hero image */}
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/addo.jpg')", backgroundPosition: "center 77%" }}>
      </div>

      {/* Contenu */}
      <div className="px-4 py-4">

        {/* Badge + jours */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-3 py-1 rounded-full bg-[#E8A43A] text-white font-semibold">
            Étape 7/7
          </span>
          <span className="text-xs text-[#A69580]">Jours 9-10 • 2 nuits</span>
        </div>

        {/* Titre */}
        <h1 className="text-2xl font-bold text-[#3D2B1F] mb-1 font-serif">ADDO PARK</h1>
        <p className="text-[#E8A43A] mb-4">Le royaume des éléphants</p>

        {/* Description */}
        <p className="text-sm text-[#3D2B1F] leading-relaxed mb-2">
          Le Addo Elephant National Park est l&apos;un des parcs les plus diversifiés d&apos;Afrique du Sud. 
          Troisième plus grand parc national du pays, il abrite plus de 600 éléphants, ainsi que lions, 
          buffles, rhinocéros et léopards — les fameux Big Five !
        </p>
        <p className="text-sm text-[#A69580] italic mb-6">
          Une fin de road trip inoubliable au cœur de la nature sauvage africaine.
        </p>

        {/* À ne pas manquer */}
        <h3 className="font-semibold text-[#3D2B1F] mb-3">🎯 À ne pas manquer</h3>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🐘</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Safari Big Five</p>
          </div>
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🚗</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Game drive sunrise</p>
          </div>
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🦓</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Hide d&apos;observation</p>
          </div>
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">📸</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Photo safari</p>
          </div>
        </div>

        {/* Partenaires */}
        <h3 className="font-semibold text-[#3D2B1F] mb-3">⭐ Partenaires Van&apos;Africa</h3>
        <div className="space-y-2 mb-6">
          <Link href="/partenaire/addo-african-home" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
            <span className="text-2xl">🏡</span>
            <div className="flex-1">
              <p className="font-semibold text-sm text-[#3D2B1F]">Addo African Home NukaKamma</p>
              <p className="text-xs text-[#A69580]">Hébergement</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-10%</span>
          </Link>
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
            <span className="text-2xl">🏕️</span>
            <div className="flex-1">
              <p className="font-semibold text-sm text-[#3D2B1F]">Addo Main Camp (SANParks)</p>
              <p className="text-xs text-[#A69580]">Hébergement parc</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-5%</span>
          </div>
        </div>

        {/* Bouton navigation */}
        <a 
          href="https://www.google.com/maps/search/Addo+Elephant+National+Park"
          target="_blank"
          className="block w-full py-3 rounded-xl font-semibold text-white bg-[#E8A43A] text-center"
        >
          🧭 Lancer la navigation
        </a>

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
            <p className="text-xs font-semibold text-[#E8A43A]">Carte</p>
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