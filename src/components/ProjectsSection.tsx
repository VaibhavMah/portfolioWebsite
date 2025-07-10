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
  className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition mb-4"
>
  <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-cyan-400 transition">
    🔗
  </div>
  <div className="text-[18px] text-cyan-300 hover:text-cyan-500">Live Preview</div>
</a>

            
            <h3 className="text-[28px] font-semibold mb-4">Taskify</h3>
            <p className="text-gray-300 text-[20px] mb-6">
              Taskify is a powerful task management web app with features like authetication, task categorization, email integration, and an intuitive dashboard <span className="text-cyan-400 font-semibold">UI</span>. Built with the <span className="text-cyan-400 font-semibold">MERN</span>  stack and deployed online on AWS.
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

        {/* Gall Bladder Stone Predictor Project Card */}
<div className=" mt-12 bg-[#1a1a1a] rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 hover:border-cyan-400 transition-all border border-[#2e2e2e]">

  {/* Left Side */}
  <div className="w-full md:w-1/2">
    <a
      href="https://github.com/VaibhavMah/gallstone-prediction"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition mb-4"
    >
      <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-cyan-400 transition">
    🔗
    </div>
    <div className="text-[18px] text-cyan-300 hover:text-cyan-500">Visit</div>

    </a>
    <h3 className="text-[28px] font-semibold mb-4">Gall Bladder Stone Predictor</h3>
    <p className="text-gray-300 text-[20px] mb-6">
      A medical ML tool using clinical and blood test data to detect gallstone disease. Achieved a recall of <span className="text-cyan-400 font-semibold">84%</span> through logistic regression. Built from a real-world dataset published on <span className="text-cyan-400 font-semibold">UCI ML Repository (April 2025)</span>. Emphasized hyperparameter tuning for higher sensitivity.
    </p>
    <div className="flex flex-wrap gap-4 text-[18px] text-gray-400">
      <span>Python</span>
      <span>Scikit-learn</span>
      <span>Pandas</span>
      <span>Matplotlib</span>
      <span>ML</span>
      <span>Logistic Regression</span>
    </div>
  </div>

  {/* Right Side */}
  <div className="w-full md:w-1/2">
    <Image
      src="/projects/Gallstone.png" // Add this image in public/projects/
      alt="Gall Bladder Stone Predictor Preview"
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
