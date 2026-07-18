import Image from "next/image";
import { SweepDivider, SweepFlourish, SweepUnderline } from "./components/Sweep";
import { IconInstagram, IconWhatsApp } from "./components/Icons";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";

const WHATSAPP_NUMBER = "447401344991";
const WHATSAPP_MESSAGE = "Hi Francesca, I'd love to book a lash/brow appointment!";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WHATSAPP_FLOAT_NUMBER = "447401344991";
const WHATSAPP_FLOAT_HREF = `https://wa.me/${WHATSAPP_FLOAT_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const INSTAGRAM_HANDLE = "francescaslashandbrows";
const INSTAGRAM_HREF = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const services = [
  {
    name: "Signature Brow",
    blurb:
      "Brow mapping tailored to your face shape, plus a tint, trim, wax, and style for a polished finish.",
    price: "£20",
  },
  {
    name: "Brow Lamination",
    blurb:
      "A smoothing treatment that sets brows into a fuller, fluffy or sleek shape, with a lifted finish that lasts.",
    price: "£30",
  },
  {
    name: "Brow Tint",
    blurb: "Adds depth and definition to your brows, natural or bold.",
    price: "£8",
  },
  {
    name: "Brow Wax",
    blurb: "Precision waxing for clean, defined brow shape.",
    price: "£6",
  },
  {
    name: "Eyelash Tint",
    blurb: "Darkens natural lashes for a fuller look, no mascara needed.",
    price: "£8",
  },
  {
    name: "Korean Lash Lift",
    blurb:
      "A soft, natural-looking lift tailored to your eye shape, lasting 6–8 weeks.",
    price: "£32",
  },
  {
    name: "Keratin Lash Lift",
    blurb:
      "Lifts and conditions natural lashes for a longer, open-eyed look, lasting 6–8 weeks.",
    price: "£36",
  },
  {
    name: "Upper Lip Wax",
    blurb: "Quick, precise waxing for smooth results.",
    price: "£6",
  },
  {
    name: "Lash Lift Aftercare Treatment",
    blurb: "An add-on to help protect and prolong your lash lift results.",
    price: "+£5",
  },
];

const steps = [
  {
    number: "01",
    title: "Message me",
    body: "Send a WhatsApp with your treatment, your area, and a day that suits you.",
  },
  {
    number: "02",
    title: "We confirm the details",
    body: "I'll confirm your time, flag anything needed for a patch test if it's your first visit, and sort the rest in advance.",
  },
  {
    number: "03",
    title: "I come to you",
    body: "I bring the full professional set-up with me, chair included — you just need good light and a bit of time to relax.",
  },
];

const areas = [
  "Manchester",
  "Salford",
  "Stockport",
  "Trafford",
  "Bolton",
  "Bury",
  "Oldham",
  "Rochdale",
  "Tameside",
  "Wigan",
];

export default function Home() {
  return (
    <>
      <a
        href="#book"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded focus-visible:bg-espresso focus-visible:px-4 focus-visible:py-2 focus-visible:text-cream"
      >
        Skip to booking
      </a>

      <header className="sticky top-0 z-40 border-b border-tan/30 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#home" className="font-display text-2xl text-espresso">
            FLB
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-espresso px-4 py-2 text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-espresso hover:text-cream"
          >
            Book Now
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
        >
          <SweepFlourish className="pointer-events-none absolute left-1/2 top-8 h-24 w-[420px] -translate-x-1/2 text-tan/25 sm:top-4 sm:h-32 sm:w-[600px]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p
              className="hero-reveal text-xs font-medium uppercase tracking-[0.2em] text-taupe"
              style={{ animationDelay: "0.05s" }}
            >
              Greater Manchester &middot; Mobile Lash &amp; Brow Artist
            </p>
            <h1
              className="hero-reveal mt-5 font-display text-6xl leading-[1.05] text-espresso sm:text-8xl"
              style={{ animationDelay: "0.15s" }}
            >
              Francesca&rsquo;s Lash &amp; Brows
            </h1>
            <p
              className="hero-reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-espresso/80 sm:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Studio-quality lash and brow artistry, brought to your door — no
              salon, no rushing across town.
            </p>
            <div
              className="hero-reveal mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-espresso px-7 py-3.5 text-base font-medium text-cream transition-colors hover:bg-taupe sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href="#services"
                className="w-full border border-espresso/25 px-7 py-3.5 text-center text-base font-medium text-espresso transition-colors hover:border-espresso/50 sm:w-auto"
              >
                See the services
              </a>
            </div>
          </div>
        </section>

        <SweepDivider className="pb-2" />

        {/* About */}
        <section id="about" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2 sm:items-center sm:gap-14">
            <Reveal>
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm bg-sand">
                <Image
                  src="/image6.jpeg"
                  alt="Francesca, mobile lash and brow technician"
                  fill
                  sizes="(min-width: 640px) 400px, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="font-display text-4xl text-espresso sm:text-5xl">
                Hi, I&rsquo;m Francesca.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-espresso/85">
                A 22-year-old student nurse and fully qualified, accredited
                lash and brow technician, I bring the same care and
                attention to detail from my nursing training into every
                appointment.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-espresso/85">
                That means treatments you can trust, delivered in the
                comfort of your own home, across Greater Manchester. Fully
                insured, so you can relax completely.
              </p>
            </Reveal>
          </div>
        </section>

        <SweepDivider className="pb-2" />

        {/* Services */}
        <section id="services" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <SectionHeading title="The Menu" />
            <Reveal delayMs={100}>
              <p className="mt-3 text-sm italic text-taupe">
                Enhancing your natural beauty — because natural is best.
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-espresso/10">
              {services.map((service, i) => (
                <Reveal
                  key={service.name}
                  as="li"
                  delayMs={i * 60}
                  className="group relative py-5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="relative inline-block font-display text-3xl text-espresso">
                      {service.name}
                      <SweepUnderline className="text-rose" />
                    </span>
                    <span className="whitespace-nowrap text-base font-semibold text-espresso">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-espresso/65">
                    {service.blurb}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <SweepDivider className="pb-2" />

        {/* Before & After */}
        <section id="results" className="bg-sand/60 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="The Results" title="Before &amp; After" />
            <Reveal delayMs={100}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-espresso/80">
                A few recent transformations — brow lamination and tint,
                taking brows from natural and undone to shaped, full, and
                defined.
              </p>
            </Reveal>

            <Reveal delayMs={160} className="mt-12">
              <BeforeAfterSlider
                beforeSrc="/image1.jpeg"
                afterSrc="/image2.jpeg"
                beforeAlt="Before brow lamination — natural, unshaped brow"
                afterAlt="After brow lamination — fuller, defined brow"
              />
            </Reveal>

            <Reveal delayMs={100} className="mt-16">
              <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-taupe">
                Another set, same story
              </p>
              <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand">
                    <Image
                      src="/image4.jpeg"
                      alt="Before brow lamination, natural brow"
                      fill
                      sizes="(min-width: 640px) 300px, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium uppercase tracking-wide text-taupe">
                    Before
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand">
                    <Image
                      src="/image3.jpeg"
                      alt="After brow lamination, fuller defined brow"
                      fill
                      sizes="(min-width: 640px) 300px, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium uppercase tracking-wide text-taupe">
                    After
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SweepDivider className="pb-2" />

        {/* How it works */}
        <section id="how-it-works" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="How the mobile service works" />
            <ol className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.number} as="li" delayMs={i * 100}>
                  <span className="font-display text-4xl text-rose">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/70">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Book now */}
        <section id="book" className="bg-espresso px-5 py-20 text-cream sm:px-8 sm:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-5xl sm:text-6xl">
              Ready when you are.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cream/75">
              Message me on WhatsApp to check availability, or follow along on
              Instagram for recent sets and open slots.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-cream px-7 py-3.5 text-base font-medium text-espresso transition-colors hover:bg-tan sm:w-auto"
              >
                <IconWhatsApp className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-cream/40 px-7 py-3.5 text-base font-medium text-cream transition-colors hover:border-cream sm:w-auto"
              >
                <IconInstagram className="h-5 w-5" />
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-cream/10 bg-espresso px-5 py-12 text-cream/70 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-2xl text-cream">
              Francesca&rsquo;s Lash &amp; Brows
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Covering Greater Manchester, including {areas.slice(0, -1).join(", ")}{" "}
              and {areas[areas.length - 1]}.
            </p>
          </div>

          <div className="text-sm">
            <p className="uppercase tracking-[0.15em] text-cream/50">Get in touch</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 text-cream/80 transition-colors hover:text-cream"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 text-cream/80 transition-colors hover:text-cream"
              >
                <IconInstagram className="h-4 w-4" />
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-5xl text-xs text-cream/40">
          &copy; {new Date().getFullYear()} Francesca&rsquo;s Lash &amp; Brows. All
          rights reserved.
        </p>
      </footer>

      <a
        href={WHATSAPP_FLOAT_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <IconWhatsApp className="h-7 w-7" />
      </a>
    </>
  );
}
