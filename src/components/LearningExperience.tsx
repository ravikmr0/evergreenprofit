import {
  Play,
  Video,
  Users,
  FileText,
  Layers,
  RefreshCcw,
} from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'HD Video Modules',
    description: 'Self-paced, professionally recorded lessons covering every concept in depth.',
  },
  {
    icon: Play,
    title: 'Live Trading Sessions',
    description: 'Weekly live sessions with real-time market analysis and Q&A.',
  },
  {
    icon: FileText,
    title: 'Assignments & Quizzes',
    description: 'Reinforce learning with hands-on assignments and progress assessments.',
  },
  {
    icon: Layers,
    title: 'Strategy Frameworks',
    description: 'Ready-to-use templates and frameworks for building your own trading systems.',
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Join an active peer community for discussions, ideas, and support.',
  },
  {
    icon: RefreshCcw,
    title: 'Lifetime Updates',
    description: 'Get ongoing course updates as markets evolve — no extra cost.',
  },
];

export default function LearningExperience() {
  return (
    <section id="experience" className="relative py-10 lg:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute left-1/4 top-1/2 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-400 bg-forest-500/10 border border-forest-500/20 mb-4">
            Learning Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            A Complete{' '}
            <span className="gradient-text">Learning Ecosystem</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Everything you need to go from curious beginner to confident trader — all in one platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="section-animate group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-forest-500/20 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-forest-500/10 flex items-center justify-center mb-4 group-hover:bg-forest-500/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-forest-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
