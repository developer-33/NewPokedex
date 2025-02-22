import { useState } from "react";
import { Link } from "react-router-dom";  
import { FaHome, FaUser, FaTrophy, FaBook, FaBell, FaCog, FaBars, FaMoon, FaSun } from "react-icons/fa";
import Profile from "../profile/Profile"; // Import Profile Component

const TrainerHubHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility
  const [posts, setPosts] = useState([
    { id: 1, trainer: "Ash Ketchum", content: "Caught a shiny Charizard! 🔥", likes: 25, comments: ["Congrats!", "That's epic!"] },
    { id: 2, trainer: "Misty", content: "Water-type Pokémon are the best! 💧", likes: 15, comments: ["Totally agree!", "Lapras is my fav!"] }
  ]);
  const [newPost, setNewPost] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

  const handlePost = () => {
    if (newPost.trim() !== "") {
      const post = { id: Date.now(), trainer: "You", content: newPost, likes: 0, comments: [] };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Sidebar (Left) */}
      {/* <div className="w-16 lg:w-20 bg-red-500 text-white flex flex-col items-center justify-center space-y-6 py-4 shadow-lg border-r border-yellow-500">
      <Link to="/" className="cursor-pointer hover:text-yellow-400" title="Home">
        <FaHome size={24} />
      </Link>
      <Link to="/pokedex" className="cursor-pointer hover:text-yellow-400" title="Pokédex">
        <FaBook size={24} />
      </Link>
      <Link to="/battle-league" className="cursor-pointer hover:text-yellow-400" title="Battle League">
        <FaTrophy size={24} />
      </Link>
      <Link to="/profile" className="cursor-pointer hover:text-yellow-400" title="Profile">
        <FaUser size={24} />
      </Link>
      <Link to="/notifications" className="cursor-pointer hover:text-yellow-400" title="Notifications">
        <FaBell size={24} />
      </Link>
      <Link to="/settings" className="cursor-pointer hover:text-yellow-400" title="Settings">
        <FaCog size={24} />
      </Link>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Trainer’s Hub Feed 🧢</h1>

        {/* New Post */}
        <div className="bg-white p-4 rounded-lg shadow mb-4 dark:bg-gray-700">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your Pokémon adventures..."
            className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
          />
          <button
            onClick={handlePost}
            className="mt-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-lg"
          >
            Post
          </button>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow mb-4 dark:bg-gray-700">
            <h2 className="font-bold text-lg">{post.trainer}</h2>
            <p className="mt-1">{post.content}</p>
            <div className="flex gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
              <span>❤️ {post.likes} Likes</span>
              <span>💬 {post.comments.length} Comments</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar (Profile Component) */}
      <div className="hidden lg:block w-80 bg-gray-900 text-white p-4 shadow-lg border-l border-yellow-500">
        <Profile /> {/* Embed Profile Component Here */}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 p-4 text-white bg-gray-800 rounded-full"
      >
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </div>
  );
};

export default TrainerHubHome;
