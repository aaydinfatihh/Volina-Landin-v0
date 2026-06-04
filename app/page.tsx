import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";
import DashboardShowcase from "@/components/DashboardShowcase";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Numbers from "@/components/Numbers";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Testimonial />
      <Partners />
      <DashboardShowcase />
      <HowItWorks />
      <Features />
      <Numbers />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
