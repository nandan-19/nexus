"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopupModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PopupModal = ({ open, setOpen }: PopupModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center max-w-md w-full mx-4"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-800">🎉 Limited Time Offer!</h3>
            <p className="mb-6 text-blue-900 text-center">Sign up for Nexus AI today and get <span className="font-bold text-blue-700">30% off</span> your first 3 months. Experience the future of AI-powered development!</p>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal; 