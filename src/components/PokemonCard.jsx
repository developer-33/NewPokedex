import { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => setPokemonData(response.data))
      .catch(error => console.error(error));
  }, [pokemon.url]);

  if (!pokemonData) return null; // Avoid rendering if data isn't ready

  return (
    <div>
      {/* Pokémon Card */}
      <div className="relative bg-gray-800 rounded-xl shadow-lg p-5 text-center hover:scale-105 transition-transform duration-300">
        {/* Pokémon Image */}
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24"
        />

        {/* Pokémon Name & ID */}
        <h2 className="text-lg font-bold mt-10 capitalize text-white">
          #{String(pokemonData.id).padStart(3, "0")} {pokemon.name}
        </h2>

        {/* Pokémon Type Badges */}
        <div className="flex justify-center gap-2 mt-2">
          {pokemonData.types.map((type, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs rounded-full bg-${type.type.name}-500 text-white capitalize`}
            >
              {type.type.name}
            </span>
          ))}
        </div>

        {/* Weight & Height */}
        <div className="flex justify-between mt-3 text-xs text-gray-400">
          <p>⚖ {pokemonData.weight / 10} kg</p>
          <p>📏 {pokemonData.height / 10} m</p>
        </div>

        {/* More Details Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 w-full  hover:bg-yellow-400 py-2 rounded-lg text-sm font-semibold"
        >
          ⚡ More Details
        </button>
      </div>

      {/* Pokémon Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 animate-fade-in">
          <div className="bg-gray-900 text-white p-6 rounded-xl max-w-md w-full shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            {/* Pokémon Name */}
            <h2 className="text-3xl font-bold capitalize text-center mb-4">
              {pokemonData.name}
            </h2>

            {/* Pokémon Image */}
            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={pokemonData.name}
              className="mx-auto w-40 rounded-lg border-4 border-yellow-400"
            />

            {/* Basic Info */}
            <div className="mt-4 text-center">
              <p><span className="font-semibold">Height:</span> {pokemonData.height / 10} m</p>
              <p><span className="font-semibold">Weight:</span> {pokemonData.weight / 10} kg</p>
              <p><span className="font-semibold">Base XP:</span> {pokemonData.base_experience}</p>
            </div>

            {/* Stats */}
            <h3 className="mt-4 font-semibold text-center">Stats:</h3>
            <ul className="text-sm space-y-1">
              {pokemonData.stats.map((stat, index) => (
                <li key={index} className="flex justify-between">
                  <span className="capitalize">{stat.stat.name}</span>
                  <span className="font-semibold">{stat.base_stat}</span>
                </li>
              ))}
            </ul>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg w-full font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
