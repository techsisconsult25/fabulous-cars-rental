export const SITE = {
  name: 'Fabulous Cars Rental',
  phoneDisplay: '0803 944 6221',
  phoneLocal: '08039446221',
  // International format, no "+" or leading 0 (required by wa.me)
  whatsappNumber: '2348039446221',
  // TODO: replace with the client's real email address
  email: 'hello@fabulouscarsrental.com',
};

// Files you drop into /public (exact names and folders):
export const MEDIA = {
  // Tablet and desktop (768px and wider)
  heroVideoDesktop: '/videos/hero-desktop.mp4', //        public/videos/hero-desktop.mp4
  heroPosterDesktop: '/images/hero-poster-desktop.jpg', // public/images/hero-poster-desktop.jpg
  // Mobile (below 768px)
  heroVideoMobile: '/videos/hero-mobile.mp4', //          public/videos/hero-mobile.mp4
  heroPosterMobile: '/images/fleet/car-1.jpeg', //   public/images/hero-poster-mobile.jpg
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
