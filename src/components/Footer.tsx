import { TrendingUp } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'About Us', href: '#' },
    { label: 'Programs', href: '#programs' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Programs: [
    { label: 'Algo Trading', href: '#programs' },
    { label: 'Forex Academy', href: '#programs' },
    { label: 'Crypto Course', href: '#programs' },
    { label: 'Evergreen Profit Course', href: '#programs' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Disclaimer', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#030a15] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-400 to-gold-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none text-white">
                  Evergreen Profit
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-forest-400/80">
                  Academy
                </span>
              </div>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Professional trading education for the modern Indian trader. Building skills, not selling dreams.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'YouTube', 'Telegram', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-xs text-white/40 hover:bg-white/10 hover:text-white/70 transition-all border border-white/5"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="glass rounded-2xl p-6 mb-8">
            <h4 className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-3">
              ⚠️ Risk Disclaimer
            </h4>
            <p className="text-xs text-white/30 leading-relaxed">
              Trading in financial markets involves significant risk and is not suitable for all investors. The content provided by Evergreen Profit Academy is for educational purposes only and should not be considered as financial or investment advice. Past performance does not guarantee future results. You should carefully consider your financial situation and risk tolerance before engaging in any trading activity. Never trade with money you cannot afford to lose. Evergreen Profit Academy does not guarantee any specific returns or income from trading activities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Evergreen Profit Academy. All rights reserved.
            </p>
            <p className="text-xs text-white/20">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
