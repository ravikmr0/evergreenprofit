import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import LearningExperience from './components/LearningExperience';
import WhoIsThisFor from './components/WhoIsThisFor';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <LearningExperience />
      <WhoIsThisFor />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
