'use client';

import { Suspense } from 'react';
import { SITE, emailLink, phoneLink } from '@/lib/site';

function CurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-mist/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy;{' '}
          <Suspense fallback={null}>
            <CurrentYear />
          </Suspense>{' '}
          {SITE.name}. All rights reserved.
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={phoneLink} className="hover:text-mist">
            {SITE.phoneDisplay}
          </a>
          <a href={emailLink()} className="hover:text-mist">
            {SITE.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
