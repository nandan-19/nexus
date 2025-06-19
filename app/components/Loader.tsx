"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-blue-400 blur-2xl opacity-40"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-24 h-24 rounded-full bg-blue-600 blur-xl opacity-60"
            animate={{ scale: [1, 0.8, 1.1, 1], rotate: [0, -360, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          />
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-400 shadow-2xl flex items-center justify-center border-4 border-white/30"
            animate={{ scale: [1, 1.15, 0.95, 1], rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <span className="text-2xl font-bold text-white tracking-widest drop-shadow-lg">Nexus</span>
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader; 