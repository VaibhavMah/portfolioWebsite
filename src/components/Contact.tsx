'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaDev } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Big Heading */}
        <h2 className="text-6xl font-extrabold text-center mb-4 text-[#f1ebe5] drop-shadow-[0_0_12px_#ffffff33]">
          LET&apos;S TALK <span className="inline-block">🫶🏾</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-[20px] mb-6 max-w-xl mx-auto">
          Got a question, proposal, project, or want to work together on something?
        </p>

        {/* Email link */}
        <a
          href="mailto:vaibhavmaheshwari6490@gmail.com" // Replace with your actual email
          className="underline underline-offset-4 hover:text-cyan-400 text-[20px]"
        >
          SEND ME AN EMAIL
        </a>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-10 text-white text-2xl">
          <a
            href="https://github.com/VaibhavMah/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-maheshwari-2ba969262/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          
        </div>

        {/* Footer Line */}
        <div className="mt-24 border-t border-gray-700 pt-6 flex justify-between text-sm text-gray-500 flex-col md:flex-row gap-2">
          <p>&copy; {new Date().getFullYear()} Vaibhav Maheshwari</p>
          <p>
            Made with ❤️ by{' '}
            <a
              href="https://www.linkedin.com/in/vaibhav-maheshwari-2ba969262/"
              className="underline underline-offset-2 hover:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vaibhav Maheshwari
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
