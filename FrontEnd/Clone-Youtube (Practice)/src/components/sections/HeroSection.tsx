// src/components/sections/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-red-500 to-gray-900 text-white text-center py-40 px-8">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-10">Discover the World on YouTube</h1>
      <p className="text-xl md:text-3xl mb-10">Watch, learn, and connect with content creators worldwide.</p>
      <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-lg rounded-full transition-transform transform hover:scale-105 shadow-lg">Get Started</button>
    </div>
  );
};

export default HeroSection;
