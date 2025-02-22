import { useState } from "react";
import { FaCamera, FaEdit, FaCar, FaUsers, FaTrophy } from "react-icons/fa";

export default function Profile() {
  const [profileImage, setProfileImage] = useState("/default-profile.png");
  const [coverImage, setCoverImage] = useState("/default-cover.jpg");

  return (
    <div className="flex justify-end p-6">
      <div className="w-80 bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden">
        {/* Cover Photo */}
        <div className="relative">
          <img src={coverImage} alt="Cover" className="w-full h-32 object-cover" />
          <button className="absolute bottom-2 right-2 bg-black bg-opacity-60 p-2 rounded-full hover:bg-opacity-80 transition">
            <FaCamera size={18} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="p-4 flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative">
            <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full border-4 border-yellow-500" />
            <button className="absolute bottom-1 right-1 bg-black bg-opacity-60 p-1 rounded-full hover:bg-opacity-80 transition">
              <FaCamera size={14} />
            </button>
          </div>

          <h2 className="text-lg font-semibold mt-2">Username</h2>
          <p className="text-gray-400 text-sm">@username</p>
          <p className="text-center mt-2 text-gray-300 text-sm">Car enthusiast & drift king champion 🏆</p>

          {/* Stats */}
          <div className="mt-3 flex space-x-6">
            <div className="text-center">
              <p className="text-lg font-bold">12K</p>
              <p className="text-gray-400 text-xs">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">235</p>
              <p className="text-gray-400 text-xs">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">7</p>
              <p className="text-gray-400 text-xs">Drift Kings</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex space-x-3">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 transition">
              <FaEdit className="mr-2" /> Edit
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">Message</button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-t border-gray-700 mt-4">
          <div className="flex justify-around py-2 text-gray-400 text-sm">
            <button className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <FaCar /> <span>Garage</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <FaTrophy /> <span>Achievements</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-yellow-500 transition">
              <FaUsers /> <span>Following</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
