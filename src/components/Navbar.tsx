'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center text-white z-20"
    >
      <div className="text-xl font-bold">Vaibhav</div>
      <ul className="flex space-x-6 text-sm md:text-base">
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>
    </motion.nav>
  );
}
