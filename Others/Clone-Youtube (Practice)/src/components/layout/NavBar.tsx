// src/components/layout/NavBar.tsx

import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">
        <a href="#" >YouTube</a>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="px-4 py-2 bg-gray-700 text-white rounded w-96" />
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Search</button>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6 text-lg justify-end">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Shorts</li>
          <li className="hover:text-red-500 cursor-pointer">Trending</li>
          <li className="hover:text-red-500 cursor-pointer">History</li>
          <li className="hover:text-red-500 cursor-pointer">Library</li>
          <li className="hover:text-red-500 cursor-pointer">Watch Later</li>
          <li className="hover:text-red-500 cursor-pointer">Subscriptions</li>


        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Login</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;