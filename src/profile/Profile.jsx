import React, { useState } from 'react';

const PokemonProfileGlass = () => {
  // Sample posts data
  const initialPosts = [
    {
      id: 1,
      username: 'Ash Ketchum',
      avatar: '../../src/assets/ash.jpg',
      timeAgo: '2 hrs',
      text: "Just caught a shiny Magikarp! Can't wait to evolve it into a Red Gyarados! #PokémonMaster",
      image: '/images/magikarp.png',
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      username: 'Misty',
      avatar: '../../src/assets/misty.jpg',
      timeAgo: '4 hrs',
      text: 'Water Pokémon forever! #TeamSquirtle',
      image: '/images/squirtle.png',
      likes: 15,
      comments: 3,
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState('');
  const [commentVisibility, setCommentVisibility] = useState({});

  // Create a new post and add it to the feed
  const handleCreatePost = () => {
    if (!newPostText.trim()) return;
    const newPost = {
      id: Date.now(),
      username: 'Ash Ketchum',
      avatar: '../../src/assets/ash.jpg',
      timeAgo: 'Just now',
      text: newPostText,
      image: null,
      likes: 0,
      comments: 0,
    };
    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  // Increase like count for a post
  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  // Toggle visibility of the comment section for a post
  const toggleComments = (postId) => {
    setCommentVisibility((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      {/* Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/pokeball.png" alt="PokéBall" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">PokeSocial</span>
          </div>
          <nav className="space-x-4 text-sm">
            <button className="text-white hover:text-blue-300 transition-colors duration-200">
              Home
            </button>
            <button className="text-white hover:text-blue-300 transition-colors duration-200">
              Messages
            </button>
            <button className="text-white hover:text-blue-300 transition-colors duration-200">
              Notifications
            </button>
          </nav>
        </div>
      </header>

      {/* Cover Section with Gradient & Wave */}
      <div className="relative h-44 md:h-56 bg-gradient-to-r from-blue-400 via-red-500 to-yellow-500">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,144C672,160,768,192,864,186.7C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Profile Card with Glassmorphism */}
      <div className="relative flex justify-center">
        <div className="-mt-14 w-full max-w-4xl px-4">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg px-6 py-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Glowing Avatar */}
            <div className="relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 blur-xl opacity-60"></div>
              </div>
              <img
                src="../../src/assets/ash.jpg"
                alt="Profile Avatar"
                className="w-28 h-28 rounded-full border-4 border-white relative"
              />
            </div>
            {/* Profile Information */}
            <div className="flex-1 text-center sm:text-left text-white">
              <h2 className="text-2xl font-bold">Ash Ketchum</h2>
              <p>Pokémon Master in Training</p>
              <div className="mt-2 flex justify-center sm:justify-start space-x-4 text-sm">
                <div>
                  <span className="font-bold">150</span> Posts
                </div>
                <div>
                  <span className="font-bold">2,000</span> Followers
                </div>
                <div>
                  <span className="font-bold">98</span> Following
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="space-x-2">
              <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200">
                Follow
              </button>
              <button className="bg-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/40 transition-colors duration-200">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Left Sidebar */}
          <aside className="hidden md:block md:w-1/4 space-y-4">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow p-4 text-white">
              <h3 className="font-semibold mb-2">Shortcuts</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-blue-300 transition-colors duration-200">
                  <a href="#!">Pokédex</a>
                </li>
                <li className="hover:text-blue-300 transition-colors duration-200">
                  <a href="#!">Pokémon League</a>
                </li>
                <li className="hover:text-blue-300 transition-colors duration-200">
                  <a href="#!">Battle Arena</a>
                </li>
              </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow p-4 text-white">
              <h3 className="font-semibold mb-2">Groups</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-blue-300 transition-colors duration-200">
                  <a href="#!">Team Instinct</a>
                </li>
                <li className="hover:text-blue-300 transition-colors duration-200">
                  <a href="#!">Team Mystic</a>
                </li>
                <li className="hover:text-blue-300 transition-colors duration-200">
                  <a href="#!">Team Valor</a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Feed */}
          <main className="w-full md:w-1/2 space-y-4 mb-8">
            {/* Create Post Card */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow p-4 text-white">
              <div className="flex space-x-3">
                <img
                  src="../../src/assets/ash.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="w-full py-2 px-4 bg-transparent border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                />
              </div>
              <div className="mt-3 flex justify-between items-center border-t border-white/30 pt-2">
                <div className="flex space-x-4 text-sm text-white">
                  <button className="hover:text-blue-300 transition-colors duration-200">
                    Photo/Video
                  </button>
                  <button className="hover:text-blue-300 transition-colors duration-200">
                    Tag Friends
                  </button>
                  <button className="hover:text-blue-300 transition-colors duration-200">
                    Check In
                  </button>
                </div>
                <button
                  onClick={handleCreatePost}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                  Post
                </button>
              </div>
            </div>

            {/* Post Cards */}
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow p-4 transition-transform duration-200 hover:scale-[1.01] text-white"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={post.avatar}
                    alt={post.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{post.username}</h4>
                    <span className="text-xs text-white/70">
                      {post.timeAgo}
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <p>{post.text}</p>
                </div>
                {post.image && (
                  <div className="mt-3">
                    <img
                      src={post.image}
                      alt="Post"
                      className="rounded-lg max-h-60 object-contain mx-auto"
                    />
                  </div>
                )}
                <div className="mt-3 border-t border-white/30 pt-2 flex justify-around text-white">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>👍</span>
                    <span>{post.likes}</span>
                  </button>
                  <button
                    onClick={() => toggleComments(post.id)}
                    className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-200">
                    <span>🔗</span>
                    <span>Share</span>
                  </button>
                </div>
                {commentVisibility[post.id] && (
                  <div className="mt-3 border-t border-white/30 pt-2">
                    <p className="text-sm text-white/70">
                      Comments coming soon...
                    </p>
                  </div>
                )}
              </div>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden md:block md:w-1/4 space-y-4">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow p-4 text-white">
              <h4 className="font-semibold mb-2">Trending Pokémon</h4>
              <ul className="space-y-3">
                {['Pikachu', 'Charizard', 'Bulbasaur'].map((pokemon) => (
                  <li
                    key={pokemon}
                    className="flex items-center space-x-3 hover:text-blue-300 transition-colors duration-200"
                  >
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
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow p-4 text-white">
              <h4 className="font-semibold mb-2">Your Friends</h4>
              <ul className="space-y-3">
                {['Brock', 'Tracey', 'Serena'].map((friend) => (
                  <li
                    key={friend}
                    className="flex items-center space-x-3 hover:text-blue-300 transition-colors duration-200"
                  >
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

export default PokemonProfileGlass;
