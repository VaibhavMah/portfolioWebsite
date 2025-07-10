'use client';

import { motion } from 'framer-motion';
import TechCloud from './TechCloud';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_#00ffff] mb-8">
            I code ideas into reality,<br />
            <span className="text-cyan-400">make websites powerful</span> and <br />
            <span className="text-cyan-400">data insightful.</span>
          </h2>

          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
            <p>
              I am an IT undergrad passionate about software development, data analytics, and automation. With a strong foundation in developing full stack web apps.
            </p>

            <p>
              When I’m not coding, you’ll find me swimming, playing cricket, badminton... or binge-watching some rocking web series.
            </p>

            <p>
              Currently working on exciting projects — always open to collaborations!
            </p>
          </div>
        </motion.div>

        {/* RIGHT: 3D Cloud + Tools */}
        <motion.div
          className="flex flex-col gap-10 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="w-[400px] h-[400px]">
            <TechCloud />
          </div>

          <div className="space-y-4 text-sm md:text-base text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-1">Languages & Frameworks</h4>
              <p className="text-gray-400">
                React.js, Node.js, Express.js, Next.js, C++, CSS, FastAPI
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Databases & Tools</h4>
              <p className="text-gray-400">
                MySQL, MongoDB, Power BI, Postman, Git
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
