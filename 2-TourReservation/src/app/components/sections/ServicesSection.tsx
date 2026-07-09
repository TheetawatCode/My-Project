import React from 'react';

const servicesData = [
  {
    title: 'THE NORTHERN LIGHTS',
    description: 'Chase the magical Aurora Borealis with expert guides for an unforgettable night.',
    imageUrl: 'https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'TROMSO TOURS',
    description: 'Discover Tromsø, the Arctic capital, with its stunning landscapes and rich culture.',
    imageUrl: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'CROSS COUNTRY SKIING',
    description: 'Glide through pristine snow on a scenic cross-country skiing adventure, perfect for all levels.',
    imageUrl: 'https://beyondarctic.com/photos/aurora-skiing-adventure-wilderness_large.jpg'
  },
  {
    title: 'DOG SLEDS',
    description: 'Experience the thrill of dog sledding with huskies through breathtaking Arctic landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          {servicesData.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                <div className="flex flex-col p-8 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 flex-grow lg:text-md">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
