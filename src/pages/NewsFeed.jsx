import React, { useState } from 'react';
import { examplePosts } from '../exampleData/examplePosts';
import {Link} from "react-router-dom"
const NewsFeed = () => {
  const [posts] = useState(examplePosts);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Fixed Header */}
      <header className="bg-white shadow fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Fakebook</div>
          <nav className="space-x-4">
  <Link to="/newsfeed">
    <button className="text-gray-600 hover:text-blue-600">News Feed</button>
  </Link>
  <Link to="/profile">
    <button className="text-gray-600 hover:text-blue-600">Profile</button>
  </Link>
  <Link to="/battle">
    <button className="text-gray-600 hover:text-blue-600">Battle</button>
  </Link>
  <Link to="/pokedex">
    <button className="text-gray-600 hover:text-blue-600">Pokedex</button>
  </Link>
</nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* (Optional) Left Sidebar */}
          <aside className="hidden md:block md:w-1/4">
            {/* You can add shortcuts or groups here */}
          </aside>

          {/* Center Feed */}
          <main className="md:w-1/2 flex flex-col gap-4">
            {/* Create Post Card */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/ash.png"
                  alt="Your profile"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="w-full py-2 px-4 border rounded-full focus:outline-none"
                />
              </div>
              <div className="mt-3 flex justify-around border-t pt-2 text-blue-500">
                <button>Photo/Video</button>
                <button>Tag Friends</button>
                <button>Check In</button>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                {/* Post Header */}
                <div className="flex items-center space-x-3">
                  <img
                    src={post.pokemonImage}
                    alt={post.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{post.username}</h4>
                    <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="mt-3">
                  <p>{post.text}</p>
                </div>

                {/* Post Footer */}
                <div className="mt-3 border-t pt-2 flex justify-around text-gray-600">
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>👍</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>🔗</span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden md:block md:w-1/4 space-y-4">
            {/* Trending Pokémon */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Trending Pokémon</h4>
              <ul className="space-y-2">
                {['Pikachu', 'Charizard', 'Bulbasaur'].map((pokemon, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <img
                      src={`/images/${pokemon.toLowerCase()}.png`}
                      alt={pokemon}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{pokemon}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Friends Section */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2">Your Friends</h4>
              <ul className="space-y-2">
                {['Ash', 'Misty', 'Brock'].map((friend, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <img
                      src={`/images/${friend.toLowerCase()}.png`}
                      alt={friend}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{friend}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
