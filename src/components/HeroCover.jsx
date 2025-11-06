import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/80 dark:from-zinc-900/20 dark:via-zinc-900/0 dark:to-zinc-900 pointer-events-none" />
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Capture. Share. Inspire.
          </h1>
          <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-300">
            A minimalist social space for photographers and creators. Upload your shots, like and comment, and explore by users or hashtags.
          </p>
        </div>
      </div>
    </section>
  );
}
