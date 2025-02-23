import { useState } from "react";

const Sidebar = ({ selectedPokemon, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-72 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Pokémon Details</h2>
          <button onClick={toggleSidebar} className="text-white text-lg">✕</button>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button
            className="mt-2 w-full bg-yellow-500 text-black font-bold py-2 rounded"
            onClick={() => onSearch(searchQuery)}
          >
            Search
          </button>
        </div>

        {/* Pokémon Details */}
        {selectedPokemon && (
          <div className="p-4 text-center">
            <img
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              className="w-32 h-32 mx-auto border-4 border-yellow-500 rounded-full"
            />
            <h3 className="text-xl font-bold mt-2 capitalize">{selectedPokemon.name}</h3>
            <p className="text-gray-300">#{selectedPokemon.id}</p>
            <div className="mt-3">
              <h4 className="font-bold">Type</h4>
              <p className="capitalize">{selectedPokemon.types.join(", ")}</p>
            </div>
            <div className="mt-3">
              <h4 className="font-bold">Abilities</h4>
              <p className="capitalize">{selectedPokemon.abilities.join(", ")}</p>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 text-white bg-blue-900 px-4 py-2 rounded-lg z-30 shadow-lg hover:bg-blue-700"
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
