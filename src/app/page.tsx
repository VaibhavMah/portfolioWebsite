'use client';

import { useState } from 'react';
import IntroOverlay from '@/components/IntroOverlay';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ExperienceSection from '@/components/Experience';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/Contact';

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {!introDone && (
        <div className="fixed inset-0 z-50">
          <IntroOverlay onFinish={() => setIntroDone(true)} />
        </div>
      )}

      <section
        className={`relative w-full h-[100vh] transition-opacity duration-1000 ease-in-out ${
          introDone ? 'opacity-100' : 'opacity-0'
        } bg-[url('/hero.jpg')] bg-cover bg-center`}
      >
        <div className="relative z-10 h-full">
          <Hero introDone={introDone} />
        </div>
      </section>

      <section className="min-h-[100vh] bg-black px-6 py-12">
        <About />
      </section>

      <section className="min-h-[100vh] bg-black px-6 py-12">
        <ExperienceSection />
      </section>


        <section className="min-h-[100vh] bg-black px-6 py-12">
        <ProjectsSection />
      </section>

      <section className="min-h-[100vh] bg-black px-6 py-12">
        <ContactSection />
      </section>

    </main>
  );
}
