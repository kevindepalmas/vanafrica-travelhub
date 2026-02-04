"use client";

import Link from "next/link";

export default function TravelYourWay() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <Link href="/accueil" className="text-2xl">←</Link>
        <h1 className="font-bold text-[#3D2B1F] font-serif">Travel Your Way</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-6 space-y-6">
        
        <h2 className="text-xl font-bold text-[#3D2B1F] font-serif">Composez votre itinéraire</h2>

        {/* Bloc 1: Your Travel Frame */}
        <div className="bg-gradient-to-r from-[#FDF6E8] to-[#FFF8F0] p-5 rounded-xl border-2 border-[#E8A43A]">
          <h3 className="font-bold text-[#E8A43A] mb-3 font-serif">📋 Your Travel Frame</h3>
          <p className="text-sm text-[#A69580] mb-4">Le socle de votre voyage. Factuel. Non négociable.</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#A69580]">Pick-up</span>
              <span className="font-semibold text-[#3D2B1F]">Cape Town</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A69580]">Drop-off</span>
              <span className="font-semibold text-[#3D2B1F]">Cape Town / Port Elizabeth</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A69580]">Durée</span>
              <span className="font-semibold text-[#3D2B1F]">10 jours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A69580]">Conduite/jour</span>
              <span className="font-semibold text-[#3D2B1F]">2-4h (recommandé)</span>
            </div>
          </div>
        </div>

        {/* Bloc 2: Ways to Travel */}
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <h3 className="font-bold text-[#3D2B1F] mb-3 font-serif">🌍 Ways to Travel</h3>
          <p className="text-sm text-[#A69580] mb-4">Inspiration, pas décision. Explorez les possibilités.</p>
          
          <div className="grid grid-cols-2 gap-2">
            <button className="p-3 bg-[#FDF6E8] rounded-lg text-left hover:bg-[#F5E6D3] transition-colors">
              <span className="text-xl">🏖️</span>
              <p className="text-xs font-semibold text-[#3D2B1F] mt-1">Ocean & Wild Beaches</p>
            </button>
            <button className="p-3 bg-[#FDF6E8] rounded-lg text-left hover:bg-[#F5E6D3] transition-colors">
              <span className="text-xl">🍷</span>
              <p className="text-xs font-semibold text-[#3D2B1F] mt-1">Wineries & Slow Living</p>
            </button>
            <button className="p-3 bg-[#FDF6E8] rounded-lg text-left hover:bg-[#F5E6D3] transition-colors">
              <span className="text-xl">🦁</span>
              <p className="text-xs font-semibold text-[#3D2B1F] mt-1">National Parks & Wildlife</p>
            </button>
            <button className="p-3 bg-[#FDF6E8] rounded-lg text-left hover:bg-[#F5E6D3] transition-colors">
              <span className="text-xl">🛣️</span>
              <p className="text-xs font-semibold text-[#3D2B1F] mt-1">Iconic Road Trips</p>
            </button>
          </div>
        </div>

        {/* Bloc 3: Time-Based Suggestions */}
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <h3 className="font-bold text-[#3D2B1F] mb-3 font-serif">⏱️ How do you want to travel?</h3>
          <p className="text-sm text-[#A69580] mb-4">Zéro friction. On respecte tous les profils.</p>
          
          <div className="space-y-2">
            <button className="w-full p-4 bg-green-50 border-2 border-green-200 rounded-xl text-left hover:bg-green-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟢</span>
                <div>
                  <p className="font-semibold text-[#3D2B1F]">No plan yet</p>
                  <p className="text-xs text-[#A69580]">We&apos;ll guide you day by day.</p>
                </div>
              </div>
            </button>
            <button className="w-full p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-left hover:bg-yellow-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟡</span>
                <div>
                  <p className="font-semibold text-[#3D2B1F]">Rough idea</p>
                  <p className="text-xs text-[#A69580]">We&apos;ll shape it together.</p>
                </div>
              </div>
            </button>
            <button className="w-full p-4 bg-blue-50 border-2 border-blue-200 rounded-xl text-left hover:bg-blue-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔵</span>
                <div>
                  <p className="font-semibold text-[#3D2B1F]">Fixed plan</p>
                  <p className="text-xs text-[#A69580]">We&apos;ll optimise it.</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Bloc 4: What We Handle */}
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <h3 className="font-bold text-[#3D2B1F] mb-3 font-serif">🤝 What We Handle (vs. You)</h3>
          <p className="text-sm text-[#A69580] mb-4">On vend la sécurité, sans enlever la liberté.</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-[#5D7A3A] mb-2 text-sm">✓ We handle:</p>
              <ul className="text-xs text-[#A69580] space-y-1">
                <li>• Tested places</li>
                <li>• Realistic driving times</li>
                <li>• Van-friendly stops</li>
                <li>• Local partners</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#E8A43A] mb-2 text-sm">★ You decide:</p>
              <ul className="text-xs text-[#A69580] space-y-1">
                <li>• When to stop</li>
                <li>• How long to stay</li>
                <li>• What to skip</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="text-center py-4">
          <p className="text-sm italic text-[#A69580]">
            &quot;No fixed itinerary. No pressure.<br/>
            Your journey will take shape once you&apos;re on the road.&quot;
          </p>
        </div>

        {/* CTA */}
        <Link href="/journey" className="block w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F5C45A] via-[#E8A43A] to-[#CD6A32] text-center">
          🚐 Voir mon itinéraire
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