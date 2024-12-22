// src/components/sections/FeaturedSection.tsx

import React from 'react';

const featuredItems = [
  { title: 'Top Hits', description: 'Top hit songs of the week.', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Rock Classics', description: 'The best of classic rock music.', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Pop Essentials', description: 'Latest and greatest pop hits.', imageUrl: 'https://via.placeholder.com/250x250' },
];

const features = [
  { icon: "🎵", title: "Unlimited Music", description: "Stream millions of songs anytime." },
  { icon: "📱", title: "Mobile Access", description: "Enjoy music on all your devices." },
  { icon: "🌍", title: "Worldwide", description: "Listen anywhere, anytime." },
];

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Spotify?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Playlists & Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <div key={index} className="text-center bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
