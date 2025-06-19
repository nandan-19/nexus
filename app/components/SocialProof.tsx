"use client"
import React from 'react';
import { motion } from 'framer-motion';

const reviewData = [
  { label: 'Capterra', icon: 'https://cdn.worldvectorlogo.com/logos/capterra-1.svg', rating: 4.8 },
  { label: 'G2', icon: 'https://cdn.worldvectorlogo.com/logos/g2-crowd-1.svg', rating: 4.8 },
  { label: 'Xero', icon: 'https://cdn.worldvectorlogo.com/logos/xero-1.svg', rating: 3.50 },
  { label: 'Quickbooks', icon: 'https://cdn.worldvectorlogo.com/logos/intuit-quickbooks.svg', rating: 5.50 },
];

const customerLogos = [
  'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
  'https://cdn.worldvectorlogo.com/logos/microsoft-6.svg',
  'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
  'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg',
];

const SocialProof = () => (
  <section className="w-full py-8 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
    {/* Review Badges */}
    <div className="flex flex-wrap gap-6 justify-center items-center mb-6">
      {reviewData.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.6, type: 'spring' }}
          className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-lg rounded-full shadow border border-blue-100 text-blue-900 text-sm font-semibold"
        >
          <img src={r.icon} alt={r.label} className="h-6 w-6" />
          <span>★ {r.rating} rating on</span>
          <span className="font-bold">{r.label}</span>
        </motion.div>
      ))}
    </div>
    {/* Customer Logos */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex flex-wrap gap-8 justify-center items-center"
    >
      {customerLogos.map((logo, i) => (
        <img key={i} src={logo} alt={`Customer Logo ${i + 1}`} className="h-10 w-auto grayscale hover:grayscale-0 transition bg-white rounded-xl p-2 shadow border border-blue-100" />
      ))}
    </motion.div>
  </section>
);

export default SocialProof; 