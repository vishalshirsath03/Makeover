"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name:    "Priya Sharma",
    role:    "Bride · January 2025",
    stars:   5,
    text:    "Sandhya made me feel absolutely stunning on my wedding day. Her attention to detail and gentle touch made the whole experience magical. I couldn't stop getting compliments!",
    initial: "P",
  },
  {
    name:    "Aishwarya Nair",
    role:    "Party Makeup · March 2025",
    stars:   5,
    text:    "Best makeup artist I've ever been to. She understood exactly what I wanted and delivered a flawless look. My skin felt amazing and the makeup lasted the entire night!",
    initial: "A",
  },
  {
    name:    "Deepika Menon",
    role:    "Engagement · November 2024",
    stars:   5,
    text:    "Sandhya is a true artist. The makeup was perfect for my engagement photos — natural yet glam. She's so warm and professional. I'll only book her from now on!",
    initial: "D",
  },
];

export default function TestimonialsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-blush-dark uppercase mb-4">Kind Words</p>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight mb-4">
            Client Love
          </h2>
          <div className="w-12 h-px bg-blush mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="relative bg-white rounded-3xl p-8 shadow-sm border border-blush/20 hover:shadow-md hover:border-blush/40 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-6 right-6 text-blush/20 group-hover:text-blush/40 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-blush text-blush" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted font-light leading-relaxed text-sm mb-6">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush to-rose flex items-center justify-center text-white font-medium text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
