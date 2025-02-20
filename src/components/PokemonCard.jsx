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

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);
  const [evolutionData, setEvolutionData] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => {
        setPokemonData(response.data);
        return axios.get(response.data.species.url);
      })
      .then(speciesRes => {
        setSpeciesData(speciesRes.data);
        return axios.get(speciesRes.data.evolution_chain.url);
      })
      .then(evoRes => parseEvolutionChain(evoRes.data))
      .catch(error => console.error(error));
  }, [pokemon.url]);

  const parseEvolutionChain = (evolution) => {
    let evoChain = [];
    let evoData = evolution.chain;

    do {
      evoChain.push({
        name: evoData.species.name,
        url: evoData.species.url.replace("-species", "")
      });
      evoData = evoData.evolves_to[0];
    } while (evoData && evoData.hasOwnProperty("evolves_to"));

    setEvolutionData(evoChain);
  };

  useEffect(() => {
    if (pokemonData) {
      const promises = pokemonData.types.map(type =>
        axios.get(`https://pokeapi.co/api/v2/type/${type.type.name}`)
      );

      Promise.all(promises)
        .then(responses => {
          const doubleDamage = responses.flatMap(res =>
            res.data.damage_relations.double_damage_from.map(t => t.name)
          );
          setWeaknesses([...new Set(doubleDamage)]);
        })
        .catch(error => console.error(error));
    }
  }, [pokemonData]);

  if (!pokemonData) return null;

  return (
    <div>
      {/* Card */}
      <div
        className={`relative bg-gradient-to-b ${typeColors[pokemonData.types[0].type.name]} backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-5 text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 drop-shadow-lg"
        />

        <h2 className="text-lg font-bold mt-10 capitalize text-white">
          #{String(pokemonData.id).padStart(3, "0")} {pokemon.name}
        </h2>

        <div className="flex justify-center gap-2 mt-2">
          {pokemonData.types.map((type, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs rounded-full text-white capitalize ${typeColors[type.type.name]}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold capitalize text-center mb-4">
              {pokemonData.name}
            </h2>

            <img
              src={pokemonData.sprites.other["official-artwork"].front_default}
              alt={pokemonData.name}
              className="mx-auto w-40 rounded-lg border-4 border-yellow-400 shadow-lg"
            />

            <div className="mt-4 text-center">
              <p><strong>Height:</strong> {pokemonData.height / 10} m</p>
              <p><strong>Weight:</strong> {pokemonData.weight / 10} kg</p>
              <p><strong>Base XP:</strong> {pokemonData.base_experience}</p>
              <p><strong>Habitat:</strong> {speciesData?.habitat?.name || "Unknown"}</p>
              <p><strong>Growth Rate:</strong> {speciesData?.growth_rate?.name}</p>
              <p><strong>Shape:</strong> {speciesData?.shape?.name}</p>
            </div>

            <h3 className="mt-4 text-center font-bold">Weaknesses:</h3>
            <div className="flex justify-center gap-2 flex-wrap mt-2">
              {weaknesses.map((weak, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 text-xs rounded-full text-white capitalize ${typeColors[weak]}`}
                >
                  {weak}
                </span>
              ))}
            </div>

            <h3 className="mt-4 text-center font-bold">Evolution Chain:</h3>
            <div className="flex justify-center gap-4 mt-2">
              {evolutionData.map((evo, i) => (
                <div key={i} className="text-center">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evo.url.split("/").slice(-2, -1)[0]}.png`}
                    alt={evo.name}
                    className="w-16 mx-auto rounded-full border-2 border-gray-600"
                  />
                  <p className="capitalize text-sm mt-1">{evo.name}</p>
                </div>
              ))}
            </div>

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
