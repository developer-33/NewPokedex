import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Calls the search function in the parent component
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        Pokédex
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={handleSearch}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/pokdex" className="hover:text-yellow-400">
            Pokedex
        </a>
        <a href="#" className="hover:text-yellow-400">Favorites</a>
      </div>
    </nav>
  );
};

export default Navbar;
