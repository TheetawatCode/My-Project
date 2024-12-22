// src/components/VideoGrid.tsx

import React from 'react';

const videos = Array(12).fill({
  thumbnail: "https://via.placeholder.com/300x250", // Placeholder image
  title: "Sample Video Title",
  channel: "Channel Name",
  views: "1.2M views",
  uploaded: "2 days ago",
});

const VideoGrid: React.FC = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Trending Videos</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-40 object-cover hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                10:23
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold truncate mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600 truncate">{video.channel}</p>
              <div className="text-sm text-gray-500 mt-1">
                <span>{video.views}</span> • <span>{video.uploaded}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
