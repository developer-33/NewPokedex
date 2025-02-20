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

const PokemonSearch = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  // Fetch all Pokémon data on page load
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000') // Adjust the limit based on your needs
      .then(response => {
        setPokemonList(response.data.results); // Storing the list of Pokémon
        setFilteredPokemon(response.data.results); // Initialize filtered list
      })
      .catch(error => console.error(error));
  }, []);

  // Filter Pokémon list based on the search query
  useEffect(() => {
    setFilteredPokemon(
      pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, pokemonList]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-400 rounded"
      />

      <div className="pokemon-list">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => console.error(error));
  }, [pokemon.url]);

  if (!pokemonData) return null;

  return (
    <div
      className={`relative bg-gradient-to-b ${typeColors[pokemonData.types[0].type.name]} backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-5 text-center`}
    >
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 drop-shadow-lg"
      />
      <h2 className="text-lg font-bold mt-10 capitalize text-white">
        #{String(pokemonData.id).padStart(3, "0")} {pokemon.name}
      </h2>
    </div>
  );
};

export default PokemonSearch;
