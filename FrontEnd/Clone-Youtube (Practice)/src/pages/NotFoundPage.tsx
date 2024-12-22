// src/pages/NotFound.tsx

import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl md:text-6xl text-red-500 font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>
      <a href="/" className="text-blue-500 hover:underline">
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Go Back</button>
      </a>
    </div>
  );
};

export default NotFoundPage;
