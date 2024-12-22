// src/components/sections/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-center text-white px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Music for Everyone</h1>
      <p className="text-lg md:text-2xl mb-6">Listen to your favorite tracks anytime, anywhere.</p>
      <button className="px-6 py-3 bg-green-500 text-black rounded-full hover:bg-green-400 transition-all duration-300">
        Get Spotify Free
      </button>
    </section>
  );
};

export default HeroSection;
