// src/components/sections/FeaturedSection.tsx

import React from 'react';
import { FaVideo, FaUsers, FaShareSquare } from 'react-icons/fa';

const features = [
  {
    icon: <FaVideo size={50} />,
    title: 'Millions of Videos',
    description: 'Discover an endless library of videos tailored to your interests.',
  },
  {
    icon: <FaUsers size={50} />,
    title: 'Connect with Creators',
    description: 'Follow your favorite creators and engage with their latest content.',
  },
  {
    icon: <FaShareSquare size={50} />,
    title: 'Share Your Story',
    description: 'Easily upload and share your videos with a global audience.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose YouTube?</h2>
        <p className="text-lg text-gray-600">
          Explore, connect, and share with the world’s leading video platform.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <div className="text-red-500 mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg text-lg">
          Explore More Features
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;

