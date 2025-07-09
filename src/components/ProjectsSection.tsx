'use client';

import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-6">PROJECTS</h2>
        <p className="text-center text-gray-400 mb-16 text-xl">
          MY JOURNEY OF GROWTH, INNOVATION AND CONTINUOUS LEARNING
        </p>

        {/* Project Card */}
        <div className="bg-[#1a1a1a] rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 hover:border-cyan-400 transition-all border border-[#2e2e2e]">

          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <a
              href="https://vaib.rf.gd/taskify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4"
            >
              <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-cyan-400 transition">
                🔗
              </div>
            </a>
            <h3 className="text-[28px] font-semibold mb-4">Taskify</h3>
            <p className="text-gray-300 text-[20px] mb-6">
              Taskify is a powerful task management web app with features like login/register, task categorization, email reminders based on task priority, and an intuitive dashboard UI. Built with the MERN stack and deployed online on AWS.
            </p>
            <div className="flex flex-wrap gap-4 text-[18px] text-gray-400">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Tailwind</span>
              <span>Framer Motion</span>
              <span>JWT</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <Image
              src="/projects/taskify-preview.png" // Place this image in public/
              alt="Taskify Preview"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
