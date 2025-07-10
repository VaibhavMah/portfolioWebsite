import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ introDone }: { introDone: boolean }) {
  if (!introDone) return null;

  return (
    <div className="relative w-full min-h-[110vh] bg-transparent text-white ">
      {/* Navbar */}
<motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
  className="absolute top-0 left-0 w-full z-30"
>
  <div className=" text-3xl max-w-screen-xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
    <a
      href="resume/Vaibhav_resume_b.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl font-semibold border border-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-black transition">
      Resume
    </a>
    <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
      <li><a href="#about" className="hover:text-cyan-400 transition text-3xl">About</a></li>
      <li><a href="#projects" className="hover:text-cyan-400 transition text-3xl">Projects</a></li>
      <li><a href="#contact" className="hover:text-cyan-400 transition text-3xl">Contact</a></li>
    </ul>
  </div>
</motion.div>

      {/* Bottom Left */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-6 left-4 md:left-8 text-xs md:text-sm text-gray-300"
      >
        Python Developer & Digital Innovator
      </motion.div> */}

      {/* Bottom Right */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-6 right-4 md:right-8 text-xs md:text-sm text-gray-300 text-right"
      >
        Focused in digital spaces,<br />working from India.
      </motion.div> */}

      {/* Center Name & Image */}
      <div className="w-full h-[100vh] flex flex-col justify-center items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[3rem] md:text-[6rem] font-extrabold leading-none drop-shadow-[0_0_25px_#ffffff66]"
        >
          VAIBHAV<br />MAHESHWARI
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7 }}
          className="mt-6"
        >
          <Image
            src="/myphoto/Vaibhav_Image.jpeg"
            alt="Vaibhav Mahe"
            width={260}
            height={260}
            className="rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>
             {/* Bottom Info Row */}
{/* Bottom Info Row */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }} // same as navbar
  className="w-full max-w-screen-xl mx-auto px-4 md:px-8 mt-8 flex justify-between text-xs md:text-sm text-gray-300"
>
  <div className="hover:text-cyan-400 transition text-2xl">Full Stack Web Developer </div>
  <div className="hover:text-cyan-400 transition text-2xl">
    Love exploring new tech.<br />
  </div>
</motion.div>

      </div>



    </div>
  );
}
