/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  psychic: "bg-pink-500",
  ice: "bg-cyan-400",
  dragon: "bg-indigo-500",
  dark: "bg-gray-700",
  fairy: "bg-pink-300",
  normal: "bg-gray-400",
  fighting: "bg-orange-600",
  flying: "bg-sky-400",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  rock: "bg-yellow-800",
  bug: "bg-lime-500",
  ghost: "bg-violet-700",
  steel: "bg-gray-500"
};

const PokemonCard = ({ pokemon, onSelectPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showShiny, setShowShiny] = useState(false);
  const [evolutionData, setEvolutionData] = useState([]);
  const [generation, setGeneration] = useState("");
  const [catchRate, setCatchRate] = useState(null);
  const [pokedexEntry, setPokedexEntry] = useState("");


  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => {
        setPokemonData(response.data);
        fetchEvolutionChain(response.data.species.url);
      })
      .catch(error => console.error(error));
  }, [pokemon.url]);
  const fetchGeneration = async () => {
    try {
      const speciesResponse = await axios.get(pokemonData.species.url);
      const generation = speciesResponse.data.generation.name.replace("-", " ");
      setGeneration(generation);
    } catch (error) {
      console.error("Error fetching generation", error);
    }
  };
  useEffect(() => { if (pokemonData) fetchGeneration(); }, [pokemonData]);
  const fetchPokedexEntry = async () => {
    try {
      const speciesResponse = await axios.get(pokemonData.species.url);
      const entry = speciesResponse.data.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
      setPokedexEntry(entry ? entry.flavor_text.replace("\f", " ") : "No data available.");
    } catch (error) {
      console.error("Error fetching Pokédex entry", error);
    }
  };
  useEffect(() => { if (pokemonData) fetchPokedexEntry(); }, [pokemonData]);


 

  const fetchCatchRate = async () => {
    try {
      const speciesResponse = await axios.get(pokemonData.species.url);
      setCatchRate(speciesResponse.data.capture_rate);
    } catch (error) {
      console.error("Error fetching catch rate", error);
    }
  };
  useEffect(() => { if (pokemonData) fetchCatchRate(); }, [pokemonData]);



  const fetchEvolutionChain = async (speciesUrl) => {
    try {
      const speciesResponse = await axios.get(speciesUrl);
      const evolutionResponse = await axios.get(speciesResponse.data.evolution_chain.url);
      const evolutionChain = [];
      let currentStage = evolutionResponse.data.chain;
      while (currentStage) {
        evolutionChain.push({
          name: currentStage.species.name,
          id: currentStage.species.url.split("/").slice(-2, -1)[0]
        });
        currentStage = currentStage.evolves_to[0];
      }
      setEvolutionData(evolutionChain);
    } catch (error) {
      console.error("Error fetching evolution chain", error);
    }
  };

  if (!pokemonData) return null;

  

  return (
    <div>
      <div
        className={`relative ${typeColors[pokemonData.types[0].type.name]} border border-white/30 shadow-xl rounded-xl p-5 text-center cursor-pointer hover:scale-110 transform transition-transform duration-300 hover:rotate-2`}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 drop-shadow-lg transition-all duration-300 hover:scale-110"
        />
        <h2 className="text-lg font-bold mt-12 capitalize text-white">
          #{String(pokemonData.id).padStart(3, "0")} {pokemon.name}
        </h2>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
          <div className="relative w-[90vw] max-w-[950px] h-[90vh] bg-gradient-to-b from-white/20 to-white/5 rounded-3xl border-[10px] border-yellow-500 shadow-2xl p-4 flex flex-col">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-lg hover:bg-gray-500 transition-all duration-300 hover:scale-110">✕</button>
            <div className="flex flex-row w-full h-full">
              <div className="w-1/2 flex flex-col items-center justify-center p-3">
                <img
                  src={showShiny ? pokemonData.sprites.other["official-artwork"].front_shiny : pokemonData.sprites.other["official-artwork"].front_default}
                  alt={pokemonData.name}
                  className="w-[480px] h-[480px] object-contain border-4 border-gray-600 rounded-lg bg-gradient-to-b from-white/20 to-white/5 transition-all duration-300 hover:scale-105"
                />
                <div className="flex gap-2 mt-2">
  {pokemonData.types.map((type) => (
    <span key={type.type.name} className={`px-3 py-1 rounded-full text-white font-bold ${typeColors[type.type.name]}`}>
      {type.type.name.toUpperCase()}
    </span>
  ))}
</div>
<div className="mt-3 text-center">
  <h3 className="text-yellow-400 text-lg font-bold">Pokédex Entry</h3>
  <p className="text-white text-lg italic">{pokedexEntry}</p>
</div>
<audio id="pokemon-cry" src={`https://play.pokemonshowdown.com/audio/cries/${pokemonData.name.toLowerCase()}.mp3`} />
<button
  onClick={() => document.getElementById("pokemon-cry").play()}
  className="mt-3 px-5 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:scale-105"
>
  Play Cry 🔊
</button>


                <button onClick={() => setShowShiny(!showShiny)} className="mt-2 px-5 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md transition-all duration-300 hover:scale-105">
                  {showShiny ? "Normal" : "Shiny"}
                </button>
              </div>
              <div className="w-1/2 bg-gradient-to-b from-white/20 to-white/5 rounded-lg p-3 flex flex-col border-4 border-black shadow-lg">
                <h3 className="text-yellow-400 text-xl font-bold text-center border-b-2 border-yellow-400 pb-1">Stats</h3>
                {pokemonData.stats.map(stat => (
                  <div key={stat.stat.name} className="flex items-center justify-between mt-1 border-b border-gray-600 pb-1">
                    <span className="text-gray-300 font-semibold">{stat.stat.name.toUpperCase()}</span>
                    <div className="w-32 bg-gray-600 h-4 rounded-full overflow-hidden border border-white">
                      <div className="bg-red-500 h-full" style={{ width: `${stat.base_stat}%` }}></div>
                    </div>
                    <span className="ml-2 text-white font-bold">{stat.base_stat}</span>
                  </div>
                ))}
              
                <div className="mt-3 text-center">
  <h3 className="text-yellow-400 text-lg font-bold">Abilities</h3>
  {pokemonData.abilities.map((ability) => (
    <p key={ability.ability.name} className="text-white capitalize">
      {ability.ability.name.replace("-", " ")}
    </p>
  ))}
</div>
                <div className="mt-3">
  <h3 className="text-yellow-400 text-lg font-bold text-center">Size</h3>
  <p className="text-white text-center">Height: {pokemonData.height / 10}m</p>
  <p className="text-white text-center">Weight: {pokemonData.weight / 10}kg</p>
</div>
<div className="mt-3 text-center">
  <h3 className="text-yellow-400 text-lg font-bold">Pokédex ID</h3>
  <p className="text-white font-semibold">#{pokemonData.id}</p>
</div>
                <div className="mt-3 text-center">
  <h3 className="text-yellow-400 text-lg font-bold">Generation</h3>
  <p className="text-white font-semibold">{generation}</p>
</div>
<div className="mt-3 text-center">
  <h3 className="text-yellow-400 text-lg font-bold">Catch Rate</h3>
  <p className="text-white font-semibold">{catchRate}</p>
</div>

  <h3 className="mt-4 text-center text-xl font-bold border-t-2 border-yellow-400 pt-2">Evolution Chain</h3>
                <div className="flex justify-center gap-4 mt-2">
                  {evolutionData.map((evo, i) => (
                    <button key={i} onClick={() => onSelectPokemon(evo.id)} className="text-center hover:scale-110 transition-transform">
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evo.id}.png`}
                        alt={evo.name}
                        className="w-40 mx-auto rounded-full border-4 border-yellow-500 shadow-lg"
                      />
                      <p className="capitalize text-sm mt-1 text-white font-semibold">{evo.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
