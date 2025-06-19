"use client"
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  key: number;
  x: number;
  y: number;
}

const RippleEffect = ({ onRipple }: { onRipple?: () => void }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleContainer = useRef<HTMLDivElement>(null);
  const rippleKey = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rippleContainer.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [
      ...prev,
      { key: rippleKey.current++, x, y }
    ]);
    if (onRipple) onRipple();
  };

  return (
    <div
      ref={rippleContainer}
      onClick={handleClick}
      className="relative w-full h-32 flex items-center justify-center bg-blue-200 overflow-hidden cursor-pointer select-none"
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.key}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: ripple.x - 16,
              top: ripple.y - 16,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #2563eb 60%, #60a5fa 100%)',
              pointerEvents: 'none',
            }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.key !== ripple.key));
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect; 