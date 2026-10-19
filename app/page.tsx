import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedMenu from "@/components/home/FeaturedMenu"; 
import TodaysSpecial from "@/components/home/TodaysSpecial";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import ReservationCTA from "@/components/home/ReservationCTA";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedMenu />
      <TodaysSpecial />
      <Testimonials />
      <Gallery />
      <ReservationCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}