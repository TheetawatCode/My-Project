// src/pages/HomePage.tsx

import React from "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import VideoGrid from "../components/sections/VideoGrid";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturedSection />
      <VideoGrid />
    </div>
  );
};

export default HomePage;