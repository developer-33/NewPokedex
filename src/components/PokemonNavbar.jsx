import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const PokemonNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
              alt="Pokeball"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold tracking-wide">Trainer's Hub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-300 transition">Home</a>
            <a href="/pokedex" className="hover:text-yellow-300 transition">Pokédex</a>
            <a href="/battles" className="hover:text-yellow-300 transition">Battles</a>
            <a href="/shop" className="hover:text-yellow-300 transition">Shop</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-600 flex flex-col text-center space-y-4 py-4">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/pokedex" className="hover:text-yellow-300">Pokédex</a>
          <a href="/battles" className="hover:text-yellow-300">Battles</a>
          <a href="/shop" className="hover:text-yellow-300">Shop</a>
        </div>
      )}
    </nav>
  );
};

export default PokemonNavbar;

