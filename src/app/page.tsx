import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Fleet from '@/components/Fleet';
import HowItWorks from '@/components/Howitworks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsapp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
