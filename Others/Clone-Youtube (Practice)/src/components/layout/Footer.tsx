// src/components/layout/Footer.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <FaFacebook size={24} className="hover:text-gray-500" />
        <FaTwitter size={24} className="hover:text-gray-500" />
        <FaInstagram size={24} className="hover:text-gray-500" />
      </div>
      <p>&copy; 2024 <a href="#" className="hover:underline hover:text-red-500 ">YouTube</a>. All rights reserved. Powered by YouTube. </p>
    </footer>
  );
};

export default Footer;
