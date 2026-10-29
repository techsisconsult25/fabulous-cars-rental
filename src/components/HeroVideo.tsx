'use client';

import { useEffect, useState } from 'react';
import { MEDIA } from '@/lib/site';

export default function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 768px)');

    const update = () => {
      if (reduce.matches) return setSrc(null);
      setSrc(wide.matches ? MEDIA.heroVideoDesktop : MEDIA.heroVideoMobile);
    };

    update();
    wide.addEventListener('change', update);
    reduce.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      reduce.removeEventListener('change', update);
    };
  }, []);

  if (!src) return null;

  return (
    <video
      key={src}
      className="absolute inset-0 -z-20 h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
