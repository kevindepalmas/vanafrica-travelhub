import Link from "next/link";

export default function Knysna() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <Link href="/carte" className="text-2xl">←</Link>
        <h1 className="text-2xl font-bold text-[#3D2B1F] mb-1 font-serif">KNYSNA</h1>
        <span className="text-xl text-[#A69580]">♡</span>
      </div>

     {/* Hero image */}
<div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/knysna.jpg')", backgroundPosition: "center 60%" }}>
</div>

      {/* Contenu */}
      <div className="px-4 py-4">

        {/* Badge + jours */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-3 py-1 rounded-full bg-[#E8A43A] text-white font-semibold">
            Étape 5/7
          </span>
          <span className="text-xs text-[#A69580]">Jours 6-7 • 2 nuits</span>
        </div>

        {/* Titre */}
        <h1 className="text-2xl font-bold text-[#3D2B1F] mb-1">KNYSNA</h1>
        <p className="text-[#E8A43A] mb-4">La perle de la Garden Route</p>

        {/* Description */}
        <p className="text-sm text-[#3D2B1F] leading-relaxed mb-6">
          Nichée entre forêts et lagune, Knysna est le cœur gastronomique de la Garden Route. 
          Célèbre pour ses huîtres, ses Heads spectaculaires et son atmosphère décontractée.
        </p>

        {/* À ne pas manquer */}
        <h3 className="font-semibold text-[#3D2B1F] mb-3">🎯 À ne pas manquer</h3>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🦪</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Dégustation huîtres</p>
          </div>
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🚶</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Knysna Heads</p>
          </div>
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🌲</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Forêt indigène</p>
          </div>
          <div className="bg-[#FDF6E8] p-3 rounded-xl text-center">
            <span className="text-2xl">🛍️</span>
            <p className="text-xs text-[#3D2B1F] mt-1">Waterfront Market</p>
          </div>
        </div>

        {/* Partenaires */}
        <h3 className="font-semibold text-[#3D2B1F] mb-3">⭐ Partenaires Van&apos;Africa</h3>
        <div className="space-y-2 mb-6">
          <Link href="/partenaire/addo-african-home" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
            <span className="text-2xl">🦪</span>
            <div className="flex-1">
              <p className="font-semibold text-sm text-[#3D2B1F]">Île de Noisy Oyster Bar</p>
              <p className="text-xs text-[#A69580]">Restaurant</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-10%</span>
          </Link>
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
            <span className="text-2xl">🏕️</span>
            <div className="flex-1">
              <p className="font-semibold text-sm text-[#3D2B1F]">Knysna Forest Camping</p>
              <p className="text-xs text-[#A69580]">Hébergement</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-[#5D7A3A] text-white">-15%</span>
          </div>
        </div>

        {/* Bouton navigation */}
        <a 
          href="https://www.google.com/maps/search/Knysna,+South+Africa"
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