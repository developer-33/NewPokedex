import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => { // 🔄 Removed prop here
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemon = pokemonList.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < pokemonList.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => setPokemonList(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-5">
      <h1 className="text-3xl font-bold mb-4">Pokédex</h1>

      <input
        type="text"
        placeholder="Search Pokémon..."
        className="w-full p-2 mb-4 text-black"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {currentPokemon
          .filter(pokemon => pokemon.name.includes(search))
          .map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} index={index} />
          ))}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        
        <span className="text-lg px-4 py-2 bg-gray-900 rounded-lg">
          Page {currentPage}
        </span>

        <button 
          onClick={nextPage} 
          disabled={indexOfLastItem >= pokemonList.length}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
