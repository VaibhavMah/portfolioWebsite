'use client';

import React from 'react';

const shows = [
  {
    title: 'Special Ops',
    subtitle: 'Thriller',
    image: '/posters/SpecialOps.jpg',
  },
  {
    title: 'Stranger Things',
    subtitle: 'Sci-Fi / Horror',
    image: '/posters/strangerthings.jpg',
  },
  {
    title: 'The Office',
    subtitle: 'Comedy',
    image: '/posters/theoffice.jpg',
  },
  {
    title: 'Dark',
    subtitle: 'Mystery / Sci-Fi',
    image: '/posters/dark.jpg',
  },
  {
    title: 'Peaky Blinders',
    subtitle: 'Drama / Crime',
    image: '/posters/peakyblinders.jpg',
  },
];

export default function SuggestedShows() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black text-white">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
        A Few Shows I Can Recommend If You're Looking for Something Fresh :)
      </h3>
      <div className="flex overflow-x-auto gap-6 scrollbar-hide">
        {shows.map((show, idx) => (
          <div
            key={idx}
            className="min-w-[220px] flex-shrink-0 bg-cover bg-center rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(show.title)}+web+series`, '_blank')}
            style={{
              backgroundImage: `url(${show.image})`,
              height: '300px',
            }}
          >
            <div className="w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/70 to-black/5 p-4 rounded-lg">
              <p className="text-sm text-gray-300">{show.subtitle}</p>
              <h4 className="text-lg font-semibold">{show.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
