// Fleet data. Replace the names and rename the images to match your screenshots.
// Images live in public/images/fleet/  (example: public/images/fleet/car-1.jpg)

export type Car = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const CARS: Car[] = [
  {
    id: 'car-1',
    name: 'Lexus GX 460',
    price: 200000,
    image: '/images/fleet/car-1.jpeg',
  },
  {
    id: 'car-2',
    name: 'Toyota Land Cruiser Prado - J150',
    price: 150000,
    image: '/images/fleet/car-2.jpeg',
  },
  {
    id: 'car-3',
    name: 'Lexus GX 460',
    price: 200000,
    image: '/images/fleet/car-1.jpeg',
  },
  {
    id: 'car-4',
    name: 'Toyota Land Cruiser Prado - J150',
    price: 150000,
    image: '/images/fleet/car-2.jpeg',
  },
  // {
  //   id: 'car-5',
  //   name: 'Car 5',
  //   image: '/images/fleet/car-5.jpg',
  // },
  // {
  //   id: 'car-6',
  //   name: 'Car 6',
  //   image: '/images/fleet/car-6.jpg',
  // },
];
