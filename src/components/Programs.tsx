import {
  Bot,
  Globe2,
  GraduationCap,
  ArrowRight,
  Cpu,
  LineChart,
  BookOpen,
  Send,
  X,
} from 'lucide-react';
import { useState } from 'react';

const programs = [
  {
    icon: Bot,
    accent: Cpu,
    title: 'ALGO Trading Strategies',
    subtitle: 'Index Option Algo',
    description:
      'Master automated trading logic, back-testing frameworks, risk management systems, and execution platforms for consistent algorithmic performance.',
    features: ['Automated Logic', 'Back-testing', 'Risk Frameworks', 'Execution Systems'],
    gradient: 'from-forest-500/20 to-forest-600/5',
    borderColor: 'border-forest-500/20 hover:border-forest-400/40',
    iconBg: 'bg-forest-500/10',
    iconColor: 'text-forest-400',
    cta: 'Join Telegram',
    link: 'https://t.me/Algo_Profit_Trading',
    thumbnail: 'https://ideogram.ai/assets/image/balanced/response/UILY2qJxTRqTbE38oxc_7g@2k',
  },
  {
    icon: Globe2,
    accent: LineChart,
    title: 'Forex & Crypto Academy',
    subtitle: 'Global Market Mastery',
    description:
      'Understand market structure, technical analysis, trading psychology, and participate in live simulations to build real-world confidence.',
    features: ['Market Structure', 'Technical Analysis', 'Psychology', 'Live Simulations'],
    gradient: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'border-blue-500/20 hover:border-blue-400/40',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    cta: 'Join Telegram',
    link: 'https://t.me/evergreen_forex_crypto_trading',
    thumbnail: 'https://ideogram.ai/assets/image/balanced/response/cTo55E-4SuinLa48t1Q5og@2k',
  },
  {
    icon: GraduationCap,
    accent: BookOpen,
    title: 'Evergreen Profit Course',
    subtitle: 'Paid Course - Professional Program',
    description:
      'A step-by-step professional roadmap from basics to advanced strategies. The complete system for building a sustainable trading career.',
    features: ['Basics to Advanced', 'Professional Roadmap', 'Strategy Building', 'Mentorship'],
    gradient: 'from-gold-500/20 to-gold-600/5',
    borderColor: 'border-gold-500/20 hover:border-gold-400/40',
    iconBg: 'bg-gold-500/10',
    iconColor: 'text-gold-400',
    cta: 'Enroll Now',
    link: 'https://superprofile.bio/evergreenprofit1/NnFYQIHyIx',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  },
];

export default function Programs() {
  const [quotePopup, setQuotePopup] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleGetQuote = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setQuotePopup(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', { program: selectedProgram, ...formData });
    // Handle form submission here
    setQuotePopup(false);
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="programs" className="relative py-10 lg:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-forest-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-400 bg-forest-500/10 border border-forest-500/20 mb-4">
            Programs Offered
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Choose Your{' '}
            <span className="gradient-text">Trading Path</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Structured programs designed for every level — from curious beginners to aspiring professional traders.
          </p>
        </div>

        {/* Telegram Button */}
        <div className="text-center mb-8 section-animate">
          <a
            href="https://t.me/Algo_Profit_Trading"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <Send className="w-5 h-5" />
            Join Free Telegram
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`section-animate group relative rounded-2xl border ${program.borderColor} bg-gradient-to-br ${program.gradient} backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 overflow-hidden`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={program.thumbnail} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-xl ${program.iconBg} backdrop-blur-sm flex items-center justify-center border border-white/10`}>
                    <program.icon className={`w-6 h-6 ${program.iconColor}`} />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Content */}
                <div>
                  <p className={`text-xs font-semibold tracking-wider uppercase ${program.iconColor} mb-2`}>
                    {program.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-lg text-xs font-medium text-white/50 bg-white/5 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  {program.title === 'Evergreen Profit Course' ? (
                    <a
                      href="https://superprofile.bio/evergreenprofit1/zTXuXeaxfC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white ${program.iconBg} border ${program.borderColor} hover:bg-white/10 transition-all duration-300 text-center`}
                    >
                      Paid Course
                    </a>
                  ) : (program.title === 'ALGO Trading Strategies' || program.title === 'Forex & Crypto Academy') ? (
                    <a
                      href="https://superprofile.bio/evergreenprofit/zTXuXeaxfC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white ${program.iconBg} border ${program.borderColor} hover:bg-white/10 transition-all duration-300 text-center`}
                    >
                      Paid Course
                    </a>
                  ) : (
                    <button
                      onClick={() => handleGetQuote(program.title)}
                      className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white ${program.iconBg} border ${program.borderColor} hover:bg-white/10 transition-all duration-300`}
                    >
                      Get Quote
                    </button>
                  )}
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold ${program.iconColor} border ${program.borderColor} hover:bg-white/5 transition-all duration-300`}
                  >
                    {program.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get Quote Popup */}
      {quotePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-md bg-navy-900 border border-forest-500/20 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setQuotePopup(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Get a Quote</h3>
              <p className="text-sm text-white/50">
                Inquiring about: <span className="text-forest-400 font-semibold">{selectedProgram}</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-white/70 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-forest-500/50 focus:bg-white/10 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-forest-500/50 focus:bg-white/10 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-forest-500/50 focus:bg-white/10 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-forest-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-600 hover:to-forest-700 transition-all duration-300 shadow-lg shadow-forest-500/25"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
