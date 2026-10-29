'use client';

import { useState } from 'react';
import { CARS } from '@/lib/cars';
import { SITE, emailLink, phoneLink, whatsappLink } from '@/lib/site';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './Icons';

const field =
  'mt-1.5 w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-mist placeholder:text-mist/40 [color-scheme:dark]';

export default function Contact() {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [pickup, setPickup] = useState('');
  const [back, setBack] = useState('');

  // Builds the message live, so both buttons below always carry the latest details
  const message =
    `Hello, ${name ? `my name is ${name}. ` : ''}I would like to rent ${car || 'a car'}` +
    `${pickup ? ` from ${pickup}` : ''}${back ? ` to ${back}` : ''}.`;

  return (
    <section id="contact" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to book?
          </h2>
          <p className="mt-4 max-w-md text-mist/75">
            Fill in your details and send them to us on WhatsApp or email. Or
            contact us directly:
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-sodium"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={phoneLink}
                className="inline-flex items-center gap-3 hover:text-sodium"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={emailLink()}
                className="inline-flex items-center gap-3 hover:text-sodium"
              >
                <MailIcon className="h-5 w-5" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-petrol/60 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="text-sm text-mist/80">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field}
                autoComplete="name"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="text-sm text-mist/80">Car</span>
              <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                className={field}
              >
                <option value="">Not sure yet</option>
                {CARS.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-sm text-mist/80">Pickup date</span>
              <input
                type="date"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className={field}
              />
            </label>

            <label>
              <span className="text-sm text-mist/80">Return date</span>
              <input
                type="date"
                value={back}
                onChange={(e) => setBack(e.target.value)}
                className={field}
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sodium px-5 py-3.5 font-semibold text-ink hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send on WhatsApp
            </a>
            <a
              href={emailLink('Car rental enquiry', message)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-mist/40 px-5 py-3.5 font-semibold hover:bg-mist/10"
            >
              <MailIcon className="h-5 w-5" />
              Send by email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
