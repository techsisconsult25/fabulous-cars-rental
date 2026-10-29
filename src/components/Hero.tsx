import { MEDIA, SITE, phoneLink, whatsappLink } from '@/lib/site';
import { PhoneIcon, WhatsAppIcon } from './Icons';
import { FaCar } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-petrol bg-cover bg-center"
      style={{ backgroundImage: `url(${MEDIA.heroPoster})` }}
    >
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
        src={MEDIA.heroVideo}
        poster={MEDIA.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
          Fabulous cars, ready when you are.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mist/85">
          Pick a car from our fleet, then book in minutes on WhatsApp or email.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sodium px-6 py-3.5 font-semibold text-ink hover:brightness-110"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book on WhatsApp
          </a>
          <a
            href={'#fleet'}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-mist/40 px-6 py-3.5 font-semibold hover:bg-mist/10"
          >
            <FaCar className="h-5 w-5" />
            Pick a Ride
          </a>
        </div>

        <a
          href={phoneLink}
          className="mt-6 inline-flex items-center gap-2 text-sm text-mist/80 hover:text-mist"
        >
          <PhoneIcon className="h-4 w-4" />
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
