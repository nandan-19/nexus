"use client"
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cpu.svg" alt="Multi-LLM" className="w-10 h-10 text-blue-600" />
    ),
    title: 'Multi-LLM Support',
    desc: 'Switch between open-source and commercial LLMs for privacy, cost, or power.'
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/code.svg" alt="Editor" className="w-10 h-10 text-blue-600" />
    ),
    title: 'Editor Integration',
    desc: 'Works seamlessly with VSCode, Neovim, and your terminal workflow.'
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/database.svg" alt="Context" className="w-10 h-10 text-blue-600" />
    ),
    title: 'Model Context Protocol',
    desc: 'Persistent, deep context for more relevant and intelligent AI responses.'
  },
];

const chartUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

const FeatureShowcase = () => (
  <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-extrabold mb-10 text-blue-900 drop-shadow-lg"
    >
      Powerful Features
    </motion.h2>
    <div className="flex flex-wrap gap-10 justify-center">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.7, type: 'spring' }}
          whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18)' }}
          className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80 flex flex-col items-center border border-blue-100 transition-all cursor-pointer hover:bg-white/80"
        >
          <div className="mb-4">{f.icon}</div>
          <h3 className="font-semibold mb-2 text-xl text-blue-900">{f.title}</h3>
          <p className="text-blue-800 text-center text-base">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeatureShowcase; 