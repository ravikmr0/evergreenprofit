import {
  Target,
  BookOpen,
  BarChart3,
  Shield,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Industry-Focused Approach',
    description: 'Practical, real-market strategies — not just textbook theory.',
  },
  {
    icon: BookOpen,
    title: 'Beginner-Friendly Modules',
    description: 'Structured step-by-step learning from absolute basics to advanced.',
  },
  {
    icon: BarChart3,
    title: 'Real Market Case Studies',
    description: 'Learn from actual trades, historical data, and live market analysis.',
  },
  {
    icon: Shield,
    title: 'Risk & Capital Management',
    description: 'Master position sizing, stop-losses, and portfolio protection strategies.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support Ecosystem',
    description: 'Access mentors, community channels, and ongoing learning resources.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-14 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#071422] to-navy-950" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="section-animate space-y-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-gold-400 bg-gold-500/10 border border-gold-500/20 mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Education That{' '}
                <span className="gradient-text-gold">Delivers Results</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed max-w-md">
                We focus on building skills, not selling dreams. Our approach is grounded in practical knowledge and risk-aware strategies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '2000+', label: 'Students Trained' },
                { value: '95%', label: 'Satisfaction Rate' },
                { value: '50+', label: 'Strategy Templates' },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass rounded-2xl p-4">
                  <p className="text-2xl font-bold gradient-text-gold">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="section-animate group flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-forest-500/20 to-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-5 h-5 text-forest-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{benefit.description}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-forest-500/40 flex-shrink-0 ml-auto mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
