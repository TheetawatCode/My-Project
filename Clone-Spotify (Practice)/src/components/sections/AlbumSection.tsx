// src/components/sections/AlbumSection.tsx

import React from 'react';

const albums = [
  { title: 'Album 1', artist: 'Artist 1', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 2', artist: 'Artist 2', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 3', artist: 'Artist 3', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 4', artist: 'Artist 4', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 5', artist: 'Artist 5', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 6', artist: 'Artist 6', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 7', artist: 'Artist 7', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 8', artist: 'Artist 8', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 9', artist: 'Artist 9', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 10', artist: 'Artist 10', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 11', artist: 'Artist 11', imageUrl: 'https://via.placeholder.com/250x250' },
  { title: 'Album 12', artist: 'Artist 12', imageUrl: 'https://via.placeholder.com/250x250' },
];

const AlbumSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <div key={index} className="text-center bg-black p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              <img src={album.imageUrl} alt={album.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
              <p className="text-gray-400">{album.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
