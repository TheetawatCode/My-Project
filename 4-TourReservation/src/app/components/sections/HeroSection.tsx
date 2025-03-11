import React from 'react';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen bg-center bg-cover relative bg-[url(https://images.unsplash.com/photo-1568607689150-17e625c1586e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <div className="flex flex-col items-center justify-center h-full px-4 text-center bg-black bg-opacity-50">
        <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">Experience the Magic of the Aurora</h1>
        <p className="mb-8 text-lg text-white md:text-xl">
          Discover the beauty of the Northern Lights in the most extraordinary locations, 
          with luxury accommodations and unforgettable activities.
        </p>
        <div className="flex space-x-4">
          <Link href="/contact">
            <button className="px-8 py-3 text-md font-semibold text-black transition duration-300 bg-white rounded-md hover:bg-gray-200">
              Book Now
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-3 text-md font-semibold text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
