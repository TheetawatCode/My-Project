// src/components/layout/NavBar.tsx

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full px-6 py-4 z-50 transition-all duration-300 ${scrolling ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <a href="#"> Spotify </a>
        </div>
        <ul className="flex space-x-6 text-white">
          <li><a href="#" className="hover:text-spotifyGreen">Premium</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">Help</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">Download</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">|</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">Log In</a></li>


          <li><a href="#" className="hover:text-spotifyGreen">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
