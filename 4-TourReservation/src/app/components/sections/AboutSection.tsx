import React from 'react';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container px-4 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <img 
                            src="https://images.unsplash.com/photo-1537136102161-ea2262437412?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="About Us" 
                            className="w-full h-auto rounded-lg shadow-lg" 
                        />
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Our Adventure</h3>
                        <p className="mb-4 text-gray-600">
                            We take you on an extraordinary journey through the Arctic, chasing the mesmerizing Northern Lights and exploring breathtaking landscapes. Our passion is to create unforgettable experiences that connect you with nature, adventure, and the magic of the North.
                        </p>
                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Our Values</h3>
                        <p className="mb-4 text-gray-600">
                            We believe in responsible tourism, sustainability, and excellence. Our team is dedicated to providing safe, immersive, and eco-friendly tours that respect nature and support local communities while delivering exceptional experiences for our guests.
                        </p>
                        <Link href="/about">
                            <button className="px-6 py-2 text-lg font-medium text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
