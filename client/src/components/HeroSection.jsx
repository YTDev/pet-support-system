import React from "react";
import ImageCardSwiper from "./ImageCardSwiper";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <div>
      <div
      className="flex justify-between items-center flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 
    lg:px-8 lg:py-24 py-4 sm:py-20 overflow-hidden gap-16 relative"
    >
      <HeroContent />
      <ImageCardSwiper />
    </div>
    
    
    </div>
    
    
  );
}

export default HeroSection;
