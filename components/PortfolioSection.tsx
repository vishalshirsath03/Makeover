"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";

const categories = ["All", "Bridal", "Party", "Editorial", "Natural"];

// Placeholder portfolio items with gradient backgrounds (replace src with real images)
const portfolioItems = [
  { id: 1, category: "Bridal",    label: "Bridal Glam",       bg: "from-rose-100 to-pink-200",    span: "col-span-1 row-span-2" },
  { id: 2, category: "Party",     label: "Evening Party",      bg: "from-pink-100 to-rose-200",    span: "col-span-1 row-span-1" },
  { id: 3, category: "Editorial", label: "Editorial Look",     bg: "from-fuchsia-100 to-pink-200", span: "col-span-1 row-span-1" },
  { id: 4, category: "Natural",   label: "Dewy Natural",       bg: "from-amber-50 to-rose-100",    span: "col-span-1 row-span-1" },
  { id: 5, category: "Bridal",    label: "Traditional Bridal", bg: "from-red-100 to-pink-200",     span: "col-span-1 row-span-1" },
  { id: 6, category: "Party",     label: "Cocktail Ready",     bg: "from-pink-200 to-rose-300",    span: "col-span-1 row-span-2" },
  { id: 7, category: "Natural",   label: "Everyday Glow",      bg: "from-orange-50 to-pink-100",   span: "col-span-1 row-span-1" },
  { id: 8, category: "Editorial", label: "Bold Editorial",     bg: "from-fuchsia-200 to-rose-200", span: "col-span-1 row-span-1" },
];

function PortfolioCard({
  item,
  onClick,
  index,
}: {
  item: (typeof portfolioItems)[0];
  onClick: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      onClick={onClick}
      className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} aspect-square`}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-blush/0 group-hover:bg-blush/20 transition-all duration-400 z-10" />

      {/* Decorative inner pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-24 h-24 rounded-full border border-white/60" />
        <div className="absolute w-16 h-16 rounded-full border border-white/40" />
      </div>

      {/* Makeup icon */}
      <div className="absolute inset-0 flex items-center justify-center text-white/40 text-6xl">
        💄
      </div>

      {/* Label on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
          <p className="text-xs tracking-widest uppercase text-blush-dark font-medium">{item.category}</p>
          <p className="text-sm text-charcoal font-light mt-0.5">{item.label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [active, setActive]     = useState("All");
  const [selected, setSelected] = useState<(typeof portfolioItems)[0] | null>(null);

  const filtered =
    active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-blush-dark uppercase mb-4">My Work</p>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight mb-4">
            Portfolio
          </h2>
          <div className="w-12 h-px bg-blush mx-auto mb-6" />
          <p className="text-muted font-light max-w-md mx-auto">
            Every face tells a story. Here are some of the looks I&apos;ve had the honour of creating.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                active === cat
                  ? "bg-blush text-white shadow-md shadow-blush/30"
                  : "border border-blush/40 text-muted hover:border-blush hover:text-blush-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => setSelected(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${selected.bg} shadow-2xl`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/30 text-9xl">
                💄
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm">
                <p className="text-xs tracking-widest uppercase text-blush-dark">{selected.category}</p>
                <p className="text-xl text-charcoal font-light mt-1">{selected.label}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
              >
                <X size={18} className="text-charcoal" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
