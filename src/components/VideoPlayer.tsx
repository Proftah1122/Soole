import React from 'react';

export const VideoPlayer = () => {
  return (
    <div className="relative w-full aspect-video max-w-lg mx-auto">
      <video
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/df7a0vgug/video/upload/v1734860556/19627-304735769_small_dv6pbl.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 rounded-lg"></div>
    </div>
  );
};