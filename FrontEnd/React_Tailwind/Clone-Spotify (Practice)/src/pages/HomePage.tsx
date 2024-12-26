// src/pages/HomePage.tsx

import React from "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import AlbumSection from "../components/sections/AlbumSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <AlbumSection />
    </div>
  );
};

export default HomePage;