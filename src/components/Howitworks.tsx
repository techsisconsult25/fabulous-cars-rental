const STEPS = [
  {
    title: 'Choose a car',
    text: 'Browse the fleet and pick the car you want.',
  },
  {
    title: 'Send us a message',
    text: 'Reach us on WhatsApp or email with your pickup and return dates.',
  },
  {
    title: 'Confirm and drive',
    text: 'We confirm availability and the details with you directly.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 bg-petrol py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          How booking works
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="font-display text-5xl font-semibold leading-none text-sodium">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-mist/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
