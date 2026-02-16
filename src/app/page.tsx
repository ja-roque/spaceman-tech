import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Nearshore from "@/components/Nearshore";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WaveDivider fillColor="#f5f0eb" bgColor="#0d0d0d" variant={1} />
      <Services />
      <WaveDivider fillColor="#ede8e0" bgColor="#f5f0eb" variant={2} />
      <Portfolio />
      <WaveDivider fillColor="#f2e6d0" bgColor="#ede8e0" variant={3} />
      <Nearshore />
      <WaveDivider fillColor="#d4e5f7" bgColor="#f2e6d0" variant={1} />
      <About />
      <WaveDivider fillColor="#0d0d0d" bgColor="#d4e5f7" variant={2} />
      <Contact />
      <Footer />
    </main>
  );
}
