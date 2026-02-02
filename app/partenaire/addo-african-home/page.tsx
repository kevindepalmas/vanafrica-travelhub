import Link from "next/link";

export default function AddoAfricanHome() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <Link href="/partenaires" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F]">Partenaire</h1>
        <div className="flex gap-2">
          <span className="text-xl">↑</span>
          <span className="text-xl text-[#A69580]">♡</span>
        </div>
      </div>

      {/* Hero image */}
      <div className="h-56 bg-gradient-to-r from-[#5D7A3A] to-[#8B4513] relative">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          🏡🌴🐘
        </div>
        {/* Dots carrousel */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>

      {/* Bandeau avantage */}
      <div className="mx-4 -mt-6 relative z-10">
        <div className="bg-gradient-to-r from-[#F5C45A] to-[#E8A43A] p-4 rounded-xl shadow-lg text-center">
          <p className="text-white text-sm font-semibold">🏷️ AVANTAGE VAN&apos;AFRICA</p>
          <p className="text-white text-xl font-bold">-10% sur votre séjour</p>
          <p className="text-white/80 text-xs">Code : VANAFRICA2026</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-4">

        {/* Nom */}
        <h1 className="text-2xl font-bold text-[#3D2B1F]">Addo African Home</h1>
        <p className="text-lg text-[#E8A43A] tracking-wider mb-2">NUKAKAMMA</p>

        {/* Infos */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-[#3D2B1F]">⭐ 4.9</span>
          <span className="text-sm text-[#A69580]">(24 avis)</span>
          <span className="text-[#A69580]">•</span>
          <span className="text-sm text-[#A69580]">📍 Addo, Eastern Cape</span>
        </div>
        <p className="text-sm text-[#A69580] mb-4">🏨 Lodge • Guesthouse</p>

        {/* Description */}
        <p className="text-sm text-[#3D2B1F] leading-relaxed mb-2">
          Un havre de paix aux portes du Addo Elephant National Park. NukaKamma vous accueille 
          dans un cadre authentique africain, avec piscine, jardin luxuriant et hospitalité chaleureuse.
        </p>
        <p className="text-sm text-[#A69580] italic mb-4">
          Idéal après une journée de safari pour observer les Big Five !
        </p>

        {/* Équipements */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p className="text-sm text-[#5D7A3A]">✓ Parking van sécurisé</p>
          <p className="text-sm text-[#5D7A3A]">✓ Petit-déjeuner inclus</p>
          <p className="text-sm text-[#5D7A3A]">✓ Piscine</p>
          <p className="text-sm text-[#5D7A3A]">✓ WiFi gratuit</p>
          <p className="text-sm text-[#5D7A3A]">✓ Conseils safari</p>
        </div>

        {/* Adresse */}
        <div className="bg-[#FDF6E8] p-4 rounded-xl mb-4 flex items-center gap-3">
          <span className="text-xl">📍</span>
          <span className="text-sm text-[#3D2B1F]">Caesar Avenue, Addo, 6105</span>
        </div>

        {/* Boutons */}
        <div className="space-y-3">
          <a 
            href="tel:+27000000000"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold border-2 border-[#3D2B1F] text-[#3D2B1F]"
          >
            📞 Appeler
          </a>
          <a 
            href="https://wa.me/27000000000"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-[#25D366] text-white"
          >
            💬 WhatsApp
          </a>
          <a 
            href="https://www.google.com/maps/search/Caesar+Avenue,+Addo,+6105,+South+Africa"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-[#E8A43A] text-white"
          >
            🧭 Naviguer (12 km)
          </a>
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
          <Link href="/partenaires" className="text-center">
            <span className="text-2xl">⭐</span>
            <p className="text-xs font-semibold text-[#E8A43A]">Partenaires</p>
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