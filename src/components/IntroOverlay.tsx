'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Developer', 'Problem Solver', 'Creator'];

export default function IntroOverlay({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [showCurtain, setShowCurtain] = useState(false);
  const [curtainGone, setCurtainGone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < words.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setShowCurtain(true);

        // Let the curtain drop in
        setTimeout(() => {
          setShowCurtain(false);
          setCurtainGone(true); // fade out curtain image
          onFinish();
        }, 1600);
      }
    }, 1300);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-white pointer-events-none">
      {/* Word animation */}
      {!showCurtain && !curtainGone && (
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute text-4xl md:text-6xl font-bold"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      )}

      {/* Curtain drop with blur */}
      {showCurtain && (
        <motion.div
          initial={{ y: '-100%', opacity: 1 }}
          animate={{ y: '0%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-[100vh] z-40 bg-[url('/hero.jpg')] bg-cover bg-center backdrop-blur-md"
        />
      )}

      {/* Smooth fade out of curtain to avoid flicker */}
      {curtainGone && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-[100vh] z-30 bg-[url('/hero.jpg')] bg-cover bg-center backdrop-blur-md"
        />
      )}
    </div>
  );
}
