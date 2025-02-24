import { useState } from "react";
import { motion } from "framer-motion";

const NewsFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "A Wild Pikachu Appears!",
      content: "Trainers have spotted a rare Pikachu in Viridian Forest!",
      image: "/images/pikachu_news.jpg",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "New Pokémon League Tournament Announced!",
      content: "The Indigo League is hosting a new championship next month!",
      image: "/images/league_news.jpg",
      timestamp: "5 hours ago",
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-400 to-red-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Pokémon News Feed</h1>
      <div className="w-full max-w-2xl space-y-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.content}</p>
            <span className="text-gray-500 text-sm mt-2">{post.timestamp}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;