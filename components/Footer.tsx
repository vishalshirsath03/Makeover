"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// Inline Instagram SVG (not available in this version of lucide-react)
function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="text-xl font-semibold tracking-widest uppercase">Sandhya</p>
              <p className="text-xs tracking-[0.3em] text-blush uppercase">Makeover</p>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Professional makeup artist dedicated to enhancing your natural beauty for every occasion.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-[0.3em] text-blush uppercase mb-5">Quick Links</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-blush text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Instagram */}
          <div>
            <p className="text-xs tracking-[0.3em] text-blush uppercase mb-5">Connect</p>
            <p className="text-white/60 text-sm mb-1">hello@sandhyamakeover.com</p>
            <p className="text-white/60 text-sm mb-6">+91 98765 43210</p>

            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 hover:border-blush hover:bg-blush/10 transition-all duration-300 group"
            >
              <InstagramIcon size={18} className="text-blush" />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                @sandhyamakeover
              </span>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Sandhya Makeover. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Made with <Heart size={12} className="text-blush fill-blush" /> for beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
