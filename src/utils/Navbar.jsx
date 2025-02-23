import { useState } from "react";
import { FaChevronDown, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
    <div className="md:hidden z-1">
       <Sidebar />    
    </div>
 
    <nav className="bg-gradient-to-r z-0 from-white/20 to-white/5 backdrop:blur-lg   text-red-700 px-6 py-3 flex justify-between items-center shadow-lg border-b-4 border-yellow-400">
    
      <div className="flex items-center gap-2">
        <MdCatchingPokemon className="text-3xl text-yellow-300" />
        <h1 className="text-xl font-bold tracking-wide">PokéNet</h1>
      </div>

      {/* Center - Navigation Links */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li className="hover:text-yellow-300 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-300 transition">
          <Link to="/pokedex">Pokédex</Link>
        </li>
        <li className="hover:text-yellow-300 transition">
          <Link to="/battle">Battle</Link>
        </li>
        <li className="hover:text-yellow-300 transition">
          <Link to="/community">Community</Link>
        </li>
      </ul>

      {/* Right Side - Profile Section */}
      <div className="relative">
        <button
          className="flex items-center gap-2 bg-yellow-300 text-red-700 px-3 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaUser className="text-lg" />
          <span>Trainer</span>
          <FaChevronDown />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 shadow-lg rounded-lg overflow-hidden">
            <Link
              to="/profile"
              className=" px-4 py-2 hover:bg-gray-200 flex items-center gap-2"
            >
              <FaUser /> Profile
            </Link>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
   
    </nav>
    </div>
  );
};

export default TopNav;
