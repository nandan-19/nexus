"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Alex',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Nexus AI transformed my workflow!'
  },
  {
    name: 'Riya',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The best CLI AI assistant for coding.'
  },
  {
    name: 'John',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'Seamless integration with my editor.'
  }
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 })
};

const Testimonials = () => {
  const [[page, dir], setPage] = useState([0, 0]);
  const testimonial = testimonials[page];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(([p]) => [(p + 1) % testimonials.length, 1]);
    }, 5000);
    return () => clearTimeout(timer);
  }, [page]);

  const paginate = (newDir: number) => {
    setPage(([p]) => [
      (p + newDir + testimonials.length) % testimonials.length,
      newDir
    ]);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-900 drop-shadow">What Our Users Say</h2>
      <div className="relative w-full max-w-xl flex flex-col items-center">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="flex flex-col items-center bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl min-h-[220px] border border-blue-100"
            style={{ position: 'absolute', width: '100%' }}
          >
            <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 border-4 border-blue-200 object-cover shadow-lg" loading="lazy" />
            <p className="text-xl text-blue-900 font-semibold mb-2 text-center">"{testimonial.quote}"</p>
            <span className="block   font-semibold text-blue-700 mb-5">- {testimonial.name}</span>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-4 mt-47 justify-center relative z-10">
          <button onClick={() => paginate(-1)} className="px-4 py-2 bg-blue-200 text-blue-900 rounded-full hover:bg-blue-300 transition font-bold text-lg focus:outline-none focus:ring-4 focus:ring-blue-300" aria-label="Previous testimonial">&#8592;</button>
          <button onClick={() => paginate(1)} className="px-4 py-2 bg-blue-200 text-blue-900 rounded-full hover:bg-blue-300 transition font-bold text-lg focus:outline-none focus:ring-4 focus:ring-blue-300" aria-label="Next testimonial">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 