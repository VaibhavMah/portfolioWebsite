'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-white drop-shadow-[0_0_15px_#ffffff44]">
          EXPERIENCE
        </h2>
        <p className="text-center text-gray-400 mb-16 text-[20px]">
          THE ROAD SO FAR: MY EXPERIENCES, CHALLENGES, AND MILESTONES
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-[#0a0a0a] border border-[#2e2e2e] rounded-2xl p-8 hover:border-cyan-400 transition-all shadow-md">
            <a
  href="https://www.clix.capital/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#0a0a0a] border border-[#2e2e2e] rounded-2xl p-8 hover:border-cyan-400 transition-all shadow-md cursor-pointer block"
>
  <h3 className="text-[20px] font-bold text-white mb-2">
    Clix Capital Services Ltd.
  </h3>
  <p className="text-cyan-400 text-[20px] mb-4">
    Information Security & Networking Intern <br />
    <span className="text-cyan-400 text-[18px]">
      Onsite — Gurugram Office · 1st June - 30th June 2024
    </span>
  </p>
  <p className="text-gray-300 text-[20px]">
    Drafted Information Security policies, and got hands-on with Network Security tools like Trend Micro, Netskope, and Group IB.
  </p>
</a>

          </div>

          {/* Card 2 */}
          <div className="bg-[#0a0a0a] border border-[#2e2e2e] rounded-2xl p-8 hover:border-cyan-400 transition-all shadow-md">

         <a
  href="https://www.e-connectsolutions.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#0a0a0a] border border-[#2e2e2e] rounded-2xl p-8 hover:border-cyan-400 transition-all shadow-md cursor-pointer block"
>
  <h3 className="text-[20px] font-bold text-white mb-2">
    E-Connect Solutions Pvt. Ltd.
  </h3>
  <p className="text-cyan-400 text-[20px] mb-4">
    SDE Intern <br />
    <span className="text-gray-400 text-[18px]">2nd June - 30th June 2025</span>
  </p>
  <p className="text-gray-300 text-[20px]">
    Selected by the Lucknow Development Authority to build and maintain ERP solutions.<br /><br />
    Helped improve backend workflows, optimized SQL queries, and created HTML skeletons from Word documents.
  </p>
</a>
</div>

        </div>
      </div>
    </section>
  );
}
