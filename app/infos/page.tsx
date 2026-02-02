import Link from "next/link";

export default function Infos() {
  return (
    <div className="min-h-screen bg-[#FDF6E8] pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#F5C45A] bg-[#FDF6E8]">
        <Link href="/accueil" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F]">Infos pratiques</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-4 space-y-4">

        {/* Titre */}
        <h2 className="text-xl font-bold text-[#3D2B1F]">Tout ce qu&apos;il faut savoir</h2>

        {/* Card Van */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#3D2B1F] mb-3">🚐 Votre van</h3>
          <p className="font-semibold text-sm text-[#3D2B1F]">Van Duo &quot;Savanna&quot;</p>
          <p className="text-sm text-[#A69580] mb-2">Capacité : 2-3 personnes</p>
          <p className="text-sm font-semibold text-[#E8A43A]">Guide du van →</p>
        </div>

        {/* Card Check-list */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#3D2B1F] mb-3">📋 Check-list départ</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-[#3D2B1F]">
              <input type="checkbox" className="rounded" />
              Passeport valide
            </label>
            <label className="flex items-center gap-2 text-sm text-[#3D2B1F]">
              <input type="checkbox" className="rounded" />
              Permis international
            </label>
            <label className="flex items-center gap-2 text-sm text-[#3D2B1F]">
              <input type="checkbox" className="rounded" />
              Assurance voyage
            </label>
            <label className="flex items-center gap-2 text-sm text-[#3D2B1F]">
              <input type="checkbox" className="rounded" />
              Cartes téléchargées
            </label>
            <label className="flex items-center gap-2 text-sm text-[#3D2B1F]">
              <input type="checkbox" className="rounded" />
              Cash (ZAR)
            </label>
          </div>
          <p className="text-sm font-semibold text-[#E8A43A] mt-3">Voir tout →</p>
        </div>

        {/* Card Offline */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#3D2B1F] mb-3">📱 Mode hors-ligne</h3>
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#5D7A3A] flex items-center justify-center text-white text-xs">✓</div>
              <span className="text-[#3D2B1F]">Cartes téléchargées</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#5D7A3A] flex items-center justify-center text-white text-xs">✓</div>
              <span className="text-[#3D2B1F]">Fiches partenaires</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#A69580]"></div>
              <span className="text-[#A69580]">Photos HD</span>
            </div>
          </div>
          <button className="w-full py-2 rounded-lg text-sm font-semibold bg-[#FDF6E8] text-[#E8A43A]">
            Télécharger tout
          </button>
        </div>

        {/* Card Urgences */}
        <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#EF4444]">
          <h3 className="font-semibold text-[#3D2B1F] mb-3">🆘 Urgences</h3>
          <p className="font-semibold text-sm text-[#3D2B1F]">Van&apos;Africa 24/7 :</p>
          <p className="font-bold text-[#3D2B1F] mb-2">+27 XX XXX XXXX</p>
          <div className="space-y-1 text-sm text-[#A69580] mb-3">
            <p>Urgences SA : 112</p>
            <p>Police : 10111</p>
            <p>Ambulance : 10177</p>
          </div>
          <a 
            href="tel:+27000000000"
            className="block w-full py-2 rounded-lg text-sm font-semibold bg-[#EF4444] text-white text-center"
          >
            Appeler Van&apos;Africa
          </a>
        </div>

        {/* Card Conseils */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#3D2B1F] mb-3">💡 Conseils</h3>
          <ul className="space-y-1 text-sm text-[#A69580]">
            <li>• Conduite à gauche</li>
            <li>• Vitesse max : 120 km/h</li>
            <li>• Essence : &quot;Unleaded 95&quot;</li>
            <li>• Pourboires : 10-15%</li>
          </ul>
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
            <p className="text-xs text-[#A69580]">Partenaires</p>
          </Link>
          <div className="text-center">
            <span className="text-2xl">👤</span>
            <p className="text-xs font-semibold text-[#E8A43A]">Infos</p>
          </div>
        </div>
      </div>

    </div>
  );
}