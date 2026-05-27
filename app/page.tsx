import Navbar              from "@/components/Navbar";
import HeroSection          from "@/components/HeroSection";
import PortfolioSection     from "@/components/PortfolioSection";
import AboutSection         from "@/components/AboutSection";
import TestimonialsSection  from "@/components/TestimonialsSection";
import BookingSection       from "@/components/BookingSection";
import Footer               from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
