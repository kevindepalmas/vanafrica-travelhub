import Link from "next/link";

export default function Partenaires() {
  return (
    <div className="min-h-screen bg-[#FDF6E8] pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#F5C45A] bg-[#FDF6E8]">
        <Link href="/accueil" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F]">Partenaires</h1>
        <span className="text-xl">🔍</span>
      </div>

      {/* Contenu */}
      <div className="px-4 py-4">

        {/* Titre */}
        <h2 className="text-xl font-bold text-[#3D2B1F] mb-1">Vos avantages exclusifs</h2>
        <p className="text-sm text-[#A69580] mb-4">Économisez avec nos partenaires sélectionnés</p>

        {/* Filtres */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button className="px-4 py-2 rounded-full text-sm font-semibold bg-[#E8A43A] text-white">
            Tous
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#3D2B1F]">
            🏨 Hébg.
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#3D2B1F]">
            🍽️ Food
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#3D2B1F]">
            🎯 Activ.
          </button>
        </div>

        {/* Section Hébergements */}
        <h3 className="text-xs font-bold text-[#A69580] tracking-wider mb-3">HÉBERGEMENTS</h3>
        
        <div className="space-y-3 mb-6">
          <Link href="/partenaire/addo-african-home" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#FDF6E8] rounded-lg flex items-center justify-center text-3xl">
              🏡
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#3D2B1F]">Addo African Home</p>
              <p className="text-sm text-[#8B4513]">NukaKamma</p>
              <p className="text-xs text-[#A69580]">📍 Addo</p>
              <p className="text-xs text-[#3D2B1F]">⭐ 4.9 (24 avis)</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-10%</span>
          </Link>

          <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#FDF6E8] rounded-lg flex items-center justify-center text-3xl">
              🏕️
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#3D2B1F]">Knysna Forest Camping</p>
              <p className="text-xs text-[#A69580]">📍 Knysna</p>
              <p className="text-xs text-[#3D2B1F]">⭐ 4.7 (18 avis)</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-15%</span>
          </div>
        </div>

        {/* Section Restaurants */}
        <h3 className="text-xs font-bold text-[#A69580] tracking-wider mb-3">RESTAURANTS & BARS</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#FDF6E8] rounded-lg flex items-center justify-center text-3xl">
              🦪
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#3D2B1F]">Île de Noisy Oyster Bar</p>
              <p className="text-xs text-[#A69580]">📍 Knysna</p>
              <p className="text-xs text-[#3D2B1F]">⭐ 4.9 (42 avis)</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-10%</span>
          </div>
        </div>

        {/* Section Activités */}
        <h3 className="text-xs font-bold text-[#A69580] tracking-wider mb-3">ACTIVITÉS</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#FDF6E8] rounded-lg flex items-center justify-center text-3xl">
              🐋
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#3D2B1F]">Hermanus Whale Watching</p>
              <p className="text-xs text-[#A69580]">📍 Hermanus</p>
              <p className="text-xs text-[#3D2B1F]">⭐ 4.9 (89 avis)</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-10%</span>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#FDF6E8] rounded-lg flex items-center justify-center text-3xl">
              🍷
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#3D2B1F]">Marianne Wine Estate</p>
              <p className="text-xs text-[#A69580]">📍 Stellenbosch</p>
              <p className="text-xs text-[#3D2B1F]">⭐ 4.8 (67 avis)</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-15%</span>
          </div>
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