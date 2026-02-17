import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import LearningExperience from './components/LearningExperience';
import WhoIsThisFor from './components/WhoIsThisFor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EnrollModal from './components/EnrollModal';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar onEnrollClick={() => setEnrollModalOpen(true)} />
      <Hero onEnrollClick={() => setEnrollModalOpen(true)} />
      <Programs />
      <WhyChooseUs />
      <LearningExperience />
      <WhoIsThisFor />
      <Testimonials />
      <FAQ />
      <CTA onEnrollClick={() => setEnrollModalOpen(true)} />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <EnrollModal isOpen={enrollModalOpen} onClose={() => setEnrollModalOpen(false)} />
    </div>
  );
}
