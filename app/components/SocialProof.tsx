"use client"
import React from 'react';
import { motion } from 'framer-motion';

const customerLogos = [
  {
    name: 'Perplexity',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Perplexity_AI_logo.svg',
  },
  {
    name: 'Supercell',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Supercell-logo.svg',
  },
  {
    name: 'Monzo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Monzo_logo.svg',
  },
  {
    name: 'Raycast',
    url: 'https://raycast.com/_next/static/media/logo.9c0e2b7e.svg',
  },
  {
    name: 'Retool',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Retool_logo.svg',
  },
  {
    name: 'Mercury',
    url: 'https://assets-global.website-files.com/5f6b7190899c3a1c1a3c7b2c/5f6b7190899c3a7e7a3c7b3a_mercury-logo.svg',
  },
];

const SocialProof = () => (
  <section className="w-full py-16 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 w-full max-w-4xl px-4">
      {customerLogos.map((logo, i) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6, type: 'spring' }}
          className="flex flex-col items-center justify-center bg-white/80 rounded-2xl shadow-lg p-6 border border-blue-100 transition-all"
        >
          <img
            src={logo.url}
            alt={logo.name + ' logo'}
            className="h-12 sm:h-14 w-auto mb-2"
            style={{ maxWidth: '160px', objectFit: 'contain' }}
            loading="lazy"
          />
          <span className="text-blue-900 text-lg font-medium mt-2" style={{letterSpacing: '0.01em'}}>{logo.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProof; 