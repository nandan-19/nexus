"use client"
import React from 'react';
import { motion } from 'framer-motion';

const bgShapes = [
  { className: 'absolute top-10 left-10 w-24 h-24 bg-blue-400 opacity-30 rounded-full blur-2xl animate-pulse', style: {} },
  { className: 'absolute bottom-10 right-20 w-32 h-32 bg-blue-600 opacity-20 rounded-full blur-3xl animate-ping', style: {} },
  { className: 'absolute top-1/2 left-1/2 w-16 h-16 bg-blue-300 opacity-40 rounded-full blur-xl animate-bounce', style: { transform: 'translate(-50%, -50%)' } },
];

const HeroSection = () => (
  <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-600 text-white text-center overflow-hidden">
    {/* Animated Background Shapes */}
    {bgShapes.map((shape, i) => (
      <div key={i} className={shape.className} style={shape.style}></div>
    ))}
    {/* Animated Headline */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    >
      Supercharge your coding with an AI agent that lives in your terminal
    </motion.h1>
    {/* AI-insights Badge */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: [1, 1.1, 1], opacity: 1 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
      className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 border border-white/30 text-lg font-semibold text-yellow-300 shadow-lg backdrop-blur-sm"
    >
      <span className="text-xl">✨</span> Now with AI-insights
    </motion.div>
    {/* Subheadline */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-8 text-lg md:text-xl text-white/90"
    >
      Nexus AI is your CLI-based, context-aware AI agent for developers. <br className="hidden md:block" /> Seamlessly integrates with VSCode, Neovim, and your terminal.
    </motion.p>
    {/* Animated CTA Button */}
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition text-lg md:text-xl"
    >
      Start 14-day free trial
    </motion.button>
  </section>
);

export default HeroSection; 