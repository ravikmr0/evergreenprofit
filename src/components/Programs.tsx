import {
  Bot,
  Globe2,
  GraduationCap,
  ArrowRight,
  Cpu,
  LineChart,
  BookOpen,
} from 'lucide-react';

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
    cta: 'Learn More',
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
    cta: 'View Curriculum',
  },
  {
    icon: GraduationCap,
    accent: BookOpen,
    title: 'Evergreen Profit Course',
    subtitle: 'Paid Professional Program',
    description:
      'A step-by-step professional roadmap from basics to advanced strategies. The complete system for building a sustainable trading career.',
    features: ['Basics to Advanced', 'Professional Roadmap', 'Strategy Building', 'Mentorship'],
    gradient: 'from-gold-500/20 to-gold-600/5',
    borderColor: 'border-gold-500/20 hover:border-gold-400/40',
    iconBg: 'bg-gold-500/10',
    iconColor: 'text-gold-400',
    cta: 'Join Now',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-forest-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-400 bg-forest-500/10 border border-forest-500/20 mb-6">
            Programs Offered
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Choose Your{' '}
            <span className="gradient-text">Trading Path</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Structured programs designed for every level — from curious beginners to aspiring professional traders.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`section-animate group relative rounded-2xl border ${program.borderColor} bg-gradient-to-br ${program.gradient} backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8 space-y-6">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${program.iconBg} flex items-center justify-center`}>
                    <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                  </div>
                  <program.accent className={`w-5 h-5 ${program.iconColor} opacity-30`} />
                </div>

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

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${program.iconColor} group-hover:gap-3 transition-all duration-300`}
                >
                  {program.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
