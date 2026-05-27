"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

const services = [
  "Bridal Makeup",
  "Party / Evening Makeup",
  "Engagement Makeup",
  "Natural / Everyday Makeup",
  "Editorial / Photoshoot",
  "Other",
];

export default function BookingSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm]         = useState({
    name: "", email: "", phone: "", service: "", date: "", time: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-blush-dark uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight mb-4">
            Book Your Session
          </h2>
          <div className="w-12 h-px bg-blush mx-auto mb-6" />
          <p className="text-muted font-light max-w-md mx-auto">
            Ready to look and feel your best? Fill in the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Left: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-5"
          >
            {[
              { icon: Phone,    title: "Call / WhatsApp",  detail: "+91 98765 43210" },
              { icon: Mail,     title: "Email",            detail: "hello@sandhyamakeover.com" },
              { icon: Clock,    title: "Working Hours",    detail: "Mon–Sun · 7 AM – 8 PM" },
              { icon: Calendar, title: "Advance Booking",  detail: "Recommended 2–4 weeks ahead" },
            ].map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-blush/20 hover:border-blush/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-blush-dark" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted mb-0.5">{title}</p>
                  <p className="text-charcoal font-light">{detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="flex flex-col items-center justify-center text-center py-16 bg-cream rounded-3xl border border-blush/30"
              >
                <CheckCircle size={56} className="text-blush mb-5" />
                <h3 className="text-2xl font-light text-charcoal mb-3">Booking Request Sent! 🎉</h3>
                <p className="text-muted max-w-xs">
                  Thank you, {form.name}! I&apos;ll reach out to confirm your appointment within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", service:"", date:"", time:"", message:"" }); }}
                  className="mt-8 px-6 py-2.5 rounded-full border border-blush text-blush text-sm tracking-widest uppercase hover:bg-blush hover:text-white transition-all cursor-pointer"
                >
                  New Booking
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream rounded-3xl p-8 border border-blush/20 space-y-5"
              >
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blush/60" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-blush/30 text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition"
                    />
                  </div>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blush/60" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-blush/30 text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blush/60" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-blush/30 text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition"
                  />
                </div>

                {/* Service select */}
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-blush/30 text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition appearance-none cursor-pointer text-charcoal"
                >
                  <option value="" disabled>Select a Service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Date & time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blush/60" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-blush/30 text-charcoal text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition"
                    />
                  </div>
                  <div className="relative">
                    <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blush/60" />
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-blush/30 text-charcoal text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-4 top-4 text-blush/60" />
                  <textarea
                    name="message"
                    placeholder="Any special requests or notes..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-blush/30 text-charcoal placeholder-muted/60 text-sm focus:outline-none focus:border-blush focus:ring-2 focus:ring-blush/20 transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-blush text-white text-sm tracking-[0.2em] uppercase hover:bg-blush-dark transition-all duration-300 hover:shadow-lg hover:shadow-blush/30 disabled:opacity-70 cursor-pointer"
                >
                  {loading ? "Sending..." : "Request Appointment"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
