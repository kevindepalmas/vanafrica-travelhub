export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6E8] to-[#F5E6D3] flex flex-col items-center justify-center p-6">
      
      {/* Logo */}
      <div className="text-6xl mb-4">🚐</div>
      
      {/* Titre */}
      <h1 className="text-3xl font-bold text-[#3D2B1F] mb-2">
        Van&apos;Africa
      </h1>
      
      {/* Sous-titre */}
      <p className="text-[#8B4513] mb-8">
        African Van Life
      </p>
      
      {/* Message */}
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm text-center">
        <p className="text-[#E8A43A] font-semibold text-xl mb-2">
          🎉 Travel Hub
        </p>
        <p className="text-[#3D2B1F]">
          Votre compagnon de voyage sur la Garden Route
        </p>
      </div>
      
      {/* Footer */}
      <p className="mt-8 text-sm text-[#A69580]">
        Coming soon — Octobre 2026
      </p>
      
    </div>
  );
}