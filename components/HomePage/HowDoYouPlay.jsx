// components/HowDoYouPlay.js
import React from 'react';

const HowDoYouPlay = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-10">
        <video
          className="rounded-lg shadow-md"
          controls
          autoPlay
          loop
          muted
        >
          <source
            src="/demo.mp4" // Video file located in the 'public' folder
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-center">
          How Do You Play?
        </h1>
      </div>
    </div>
  );
};

export default HowDoYouPlay;
