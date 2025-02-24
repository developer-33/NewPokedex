import { useState } from "react";
import PokemonModal from "./NewPokemon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pokedex2 = ({ pokemonList }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition"
          onClick={() => openModal(pokemon)}
        >
          <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24" />
          <h2 className="text-lg font-bold mt-2">{pokemon.name}</h2>
        </div>
      ))}

      {isModalOpen && (
        <PokemonModal isOpen={isModalOpen} onClose={closeModal} pokemon={selectedPokemon} />
      )}
    </div>
  );
};

export default Pokedex2;
