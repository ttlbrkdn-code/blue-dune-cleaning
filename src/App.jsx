import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <header className="bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-sky-700">Blue Dune Exterior Cleaning</h1>
          <nav className="space-x-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Exterior cleaning that restores curb appeal
            </h2>
            <p className="mt-6 text-lg text-slate-700">
              Professional pressure washing, roof cleaning, gutter cleaning, and soft washing for homes and
              businesses across the region. Fast, reliable, and eco-conscious.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700"
              >
                Get a Free Quote
              </a>
              <a href="#services" className="inline-flex items-center px-6 py-3 border border-slate-200 rounded-md">
                Our Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="w-full h-64 bg-gradient-to-br from-sky-200 to-sky-400 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-slate-800 font-semibold">Hero image placeholder</span>
            </div>
          </motion.div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-slate-900">Services</h3>
            <p className="mt-4 text-slate-700">We offer a full suite of exterior cleaning services:</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold">Pressure Washing</h4>
                <p className="mt-2 text-sm text-slate-600">Driveways, patios, decks, and commercial surfaces.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold">Soft Washing</h4>
                <p className="mt-2 text-sm text-slate-600">Delicate surfaces like siding and roofs cleaned safely.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-semibold">Gutter Cleaning</h4>
                <p className="mt-2 text-sm text-slate-600">Prevent water damage with regular maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold">About Blue Dune</h3>
            <p className="mt-4 text-slate-700">Family-owned, licensed, and insured. We prioritize safety and environmentally
              responsible cleaning methods.</p>
          </div>
        </section>

        <section id="contact" className="bg-sky-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold">Contact</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <p className="flex items-center gap-3"><Phone className="text-sky-600"/> (555) 123-4567</p>
                <p className="mt-3 flex items-center gap-3"><Mail className="text-sky-600"/> hello@bluedunecleaning.com</p>
                <p className="mt-3 flex items-center gap-3"><MapPin className="text-sky-600"/> Service area: Coastal region</p>
              </div>

              <form className="p-6 bg-white rounded-lg shadow space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input className="mt-2 w-full border rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input className="mt-2 w-full border rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea className="mt-2 w-full border rounded-md px-3 py-2" rows="4" />
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
          <span>© {new Date().getFullYear()} Blue Dune Exterior Cleaning</span>
          <span className="text-sm">Licensed & Insured</span>
        </div>
      </footer>
    </div>
  )
}
