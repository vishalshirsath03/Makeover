"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Award, Users } from "lucide-react";

const stats = [
  { icon: Users,    value: "500+",  label: "Happy Clients"    },
  { icon: Award,    value: "8+",    label: "Years Experience" },
  { icon: Heart,    value: "100%",  label: "With Love"        },
  { icon: Sparkles, value: "1000+", label: "Looks Created"    },
];

export default function AboutSection() {
  const ref        = useRef(null);
  const statsRef   = useRef(null);
  const inView     = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={ref}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blush-light to-rose-100 aspect-[4/5] flex items-center justify-center shadow-xl shadow-blush/20">
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-blush/20" />
              <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-rose/10" />

              {/* Placeholder portrait area */}
              <div className="relative z-10 text-center">
                <div className="w-40 h-40 rounded-full bg-white/60 border-4 border-white shadow-lg mx-auto flex items-center justify-center text-6xl mb-4">
                  💄
                </div>
                <p className="text-charcoal/60 text-sm tracking-widest uppercase">
                  Sandhya
                </p>
              </div>

              {/* Badge */}
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-lg text-center">
                <p className="text-2xl font-semibold text-blush-dark">8+</p>
                <p className="text-[10px] tracking-widest text-muted uppercase">Years</p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-blush/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center">
                  <Sparkles size={18} className="text-blush-dark" />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Bridal Specialist</p>
                  <p className="text-xs text-muted">& All Occasions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-xs tracking-[0.4em] text-blush-dark uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight mb-4 leading-tight">
              The Artist<br />
              <span className="text-blush-dark">Behind the Brush</span>
            </h2>
            <div className="w-12 h-px bg-blush mb-8" />

            <p className="text-muted font-light leading-relaxed mb-5">
              Hi, I&apos;m Sandhya — a passionate makeup artist with over 8 years of experience
              transforming faces and boosting confidence. I believe every person has a unique
              beauty that deserves to be celebrated.
            </p>
            <p className="text-muted font-light leading-relaxed mb-8">
              From soft, dewy natural looks to bold editorial statements, I tailor every makeup
              experience to your individual features, skin tone, and personality. Whether it&apos;s
              your wedding day, a special occasion, or just because — you deserve to feel
              extraordinary.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Bridal", "Editorial", "Party Glam", "Natural Looks", "HD Makeup", "Airbrush"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-blush-light text-blush-dark text-xs tracking-widest uppercase border border-blush/30"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-blush-dark transition-all duration-300 hover:shadow-lg hover:shadow-blush/30 hover:-translate-y-0.5"
            >
              Let&apos;s Work Together
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="text-center bg-white rounded-2xl p-6 shadow-sm border border-blush/20 hover:shadow-md hover:border-blush/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-blush-dark" />
              </div>
              <p className="text-3xl font-light text-charcoal">{value}</p>
              <p className="text-xs tracking-widest text-muted uppercase mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
