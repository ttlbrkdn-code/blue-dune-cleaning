import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/bluedune-logo.png";

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Phone({ className }) {
  return (
    <IconBase className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.27a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92z" />
    </IconBase>
  );
}

function Mail({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

function MapPin({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

function Waves({ className }) {
  return (
    <IconBase className={className}>
      <path d="M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M2 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
    </IconBase>
  );
}

function Sparkles({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
      <path d="M5 14l.75 2.25L8 17l-2.25.75L5 20l-.75-2.25L2 17l2.25-.75L5 14z" />
    </IconBase>
  );
}

function ShieldCheck({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

function Truck({ className }) {
  return (
    <IconBase className={className}>
      <path d="M10 17h4" />
      <path d="M1 5h13v10H1z" />
      <path d="M14 8h4l3 3v4h-7z" />
      <circle cx="5.5" cy="17.5" r="1.5" />
      <circle cx="17.5" cy="17.5" r="1.5" />
    </IconBase>
  );
}

function Droplets({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3s-5 5.5-5 9a5 5 0 0 0 10 0c0-3.5-5-9-5-9z" />
      <path d="M9.5 13a2.5 2.5 0 0 0 5 0" />
    </IconBase>
  );
}

function Wind({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 8h10a2 2 0 1 0-2-2" />
      <path d="M2 12h15a2 2 0 1 1-2 2" />
      <path d="M4 16h8a2 2 0 1 0-2 2" />
    </IconBase>
  );
}

function ChevronRight({ className }) {
  return (
    <IconBase className={className}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

function CheckCircle2({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

function Home({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-5h4v5" />
    </IconBase>
  );
}

function Trash2({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M6 6l1 14h10l1-14" />
      <path d="M10 10v6" />
      <path d="M14 10v6" />
    </IconBase>
  );
}

function Clock3({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l4 2" />
    </IconBase>
  );
}

function CalendarDays({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </IconBase>
  );
}

function Sun({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </IconBase>
  );
}

function ClipboardList({ className }) {
  return (
    <IconBase className={className}>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 4.5h6" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </IconBase>
  );
}

function LifeBuoy({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5.6 5.6l4.3 4.3M18.4 5.6l-4.3 4.3M5.6 18.4l4.3-4.3M18.4 18.4l-4.3-4.3" />
    </IconBase>
  );
}

function MessageSquare({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 5h16v11H8l-4 4V5z" />
    </IconBase>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  href,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-[#0B3D91] text-white hover:bg-[#0B3D91]/90 shadow-sm",
    outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 shadow-sm",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
    light: "bg-white text-[#0B3D91] hover:bg-white/90 shadow-sm",
    darkOutline: "border border-white/30 bg-transparent text-white hover:bg-white/10",
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
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

function Card({ className = "", children, ...props }) {
  return (
    <div className={cn("rounded-2xl border border-slate-200", className)} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

const services = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Exterior Window Cleaning",
    text: "Professional exterior window cleaning that helps beach homes, rentals, and owner properties look bright, sharp, and guest-ready.",
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "Screen Cleaning",
    text: "Screen cleaning and detail work that helps restore a cleaner finish and better overall presentation.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Pressure Washing",
    text: "Driveways, walkways, patios, pool decks, and other durable exterior surfaces cleaned with the right pressure for the job.",
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Soft Washing",
    text: "A safer low-pressure approach for siding and more delicate exterior surfaces that need a cleaner finish without harsh treatment.",
  },
  {
    icon: <Trash2 className="h-6 w-6" />,
    title: "Trash & Debris Removal",
    text: "Exterior cleanup for beach homes, rentals, and common outdoor areas, including light debris, reset work, and curb-appeal cleanup.",
  },
  {
    icon: <Waves className="h-6 w-6" />,
    title: "Light Sand Removal",
    text: "Light sand removal from walkways, driveways, decks, and backyard areas. Jobs are quoted by the property, access, and amount of buildup.",
  },
  {
    icon: <LifeBuoy className="h-6 w-6" />,
    title: "Pool Cleaning",
    text: "Pool cleaning and maintenance options for beach homes and rentals, including recurring service, one-time cleanups, inspections, and vacation rental checks.",
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Other Services by Request",
    text: "If it is a smaller outdoor cleanup or exterior service need that fits the Blue Dune lane, ask about it and we will let you know.",
  },
];

const highlights = [
  "Locally owned and family owned",
  "Free estimates and dependable scheduling",
  "Beach-property focused and rental-turnover friendly",
  "Fast response available, including after-hours service when possible",
];

const pricing = [
  {
    title: "Exterior Window Cleaning",
    price: "From $175",
    detail: "Smaller homes typically start around $175. Larger and more complex homes increase based on size, height, and access.",
  },
  {
    title: "Pressure Washing",
    price: "From $250",
    detail: "Good fit for driveways, walkways, patios, and hard exterior surfaces that need a cleaner, brighter finish.",
  },
  {
    title: "Trash & Debris Removal",
    price: "From $75",
    detail: "Starting point for smaller exterior pickups and light property cleanup. Larger jobs are quoted by volume and access.",
  },
  {
    title: "Screen Cleaning",
    price: "Quoted with windows or by job",
    detail: "Best paired with window cleaning or exterior refresh visits.",
  },
  {
    title: "Soft Washing",
    price: "Quoted by surface and condition",
    detail: "Pricing depends on the material being cleaned, condition, and the amount of buildup present.",
  },
  {
    title: "Light Sand Removal",
    price: "Quoted by job",
    detail: "Based on area, access, and the amount of light sand buildup on the property.",
  },
  {
    title: "Pool Cleaning",
    price: "Quoted by job",
    detail: "Pool cleaning is priced by service level, pool condition, frequency, and whether chemicals or specialty cleanup are needed.",
  },
  {
    title: "Other Services",
    price: "By request",
    detail: "If you need something similar that is not listed, reach out and ask.",
  },
];

const poolOptions = [
  "Weekly service",
  "One-time cleanings",
  "Skimming and vacuuming",
  "Basket emptying",
  "Filter checks and cleaning",
  "Chemical balancing",
  "Vacation rental pool checks",
  "Green-to-clean service",
  "Opening and closing service",
];

const trustItems = [
  {
    icon: <Home className="h-5 w-5" />,
    title: "Beach-property focused",
    text: "Built around the real needs of beach homes, vacation rentals, and owner properties.",
  },
  {
    icon: <CalendarDays className="h-5 w-5" />,
    title: "Dependable scheduling",
    text: "Clear communication, practical scheduling, and service that respects how rental properties operate.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Satisfaction-focused",
    text: "The goal is simple: do the work right and leave the property looking better than it did before.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Quick response available",
    text: "After-hours or emergency service may be available for an additional fee when schedules allow.",
  },
];

const faqs = [
  {
    q: "Do you work on vacation rentals and owner properties?",
    a: "Yes. Blue Dune is built for both, with a slight focus on the needs of vacation rental homes and guest-ready presentation.",
  },
  {
    q: "Do you handle heavy sand removal or anything that would require permits?",
    a: "No. Blue Dune only offers light sand removal from walkways, driveways, decks, and backyard areas. Anything beyond that would need to be evaluated separately.",
  },
  {
    q: "Can services be bundled together?",
    a: "Yes. Window cleaning, screen cleaning, washing services, debris cleanup, light sand removal, and pool service can be combined depending on the property and schedule.",
  },
  {
    q: "Do you offer recurring service?",
    a: "Yes. Recurring service is a strong fit for vacation rentals, pool care, and properties that need consistent exterior upkeep.",
  },
];

const phoneDisplay = "(757) 968-2310";
const phoneNumber = "7579682310";
const phoneHref = `tel:+1${phoneNumber}`;
const textHref = `sms:${phoneNumber}`;
const emailAddress = "hello@bluedunecleaning.com";
const quoteEmailHref = `mailto:${emailAddress}?subject=Blue%20Dune%20Quote%20Request`;
const hours = [
  "Monday-Friday: 8:00 AM - 6:00 PM",
  "Saturday: 8:30 AM - 5:00 PM",
  "Sunday: Closed",
  "After-hours or emergency service may be available for an additional fee",
];

function BrandMark() {
  return (
    <img
      src={logo}
      alt="Blue Dune Exterior Cleaning"
      className="h-16 w-auto object-contain sm:h-20 lg:h-24"
    />
  );
}

function SectionTitle({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <div className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-sky-700">{eyebrow}</div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    preferredContact: "Call",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = `Blue Dune Quote Request - ${form.name || "New Request"}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Property Address: ${form.address}`,
      `Service Needed: ${form.service}`,
      `Preferred Contact Method: ${form.preferredContact}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = mailto;
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Name" className={inputClass} value={form.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" className={inputClass} value={form.phone} onChange={handleChange} required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" type="email" placeholder="Email" className={inputClass} value={form.email} onChange={handleChange} required />
        <select name="preferredContact" className={inputClass} value={form.preferredContact} onChange={handleChange}>
          <option>Call</option>
          <option>Text</option>
          <option>Email</option>
        </select>
      </div>

      <input name="address" placeholder="Property address" className={inputClass} value={form.address} onChange={handleChange} />
      <input name="service" placeholder="Service needed" className={inputClass} value={form.service} onChange={handleChange} required />
      <textarea
        name="message"
        placeholder="Tell Blue Dune a little about the job"
        className={cn(inputClass, "min-h-[140px] resize-y")}
        value={form.message}
        onChange={handleChange}
        required
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Quote Request <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button href={textHref} size="lg" variant="outline" className="w-full sm:w-auto">
          Text Blue Dune
        </Button>
      </div>
    </form>
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
            <Button href="#quote" variant="outline">
              Get a Quote
            </Button>
            <Button href={textHref} variant="outline">
              Text Us
            </Button>
            <Button href={phoneHref}>Call Now</Button>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_38%),linear-gradient(to_bottom,_#f8fbff,_#ffffff)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 w-fit rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
              Proudly serving Sandbridge, Virginia Beach, and surrounding areas
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Dependable Exterior Cleaning for Beach Homes and Rentals
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Blue Dune Exterior Cleaning delivers a cleaner, sharper, more guest-ready look for beach homes, vacation rentals,
              and owner properties with window cleaning, screen cleaning, pressure washing, soft washing, trash and debris cleanup,
              light sand removal, and pool cleaning options.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#quote" size="lg">
                Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#pricing" size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="relative"
          >
            <div className="absolute -left-4 top-8 h-44 w-44 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -right-4 bottom-8 h-44 w-44 rounded-full bg-amber-100 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-0 bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="bg-gradient-to-br from-[#0B3D91] via-sky-700 to-sky-500 p-8 text-white">
                <BrandMark />
                <div className="mt-6 inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
                  Exterior cleaning built for coastal properties
                </div>
                <h2 className="mt-5 text-3xl font-bold">A polished outside matters.</h2>
                <p className="mt-3 max-w-lg text-white/85">
                  Blue Dune is designed for the kind of property care that matters most in a coastal market: cleaner first impressions,
                  better curb appeal, faster rental turn readiness, and dependable ongoing upkeep.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-white">
                      <Home className="h-5 w-5" />
                      <span className="font-semibold">Rental ready</span>
                    </div>
                    <p className="text-sm text-white/80">Great fit for vacation rentals, owner properties, and homes that need to stay presentable.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-white">
                      <Clock3 className="h-5 w-5" />
                      <span className="font-semibold">Fast response</span>
                    </div>
                    <p className="text-sm text-white/80">Quick communication and after-hours options may be available for an additional fee.</p>
                  </div>
                </div>
              </div>
              <CardContent className="grid gap-4 bg-white p-6 sm:grid-cols-3">
                {[
                  ["Call", phoneDisplay],
                  ["Text", phoneDisplay],
                  ["Email", emailAddress],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 p-4">
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-700">{label}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900 break-all">{value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: <Phone className="h-5 w-5" />,
              title: "Call or text for a fast quote",
              text: "Straightforward communication and quick turnaround on quote requests.",
            },
            {
              icon: <CalendarDays className="h-5 w-5" />,
              title: "Reliable for rental schedules",
              text: "Built to work well with vacation rental timing, owner needs, and recurring upkeep.",
            },
            {
              icon: <MessageSquare className="h-5 w-5" />,
              title: "Other services by request",
              text: "If you have a smaller outdoor cleanup need that fits the Blue Dune lane, ask about it.",
            },
          ].map((item) => (
            <Card key={item.title} className="bg-white shadow-sm">
              <CardContent className="flex gap-4 p-5">
                <div className="mt-1 rounded-xl bg-sky-50 p-2 text-sky-700">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Exterior service options that make sense for coastal properties"
          text="Blue Dune focuses on the work that keeps beach homes, rentals, and owner properties looking cleaner, more cared for, and ready for the next arrival."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card className="h-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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

      <section id="pricing" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Pricing"
            title="Competitive starting rates with custom pricing where the job calls for it"
            text="Every property is different, especially at the beach. Blue Dune keeps the pricing straightforward: simple jobs can start with clear pricing, while more variable work is quoted by the property, condition, and access."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((item) => (
              <Card key={item.title} className="h-full bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">{item.title}</div>
                  <div className="mt-3 text-2xl font-extrabold text-slate-900">{item.price}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-sky-100 bg-sky-50 p-6 text-sm leading-7 text-slate-700">
            Blue Dune pricing is intended to stay competitive for the Virginia Beach market while still reflecting property size,
            access, condition, and the realities of coastal cleanup work.
          </div>
        </div>
      </section>

      <section id="pools" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              eyebrow="Pool Cleaning"
              title="Pool cleaning and maintenance options for beach homes and rentals"
              text="Blue Dune can also handle pool cleaning and maintenance services by quote, including recurring service and one-time cleanup needs."
              align="left"
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              Pool service is quoted by the job, service frequency, pool condition, and the level of care needed. That keeps pricing fair and allows the right plan for the property.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#quote" size="lg">
                Ask About Pool Service
              </Button>
              <Button href={phoneHref} size="lg" variant="outline">
                Call to Discuss the Pool
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-0 bg-gradient-to-br from-[#0B3D91] to-sky-600 text-white shadow-xl">
            <CardContent className="p-8">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Available by quote</div>
              <h3 className="text-3xl font-bold">Pool Cleaning & Maintenance</h3>
              <p className="mt-4 leading-7 text-white/85">
                Routine cleaning, vacuuming, skimming, basket service, filter checks, chemical balancing, vacation rental pool checks, one-time cleanings, and green-to-clean service are all options depending on the property.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {poolOptions.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm text-white backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Blue Dune"
            title="A premium-friendly approach without the fluff"
            text="The goal is to deliver clean results, dependable communication, and service that actually fits how beach properties operate."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <Card key={item.title} className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="self-start overflow-hidden rounded-[2rem] border-0 bg-[#0B3D91] text-white shadow-xl">
            <CardContent className="p-8">
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Ready to book</div>
              <h3 className="mt-3 text-3xl font-bold text-white">Get a fast quote for your property</h3>
              <p className="mt-4 leading-7 text-white/85">
                Call, text, email, or send the quote form below. Blue Dune proudly serves Sandbridge, Virginia Beach, and surrounding areas.
              </p>

              <div className="mt-8 space-y-4">
                <a href={phoneHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition-colors hover:bg-white/20">
                  <Phone className="h-5 w-5 text-sky-200" />
                  <span>{phoneDisplay}</span>
                </a>
                <a href={textHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition-colors hover:bg-white/20">
                  <MessageSquare className="h-5 w-5 text-sky-200" />
                  <span>Text Blue Dune</span>
                </a>
                <a href={quoteEmailHref} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition-colors hover:bg-white/20 break-all">
                  <Mail className="h-5 w-5 text-sky-200" />
                  <span>{emailAddress}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white">
                  <MapPin className="h-5 w-5 text-sky-200" />
                  <span>Proudly serving Sandbridge, Virginia Beach, and surrounding areas</span>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-white">
                  <Clock3 className="h-5 w-5 text-sky-200" />
                  <span className="font-semibold">Hours</span>
                </div>
                <div className="space-y-2 text-sm leading-7 text-white/85">
                  {hours.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] bg-white shadow-lg">
            <CardContent className="p-8">
              <SectionTitle
                eyebrow="Quote Form"
                title="Tell Blue Dune what you need"
                text="Fill this out and your device will open an email draft with the information already loaded in."
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Quick answers owners usually want first"
          text="A few of the common questions that usually come up before a property gets scheduled."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q} className="bg-white shadow-sm">
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
            &copy; {new Date().getFullYear()} Blue Dune Exterior Cleaning. Proudly serving Sandbridge, Virginia Beach, and surrounding areas.
          </div>
        </div>
      </section>
    </div>
  );
}
