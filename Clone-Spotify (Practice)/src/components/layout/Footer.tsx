// src/components/layout/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li><a href="#" className="hover:text-spotifyGreen">About</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">Jobs</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">Privacy</a></li>
          <li><a href="#" className="hover:text-spotifyGreen">Terms</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-spotifyGreen">Facebook</a>
          <a href="#" className="hover:text-spotifyGreen">Twitter</a>
          <a href="#" className="hover:text-spotifyGreen">Instagram</a>
        </div>
      </div>
      <p className="text-center mt-4">&copy; 2024 <a href="#" className="hover:text-spotifyGreen">Spotify</a>. All rights reserved. Powered by Spotify</p>
    </footer>
  );
};

export default Footer;
