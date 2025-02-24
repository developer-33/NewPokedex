import React from 'react';

const PokemonLanding = () => {
  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      {/* Floating Pokéballs (optional decorative elements) */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-contain bg-no-repeat opacity-50"
           style={{ backgroundImage: 'url(/images/pokeball.png)' }}>
      </div>
      <div className="absolute top-10 right-0 w-32 h-32 bg-contain bg-no-repeat opacity-30"
           style={{ backgroundImage: 'url(/images/pokeball.png)' }}>
      </div>
      <div className="absolute bottom-0 left-10 w-28 h-28 bg-contain bg-no-repeat opacity-50"
           style={{ backgroundImage: 'url(/images/pokeball.png)' }}>
      </div>

      {/* Top Navigation */}
      <nav className="bg-white shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-lg text-blue-600">Pokemeon</div>
            <div className="font-bold text-lg text-pink-500">Dizedmon</div>
          </div>
          <div className="space-x-4 text-sm">
            <button className="text-gray-600 hover:text-blue-600">Blucho claire</button>
            <button className="text-gray-600 hover:text-blue-600">OLI V2</button>
            <button className="text-gray-600 hover:text-blue-600">Share</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-8 pb-16">
        {/* "News Medie" Header */}
        <div className="flex justify-center">
          <h1 className="bg-red-500 text-white px-6 py-2 rounded-full text-2xl font-bold tracking-wide">
            NEWS MEDIE
          </h1>
        </div>

        {/* Hero / Stats Section */}
        <section className="mt-8 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Pokémon <span className="text-blue-500">0.1%</span>
          </h2>
          <h3 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mt-4">
            PHAW
          </h3>

          {/* Stat Cards Row */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {/* Example Card */}
            <div className="bg-white shadow-md rounded-lg px-6 py-4 w-40">
              <h4 className="text-lg font-bold text-gray-700">PLCHANIO</h4>
              <p className="text-sm text-gray-500">StanSo</p>
            </div>
            <div className="bg-white shadow-md rounded-lg px-6 py-4 w-40">
              <h4 className="text-lg font-bold text-gray-700">PISCSTORE</h4>
              <p className="text-sm text-gray-500">01</p>
            </div>
            <div className="bg-white shadow-md rounded-lg px-6 py-4 w-40">
              <h4 className="text-lg font-bold text-gray-700">PELETRON</h4>
              <p className="text-sm text-gray-500">FIE</p>
            </div>
          </div>
        </section>

        {/* Pokémon Grid */}
        <section className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Example Pokémon Card */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src="../../src/assets/pokeball.jpg"
                alt="Pikachu"
                className="w-16 h-16"
              />
              <h4 className="font-semibold text-gray-700 mt-2">Pikachu</h4>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src="../../src/assets/bulbasaur.jpg"
                alt="Charmander"
                className="w-16 h-16"
              />
              <h4 className="font-semibold text-gray-700 mt-2">Charmander</h4>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src="../../src/assets/Blastoise.jpg"
                alt="Squirtle"
                className="w-40 h-60"
              />
              <h4 className="font-semibold text-gray-700 mt-2">Squirtle</h4>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src="../../src/assets/Charizard.jpg"
                alt="Bulbasaur"
                className="w-16 h-16"
              />
              <h4 className="font-semibold text-gray-700 mt-2">Bulbasaur</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PokemonLanding;
