import {   Routes, Route } from "react-router-dom"
import Pokedex from "./pokemon/Pokedex"
import Navbar from "./utils/Navbar"
import PokemonBattle from "./pages/Battle"
import NewsFeed from "./pages/NewsFeed"
import PokemonProfileGlass from "./profile/Profile"

// import Sidebar from "./utils/SideBar"
import { useState, useEffect } from "react"
const Mainsection = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
      // Read dark mode preference from local storage
      const savedMode = localStorage.getItem('dark-mode');
      return savedMode === 'true';
    });
  
    // Effect to handle dark mode changes and persist in localStorage
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
  
      localStorage.setItem('dark-mode', isDarkMode);
    }, [isDarkMode]);
  
    // Toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode(prevMode => !prevMode);
    };
  
  return (
    <div>
    <div>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
  
    </div>
         
        <Routes> 
            <Route path="/" element={<NewsFeed isDarkMode={isDarkMode} />} />
            <Route path="/battle" element={<PokemonBattle  isDarkMode={isDarkMode} />} /> 
             <Route path="/profile" element={<PokemonProfileGlass  />} />
            
            <Route path="/pokedex" element={<Pokedex isDarkMode={isDarkMode} />} />
    

        </Routes>
    </div>
  )
}

export default Mainsection