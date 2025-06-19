"use client"
import React from 'react';

const bgUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // blue/tech themed

const ParallaxSection = () => {
  return (
    <div
      className="relative w-full h-[320px] flex items-center justify-center overflow-hidden rounded-2xl my-8 shadow-2xl bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-blue-200/30 z-1" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-xl bg-blue-900/40 px-10 py-4 rounded-2xl shadow-2xl border-2 border-white/20">
          Nexus AI Insights
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow">10,000+</span>
            <span className="text-white text-lg mt-1">Developers Helped</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-green-300 drop-shadow">1M+</span>
            <span className="text-white text-lg mt-1">Hours Saved</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-200 drop-shadow">99.9%</span>
            <span className="text-white text-lg mt-1">Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection; 