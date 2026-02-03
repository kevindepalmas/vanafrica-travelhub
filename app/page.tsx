import Link from "next/link";export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Header avec logo */}
      <div className="text-center pt-10 pb-6">
        <div className="text-6xl mb-3">🚐</div>
        <h1 className="text-2xl font-bold text-[#8B4513] font-serif" style={{ fontFamily: 'serif' }}>
          Van&apos;Africa
        </h1>
        <p className="text-sm text-[#A69580]">African Van Life</p>
      </div>

      {/* Ligne de séparation */}
      <div className="mx-6 border-t-2 border-[#F5C45A]"></div>

      {/* Contenu principal */}
      <div className="flex-1 px-6 py-6">
        
        {/* Salutation */}
        <p className="text-[#3D2B1F] mb-2">Bonjour Stéphane,</p>
        
        {/* Titre confirmation */}
        <h2 className="text-xl font-bold text-[#E8A43A] font-serif" style={{ fontFamily: 'serif' }}>
          🎉 Votre réservation est confirmée !
        </h2>

        {/* Récapitulatif */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <span>📅</span>
            <span className="text-[#3D2B1F]">Du 15 au 24 novembre 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span>🚐</span>
            <span className="text-[#3D2B1F]">Van Duo &quot;Savanna&quot;</span>
          </div>
          <div className="flex items-center gap-3">
            <span>📍</span>
            <span className="text-[#3D2B1F]">Départ : Cape Town Airport</span>
          </div>
          <div className="flex items-center gap-3">
            <span>📍</span>
            <span className="text-[#3D2B1F]">Retour : Cape Town Airport</span>
          </div>
        </div>

        {/* Box "Préparez votre aventure" */}
        <div className="bg-gradient-to-r from-[#FDF6E8] to-[#FFF8F0] p-4 rounded-xl border-l-4 border-[#E8A43A] mb-6">
          <h3 className="font-semibold text-[#3D2B1F] mb-1">Préparez votre aventure !</h3>
          <p className="text-sm text-[#A69580]">
            Accédez à votre espace personnel pour découvrir votre itinéraire personnalisé, 
            nos adresses secrètes et vos avantages partenaires.
          </p>
        </div>

        {/* Bouton CTA */}
<Link href="/accueil" className="block w-full py-4 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-[#F5C45A] via-[#E8A43A] to-[#CD6A32] text-center">
  🧭 OUVRIR LE TRAVEL HUB
</Link>

      </div>

      {/* Footer */}
      <div className="border-t border-[#F5C45A] mx-6 py-6 text-center">
        <p className="text-sm text-[#A69580]">Des questions ?</p>
        <a href="mailto:hello@vanafrica.com" className="text-sm font-semibold text-[#8B4513]">
          hello@vanafrica.com
        </a>
      </div>

    </div>
  );
}