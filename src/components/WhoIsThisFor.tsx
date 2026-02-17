import {
  UserPlus,
  Briefcase,
  Wallet,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

const personas = [
  {
    icon: UserPlus,
    title: 'New Traders',
    description: 'Starting from zero? Our beginner-friendly modules build your foundation step by step.',
    color: 'text-forest-400',
    bg: 'bg-forest-500/10',
    border: 'border-forest-500/20',
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    description: 'Learn at your own pace with flexible schedules designed for busy professionals.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Wallet,
    title: 'Side-Income Seekers',
    description: 'Build a skill-based secondary income with structured trading strategies.',
    color: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Future Full-Time Traders',
    description: 'Get the complete roadmap to transition into professional trading with confidence.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="relative py-14 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#071422] to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-gold-400 bg-gold-500/10 border border-gold-500/20 mb-4">
            Who Is This For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Designed For{' '}
            <span className="gradient-text-gold">Every Aspiring Trader</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Whether you're just starting out or looking to level up — there's a place for you here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className={`section-animate group text-center p-6 rounded-2xl border ${persona.border} bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${persona.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <persona.icon className={`w-7 h-7 ${persona.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{persona.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-3">{persona.description}</p>
              <CheckCircle2 className={`w-5 h-5 ${persona.color} mx-auto opacity-50`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
