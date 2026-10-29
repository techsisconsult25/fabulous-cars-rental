// Single source of truth for contact details and media file names.
// Change a value here and it updates everywhere on the site.

export const SITE = {
  name: 'Fabulous Cars Rental',
  phoneDisplay: '0803 944 6221',
  phoneLocal: '08039446221',
  whatsappNumber: '2348039446221',
  email: 'hello@fabulouscarsrental.com',
};

export const MEDIA = {
  heroVideo: '/videos/hero.mp4',
  heroPoster: '/images/hero-poster.jpg',
};

export function whatsappLink(
  message = 'Hello, I would like to rent a car from Fabulous Cars Rental.',
) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function emailLink(
  subject = 'Car rental enquiry',
  body = 'Hello, I would like to rent a car.\n\nCar:\nPickup date:\nReturn date:\n',
) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const phoneLink = `tel:${SITE.phoneLocal}`;
