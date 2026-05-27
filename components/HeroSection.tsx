"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const easeOut = [0.0, 0.0, 0.2, 1.0] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blush/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blush/15 blur-3xl pointer-events-none" />

      {/* Horizontal line accents */}
      <div className="absolute top-1/3 left-0 w-32 h-px bg-blush/40" />
      <div className="absolute top-1/3 right-0 w-32 h-px bg-blush/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <FadeUp delay={0.2}>
          <p className="text-xs tracking-[0.4em] text-blush-dark uppercase mb-6">
            Professional Makeup Artist
          </p>
        </FadeUp>

        {/* Main heading */}
        <FadeUp delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-charcoal leading-[1.05] mb-4">
            Sandhya
          </h1>
        </FadeUp>

        <FadeUp delay={0.55}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-blush-dark uppercase mb-8">
            Makeover
          </h2>
        </FadeUp>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
          className="w-20 h-px bg-blush mx-auto mb-8 origin-center"
        />

        {/* Tagline */}
        <FadeUp delay={0.8}>
          <p className="text-base md:text-lg text-muted font-light tracking-wide max-w-lg mx-auto mb-12">
            Where beauty meets artistry — enhancing your natural glow for every occasion.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={1.0}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-full bg-blush text-white text-sm tracking-[0.2em] uppercase hover:bg-blush-dark transition-all duration-300 hover:shadow-lg hover:shadow-blush/30 hover:-translate-y-0.5"
            >
              Book an Appointment
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-full border border-blush text-blush text-sm tracking-[0.2em] uppercase hover:bg-blush/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Portfolio
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToPortfolio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/60 hover:text-blush transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
