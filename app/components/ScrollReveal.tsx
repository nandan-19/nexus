"use client"
import React from 'react';
import { motion } from 'framer-motion';

const blocks = [
  {
    title: 'Instant AI Suggestions',
    desc: 'Get context-aware code completions and explanations as you type in your terminal or editor.'
  },
  {
    title: 'Seamless Editor Integration',
    desc: 'Works with VSCode, Neovim, and more. No need to leave your workflow.'
  },
  {
    title: 'Persistent Project Context',
    desc: 'Nexus AI remembers your files, commands, and project state for smarter responses.'
  }
];

const ScrollReveal = () => (
  <section className="w-full py-16 bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-8">Scroll-triggered Features</h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {blocks.map((block, i) => (
        <motion.div
          key={block.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.7, type: 'spring' }}
          className="bg-white/80 p-6 rounded-xl shadow-lg w-72 flex flex-col items-center border border-blue-100"
        >
          <h3 className="font-semibold mb-2 text-blue-900 text-lg">{block.title}</h3>
          <p className="text-blue-800 text-center text-sm">{block.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ScrollReveal; 