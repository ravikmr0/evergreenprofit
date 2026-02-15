import {
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
  BarChart3,
  Shield,
  Users,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-forest-500/20 text-sm">
              <div className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
              <span className="text-forest-300 font-medium">New Batch Starting Soon</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Build Consistent Skills.{' '}
                <span className="gradient-text">Trade with Confidence.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed">
                Professional training in Algo Trading, Index Options, Forex & Crypto with structured mentorship and real-market strategies.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold text-base hover:from-forest-400 hover:to-forest-500 transition-all duration-300 shadow-xl shadow-forest-500/25 hover:shadow-forest-500/40 hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl glass text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gold-500/30 text-gold-300 font-semibold text-base hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to an Advisor
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
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

          {/* Right visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Main card */}
            <div className="relative w-full max-w-md">
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-forest-500/20 via-transparent to-gold-500/20 blur-xl" />
              
              <div className="relative glass-strong rounded-3xl p-8 space-y-6">
                {/* Mock chart */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/40 font-medium">Portfolio Growth</p>
                    <p className="text-3xl font-bold gradient-text-gold">+42.8%</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-forest-500/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-forest-400" />
                  </div>
                </div>

                {/* Mini chart bars */}
                <div className="flex items-end gap-2 h-24">
                  {[40, 55, 35, 70, 50, 85, 60, 90, 75, 95, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-forest-600/60 to-forest-400/80 transition-all duration-700"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                  {[
                    { label: 'Win Rate', value: '72%' },
                    { label: 'Strategies', value: '15+' },
                    { label: 'Students', value: '2K+' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 animate-float shadow-xl shadow-black/20">
                <Shield className="w-5 h-5 text-forest-400" />
                <span className="text-xs font-semibold text-white">Risk Managed</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 animate-float shadow-xl shadow-black/20" style={{ animationDelay: '-2s' }}>
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                <span className="text-xs font-semibold text-white">Verified Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
