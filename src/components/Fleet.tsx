import Image from 'next/image';
import { CARS } from '@/lib/cars';
import { emailLink, whatsappLink } from '@/lib/site';
import { MailIcon, WhatsAppIcon } from './Icons';

export default function Fleet() {
  return (
    <section id="fleet" className="scroll-mt-16 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Choose your car
        </h2>
        <p className="mt-4 max-w-xl text-mist/75">
          Tap Book this car and we will receive your message with the car name
          already filled in.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car) => (
            <li
              key={car.id}
              className="overflow-hidden rounded-2xl bg-petrol/60 ring-1 ring-white/10"
            >
              <div className="relative aspect-[4/3] bg-petrol">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">
                  {car.name}
                </h3>
                <p className="text-lg font-bold text-sodium">
                  ₦{car.price.toLocaleString('en-NG')}
                </p>

                <div className="mt-5 flex gap-2">
                  <a
                    href={whatsappLink(
                      `Hello, I would like to rent the ${car.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sodium px-4 py-2.5 text-sm font-semibold text-ink hover:brightness-110"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Book this car
                  </a>
                  <a
                    href={emailLink(
                      `Rental enquiry: ${car.name}`,
                      `Hello, I would like to rent the ${car.name}.\n\nPickup date:\nReturn date:\n`,
                    )}
                    aria-label={`Email us about the ${car.name}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-mist/30 hover:bg-mist/10"
                  >
                    <MailIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
