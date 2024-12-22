// src/pages/NotFound.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8">
        Looks like you've hit a wrong note. Let's get you back on track!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-lg hover:bg-green-400 transition"
      >
        Go to Home
      </Link>
      {/* <div className="mt-10">
        <img
          src="https://open.scdn.co/cdn/images/error/robot.49fbeb97.svg"
          alt="Spotify Robot"
          className="w-96 h-auto"
        />
      </div> */}
    </div>
  );
};

export default NotFound;
