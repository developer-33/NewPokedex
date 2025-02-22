const Navbar = ({ toggleDarkMode }) => {
    return (
      <div className="flex justify-between items-center p-4 bg-red-800">
        <div className="text-2xl font-bold">Pokemon</div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="bg-gray-700 p-2 rounded">
            Toggle Dark Mode
          </button>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded bg-gray-600 text-white"
          />
        </div>
      </div>
    );
  };
  
  export default Navbar;