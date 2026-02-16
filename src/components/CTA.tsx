import { ArrowRight, Phone } from 'lucide-react';

interface CTAProps {
  onEnrollClick?: () => void;
}

export default function CTA({ onEnrollClick }: CTAProps) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#071422] to-navy-950" />
      
      {/* Orbs */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-forest-500/10 rounded-full blur-[150px]" />
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/8 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate text-center glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10">
          {/* Decorative line */}
          <div className="w-16 h-1 bg-gradient-to-r from-forest-400 to-gold-400 rounded-full mx-auto mb-8" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Start Your Trading Education{' '}
            <span className="gradient-text">the Right Way.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of learners who chose structured education over guesswork. Your journey to smarter, disciplined trading starts here.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onEnrollClick}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold text-base hover:from-forest-400 hover:to-forest-500 transition-all duration-300 shadow-xl shadow-forest-500/25 hover:shadow-forest-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Enroll Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/919811659531"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gold-500/30 text-gold-300 font-semibold text-base hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Speak With Counselor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
