"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useCases = [
  {
    title: 'Automated Code Review',
    desc: 'Nexus AI reviews your code for bugs, style, and best practices in real time.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Instant Documentation',
    desc: 'Generate and update documentation for your codebase with a single command.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Smart Refactoring',
    desc: 'Get AI-powered suggestions to refactor and optimize your code instantly.',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80'
  }
];

const ShowcaseWork = () => {
  const [index, setIndex] = useState(0);
  const useCase = useCases[index];

  const paginate = (dir: number) => {
    setIndex((i) => (i + dir + useCases.length) % useCases.length);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 drop-shadow">Showcase Work</h2>
      <div className="relative w-full max-w-2xl flex flex-col items-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl min-h-[220px] w-full border border-blue-100"
            style={{ position: 'absolute' }}
          >
            <img src={useCase.img} alt={useCase.title} className="w-40 h-32 object-cover rounded-xl mb-4 md:mb-0 md:mr-8 border-2 border-blue-200 bg-white shadow-lg" />
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2 text-blue-900 text-lg">{useCase.title}</h3>
              <p className="text-blue-800 text-center md:text-left text-base">{useCase.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-4 mt-40 justify-center relative z-10">
          <button onClick={() => paginate(-1)} className="px-4 py-2 bg-blue-200 rounded-full hover:bg-blue-300 transition">&#8592;</button>
          <button onClick={() => paginate(1)} className="px-4 py-2 bg-blue-200 rounded-full hover:bg-blue-300 transition">&#8594;</button>
        </div>
        <div className="flex gap-2 mt-4">
          {useCases.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-700' : 'bg-blue-300'} transition`}
              aria-label={`Go to use case ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseWork; 