import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Products />
      <Features />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
