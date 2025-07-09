'use client';

import React from 'react';
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud';

export default function TechCloud() {
  return (
    <div className="w-[400px] h-[400px] mx-auto">
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'slow',
          initSpeed: 'slow',
          keep: true,
        })}
        onClick={(tag: string, ev: MouseEvent) => {
          console.log(`Clicked on: ${tag}`);
        }}
        onClickOptions={{ passive: true }}
      >
        {[
          'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js',
          'Tailwind', 'Node.js', 'Express', 'MongoDB', 'SQL',
            'Git', 'HTML', 'CSS', 'C++','Linux/UNIX',
        ]}
      </TagCloud>
    </div>
  );
}
