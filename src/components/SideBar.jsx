import { useState } from 'react';

const Sidebar = (toggleDarkMode) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div className={`fixed inset-20 bg-red-800 bg-opacity-0 z-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <div
        className={`fixed top-0 left-0   z-1  h-full w-64 bg-red-700   text-gray-600 dark:text-red-700 transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl">Sidebar</h2>
          <button onClick={toggleSidebar} className="text-white">
            X
          </button>
        </div>
        <ul className="space-y-4 p-4">
          <li><a href="/" className="block p-2 hover:bg-blue-700">Home</a></li>
          <li><a href="/pokedex" className="block p-2 hover:bg-blue-700">Pokedex</a></li>
          <li><a href="/profile" className="block p-2 hover:bg-blue-700">Services</a></li>
          <li><a href="#" className="block p-2 hover:bg-blue-700">Contact</a></li>
        </ul>
      </div>

      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 text-white bg-blue-900 p-2 rounded"
      >
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
    </div>
  );
};

export default Sidebar;




// const Sidebar = ({ isDarkMode }) => {
//   return (
//     <div className="w-1/4 bg-gray-800 p-4">
//       <ul className="space-y-4">
//         <li><a href="#" className="text-white">Home</a></li>
//         <li><a href="#" className="text-white">Friends</a></li>
//         <li><a href="#" className="text-white">Groups</a></li>
//         <li><a href="#" className="text-white">Marketplace</a></li>
//         <li><a href="#" className="text-white">Watch</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
