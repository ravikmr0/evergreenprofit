import {
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
  BarChart3,
  Shield,
  Users,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
interface HeroProps {
  onEnrollClick?: () => void;
}

export default function Hero({ onEnrollClick }: HeroProps) {
  const handleEnrollClick = () => {
    onEnrollClick?.();
  };
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Trade with Confidence.',
    'Master Algo Trading.',
    'Build Your Portfolio.',
    'Achieve Financial Freedom.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-navy-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-1.5s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-forest-500/20 text-sm">
              <div className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
              <span className="text-forest-300 font-medium">New Batch Starting Soon</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Build Consistent Skills.{' '}
                <span className="gradient-text block mt-2">
                  <motion.span
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {texts[currentText]}
                  </motion.span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed">
                Professional training in Algo Trading, Index Options, Forex & Crypto with structured mentorship and real-market strategies.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleEnrollClick}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold text-base hover:from-forest-400 hover:to-forest-500 transition-all duration-300 shadow-xl shadow-forest-500/25 hover:shadow-forest-500/40 hover:-translate-y-0.5 cursor-pointer border-0"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl glass text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
              <a
                href="https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20talk%20to%20an%20advisor%20about%20your%20trading%20programs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gold-500/30 text-gold-300 font-semibold text-base hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to an Advisor
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: CheckCircle2, text: 'Structured Curriculum' },
                { icon: BarChart3, text: 'Practical Learning' },
                { icon: Users, text: 'Community Support' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white/50">
                  <badge.icon className="w-4 h-4 text-forest-400" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - 3D Portfolio Chart */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Main card with 3D effect */}
            <motion.div 
              className="relative w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-forest-500/20 via-transparent to-gold-500/20 blur-xl" />
              
              <div 
                className="relative glass-strong rounded-3xl p-8 space-y-6 hover:scale-105 transition-transform duration-500"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                }}
              >
                {/* Portfolio header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/40 font-medium">Portfolio Growth</p>
                    <motion.p 
                      className="text-3xl font-bold gradient-text-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      +42.8%
                    </motion.p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-forest-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-forest-400" />
                  </div>
                </div>

                {/* 3D Chart visualization */}
                <div className="relative h-32" style={{ perspective: '800px' }}>
                  <div className="flex items-end justify-center gap-3 h-full">
                    {[
                      { height: 40, delay: 0 },
                      { height: 55, delay: 0.1 },
                      { height: 35, delay: 0.2 },
                      { height: 70, delay: 0.3 },
                      { height: 50, delay: 0.4 },
                      { height: 85, delay: 0.5 },
                      { height: 60, delay: 0.6 },
                      { height: 90, delay: 0.7 },
                      { height: 75, delay: 0.8 },
                      { height: 95, delay: 0.9 },
                    ].map((bar, i) => (
                      <motion.div
                        key={i}
                        className="relative w-8 rounded-t-lg bg-gradient-to-t from-forest-600/80 via-forest-500 to-forest-400 shadow-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${bar.height}%`, opacity: 1 }}
                        transition={{ 
                          delay: bar.delay, 
                          duration: 0.6,
                          ease: 'easeOut'
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: `translateZ(${i * 5}px) rotateY(${i * 2}deg)`,
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(52, 211, 153, 0.9)',
                        }}
                      >
                        {/* 3D depth effect */}
                        <div 
                          className="absolute top-0 -right-1 w-1 h-full bg-forest-700/50"
                          style={{ transform: 'rotateY(90deg) translateX(0.5px)' }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-full h-px bg-white/5" />
                    ))}
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                  {[
                    { label: 'Win Rate', value: '72%' },
                    { label: 'Strategies', value: '15+' },
                    { label: 'Students', value: '2K+' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label} 
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/40">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl shadow-black/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Shield className="w-5 h-5 text-forest-400" />
                <span className="text-xs font-semibold text-white">Risk Managed</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl shadow-black/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                <span className="text-xs font-semibold text-white">Verified Results</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
