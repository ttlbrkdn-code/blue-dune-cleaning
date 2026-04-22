import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Waves,
  Sparkles,
  ShieldCheck,
  Truck,
  Droplets,
  Wind,
  ChevronRight,
  CheckCircle2,
  Home,
  Trash2,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  href,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-[#0B3D91] text-white hover:bg-[#0B3D91]/90",
    outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
  };
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], "rounded-2xl", className);

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

function Card({ className = "", children }) {
  return <div className={cn("rounded-2xl border border-slate-200", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

const services = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Window & Screen Cleaning",
    text: "Exterior window washing, screen cleaning, and detail work that helps beach homes look crisp and guest-ready.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Pressure & Soft Washing",
    text: "Driveways, walkways, siding, patios, and exterior surfaces cleaned with methods matched to the material.",
  },
  {
    icon: <Waves className="h-6 w-6" />,
    title: "Sand Removal",
    text: "Driveways, backyards, walkways, and outdoor living spaces cleared of excess sand after storms, wind, and heavy beach traffic.",
  },
  {
    icon: <Trash2 className="h-6 w-6" />,
    title: "Trash & Outdoor Cleanup",
    text: "Light debris removal, exterior reset work, and beach-property cleanup that keeps the outside looking cared for.",
  },
];

const highlights = [
  "Serving Sandbridge and greater Virginia Beach",
  "Beach-property focused exterior cleaning",
  "Simple quotes and easy scheduling",
  "Great for owners, rentals, and recurring service",
];

const packages = [
  {
    name: "Quick Refresh",
    price: "From $175",
    items: ["Exterior windows", "Screen wipe-down", "Light entry cleanup"],
  },
  {
    name: "Beach House Reset",
    price: "From $325",
    items: ["House wash or driveway wash", "Exterior touch-up cleaning", "Light debris cleanup"],
  },
  {
    name: "Sand Clear-Out",
    price: "Custom Quote",
    items: ["Driveway or backyard sand removal", "Haul-away based on access", "Ideal after wind and storms"],
  },
];

const faqs = [
  {
    q: "Do you work on vacation rentals and owner properties?",
    a: "Yes. Blue Dune is built around the needs of beach homes, including rentals, second homes, and owner-occupied properties.",
  },
  {
    q: "Can services be bundled together?",
    a: "Yes. Bundling window cleaning, washing, sand removal, and outdoor cleanup is one of the easiest ways to keep a property looking sharp while saving on repeat trip costs.",
  },
  {
    q: "Do you offer recurring service?",
    a: "Yes. Recurring service is ideal for high-traffic beach homes that deal with salt, sand, and weather exposure on a regular basis.",
  },
];

const phoneDisplay = "(757) 968-2310";
const phoneNumber = "7579682310";
const phoneHref = `tel:+1${phoneNumber}`;
const textHref = `sms:${phoneNumber}`;
const emailAddress = "hello@bluedunecleaning.com";
const quoteEmailHref = `mailto:${emailAddress}?subject=Blue%20Dune%20Quote%20Request`;

function BrandMark() {
  return (
    <img
      src="/bluedune-logo.png"
      alt="Blue Dune Exterior Cleaning"
      className="h-16 w-auto object-contain sm:h-20"
    />
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-sky-700">{eyebrow}</div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label="Blue Dune home">
            <BrandMark />
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <Button href="#contact" variant="outline" className="rounded-2xl border-slate-300">
              Get a Quote
            </Button>
            <Button href={phoneHref} className="rounded-2xl bg-[#0B3D91] hover:bg-[#0B3D91]/90">
              Call Now
            </Button>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_35%),linear-gradient(to_bottom,_#f8fbff,_#ffffff)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
              <Waves className="h-4 w-4" />
              Sandbridge & Virginia Beach exterior cleaning
            </div>
            <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Clean, clear, and guest-ready beach properties.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Blue Dune Exterior Cleaning helps beach homes look sharp with window cleaning, pressure washing, trash
              removal, sand cleanup, and general outdoor refresh services.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg" className="rounded-2xl bg-[#0B3D91] px-6 hover:bg-[#0B3D91]/90">
                Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#services" size="lg" variant="outline" className="rounded-2xl border-slate-300 px-6">
                View Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -right-6 bottom-6 h-48 w-48 rounded-full bg-amber-100 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-0 bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="bg-gradient-to-br from-[#0B3D91] via-sky-700 to-sky-500 p-8 text-white">
                <div className="mb-6 inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
                  Blue Dune Signature Service
                </div>
                <h3 className="text-3xl font-bold">Beach Property Exterior Refresh</h3>
                <p className="mt-3 max-w-md text-white/85">
                  A polished, owner-friendly service mix built for the realities of Sandbridge: salt, sand, weather,
                  traffic, and fast turnarounds.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-white">
                      <Home className="h-5 w-5" />
                      <span className="font-semibold">For Beach Homes</span>
                    </div>
                    <p className="text-sm text-white/80">Ideal for owners, rentals, and high-traffic seasonal properties.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-white">
                      <Truck className="h-5 w-5" />
                      <span className="font-semibold">Easy Scheduling</span>
                    </div>
                    <p className="text-sm text-white/80">Simple quotes, practical service bundles, and reliable follow-through.</p>
                  </div>
                </div>
              </div>
              <CardContent className="grid gap-4 bg-white p-6 sm:grid-cols-3">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">{pkg.name}</div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900">{pkg.price}</div>
                    <div className="mt-4 space-y-2">
                      {pkg.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Built for the outside of beach properties"
          text="Blue Dune focuses on the jobs that make the biggest difference to curb appeal, guest experience, and general property presentation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full rounded-[1.5rem] border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow="Why Blue Dune"
              title="A cleaner, more useful kind of exterior service"
              text="Beach homes take a beating. Salt, sand, weather, and turnover traffic make the outside get rough fast. Blue Dune is designed around fixing exactly that."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5" />,
                  title: "Beach-property aware",
                  text: "The service mix is aimed at the real messes common to Sandbridge properties.",
                },
                {
                  icon: <Wind className="h-5 w-5" />,
                  title: "Storm and sand response",
                  text: "Helpful for post-wind cleanup, sandy driveways, and general exterior resets.",
                },
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  title: "Presentation-focused",
                  text: "Designed to improve curb appeal and how a property shows for owners and guests.",
                },
                {
                  icon: <Truck className="h-5 w-5" />,
                  title: "Flexible service bundles",
                  text: "Book one job or stack services together for a full outside refresh.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 inline-flex rounded-xl bg-sky-50 p-2 text-sky-700">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Card id="contact" className="self-start overflow-hidden rounded-[2rem] border-0 bg-[#0B3D91] text-white shadow-xl">
            <CardContent className="p-8">
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Ready to book</div>
              <h3 className="mt-3 text-3xl font-bold text-white">Get a fast quote for your property</h3>
              <p className="mt-4 leading-7 text-white/85">
                Call, text, or email for a fast quote. Blue Dune serves Sandbridge and Virginia Beach with dependable exterior cleaning for beach homes, rentals, and owner properties.
              </p>
              <div className="mt-8 space-y-4">
                <a href={phoneHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition-colors hover:bg-white/20">
                  <Phone className="h-5 w-5 text-sky-200" />
                  <span>{phoneDisplay}</span>
                </a>
                <a href={quoteEmailHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition-colors hover:bg-white/20">
                  <Mail className="h-5 w-5 text-sky-200" />
                  <span>{emailAddress}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white">
                  <MapPin className="h-5 w-5 text-sky-200" />
                  <span>Serving Sandbridge & Virginia Beach</span>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Button href={quoteEmailHref} className="w-full rounded-2xl bg-white text-[#0B3D91] hover:bg-white/90">
                  Request Quote
                </Button>
                <Button href={textHref} variant="outline" className="w-full rounded-2xl border-white/30 bg-transparent text-white hover:bg-white/10">
                  Text Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Quick answers owners usually want first"
          text="These are easy trust-builders for a service website and give you a place to answer common questions right away."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} className="rounded-[1.5rem] border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <BrandMark />
          <div className="text-sm leading-7 text-slate-500">
            &copy; {new Date().getFullYear()} Blue Dune Exterior Cleaning. Serving Sandbridge and Virginia Beach.
          </div>
        </div>
      </section>
    </div>
  );
}
