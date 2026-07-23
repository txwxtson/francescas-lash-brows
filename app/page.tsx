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
const INSTAGRAM_HANDLE = "francescalashbrows";
const INSTAGRAM_HREF = "https://www.instagram.com/francescalashbrows/";

const services = [
  {
    name: "Signature Brow",
    blurb:
      "A bespoke brow treatment including brow mapping, waxing, trimming, tinting and styling to create balanced, defined brows tailored to your face shape.",
    price: "£20",
  },
  {
    name: "Brow Lamination",
    blurb:
      "A treatment that smooths and sets your natural brow hairs into your desired shape, creating fuller, fluffier brows with a lifted finish that lasts up to 6–8 weeks.",
    price: "£30",
  },
  {
    name: "Brow Tint",
    blurb:
      "A semi-permanent tint that darkens and defines your natural brows, enhancing their shape and creating a fuller, more polished look that lasts up to 4–6 weeks.",
    price: "£8",
  },
  {
    name: "Brow Wax",
    blurb:
      "A precision waxing treatment that removes unwanted hairs and shapes your brows to complement your facial features, leaving a clean, defined finish.",
    price: "£6",
  },
  {
    name: "Eyelash Tint",
    blurb:
      "A semi-permanent tint that darkens your natural lashes from root to tip, creating the appearance of longer, fuller lashes without the need for mascara.",
    price: "£8",
  },
  {
    name: "Korean Lash Lift",
    blurb:
      "A gentle lash lift that creates a soft, natural-looking curl, enhancing your own lashes for a brighter, more open-eyed appearance that lasts 6–8 weeks.",
    price: "£30",
  },
  {
    name: "Keratin Lash Lift",
    blurb:
      "A nourishing lash lift infused with keratin to lift, strengthen and condition your natural lashes, leaving them healthier, longer-looking and beautifully curled for up to 6–8 weeks.",
    price: "£33",
  },
  {
    name: "Lash Lift Aftercare Treatment",
    blurb:
      "A nourishing keratin conditioning treatment designed to hydrate, strengthen and protect your natural lashes after a lash lift, helping maintain healthy lashes and prolong your lift results.",
    price: "+£5",
  },
];

const shadeSwatches = [
  { src: "/brow-shades/shade-1.png", alt: "Ash blonde brow tint shade", width: 210, height: 57 },
  { src: "/brow-shades/shade-2.png", alt: "Light brown brow tint shade", width: 228, height: 58 },
  { src: "/brow-shades/shade-3.png", alt: "Auburn brow tint shade", width: 226, height: 59 },
  { src: "/brow-shades/shade-4.png", alt: "Medium brown brow tint shade", width: 222, height: 58 },
  { src: "/brow-shades/shade-5.png", alt: "Dark brown brow tint shade", width: 233, height: 57 },
  { src: "/brow-shades/shade-6.png", alt: "Espresso brow tint shade", width: 228, height: 57 },
  { src: "/brow-shades/shade-7.png", alt: "Black brow tint shade", width: 229, height: 60 },
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

const localTowns = [
  "Marple",
  "Bramhall",
  "Cheadle",
  "Cheadle Hulme",
  "The Heatons",
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
              Serving Stockport &amp; Greater Manchester
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
            <Reveal delayMs={130}>
              <p className="mt-2 text-xs text-taupe/70">
                Travel cost may apply depending on distance — confirmed at
                booking.
              </p>
            </Reveal>
            <Reveal delayMs={150}>
              <p className="mt-2 text-xs text-taupe/70">
                A deposit is taken depending on the treatment(s) booked. If
                it&rsquo;s your first time booking with me, a short
                consultation (up to 10 minutes) is included free of charge to
                discuss what you&rsquo;d like from your appointment.
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

            <Reveal delayMs={200} className="mt-10">
              <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-taupe">
                Available Shades
              </p>
              <div className="mx-auto mt-4 grid w-fit grid-cols-4 gap-x-3 gap-y-3">
                {shadeSwatches.map((shade) => (
                  <Image
                    key={shade.src}
                    src={shade.src}
                    alt={shade.alt}
                    width={shade.width}
                    height={shade.height}
                    className="h-6 w-auto sm:h-8"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <SweepDivider className="pb-2" />

        {/* Before & After */}
        <section id="results" className="bg-sand/60 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="The Results" title="Before &amp; After" />
            <Reveal delayMs={100}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-espresso/80">
                A few recent transformations from our Signature Brow
                treatment — brow mapping, waxing, trimming, tinting and
                styling, taking brows from natural and undone to shaped,
                full, and defined.
              </p>
            </Reveal>

            <Reveal delayMs={160} className="mt-12">
              <BeforeAfterSlider
                beforeSrc="/image1.jpeg"
                afterSrc="/image2.jpeg"
                beforeAlt="Before Signature Brow — natural, unshaped brow"
                afterAlt="After Signature Brow — fuller, defined brow"
              />
            </Reveal>

            <Reveal delayMs={100} className="mt-16">
              <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-taupe">
                Another set, same story
              </p>
              <p className="mt-1 text-center text-xs italic text-espresso/60">
                Brow Lamination
              </p>
              <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand">
                    <Image
                      src="/image4.jpeg"
                      alt="Before Signature Brow, natural brow"
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
                      alt="After Signature Brow, fuller defined brow"
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

            <Reveal delayMs={140} className="mt-16">
              <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-taupe">
                Korean Lash Lift
              </p>
              <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand">
                    <Image
                      src="/korlashliftbefore.png"
                      alt="Before Korean Lash Lift, natural lashes"
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
                      src="/korlashliftafter.png"
                      alt="After Korean Lash Lift, lifted curled lashes"
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

            <Reveal delayMs={160} className="mt-16">
              <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-taupe">
                Keratin Lash Lift
              </p>
              <div className="mx-auto mt-6 max-w-xs">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand">
                  <Image
                    src="/keratinlashlift.png"
                    alt="Keratin Lash Lift treatment"
                    fill
                    sizes="(min-width: 640px) 320px, 90vw"
                    className="object-cover"
                  />
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
              Based near Romiley, Stockport — serving {localTowns.join(", ")}.
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

      <a
        href={INSTAGRAM_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit on Instagram"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-lg transition-transform hover:scale-105"
      >
        <IconInstagram className="h-7 w-7" />
      </a>
    </>
  );
}
