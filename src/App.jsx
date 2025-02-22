import { useState, useEffect } from 'react';
import Mainsection from './Mainsection';
import Sidebar from './components/SideBar';
// import PokemonNavbar from './components/PokemonNavbar'; // Uncomment if needed

const App = () => {
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
    <div className="">
      {/* Passing the dark mode state and toggle function to Mainsection and Sidebar */}
      <Mainsection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;

