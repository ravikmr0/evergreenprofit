import { TrendingUp, Twitter, Youtube, MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
  { name: 'Telegram', icon: MessageCircle, href: '#', color: 'hover:text-sky-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#030a15] to-[#020610] border-t border-white/5">
      {/* Gradient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-forest-400 to-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-none text-white">
                  Evergreen Profit
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-forest-400/70">
                  Academy
                </span>
              </div>
            </a>
            <p className="text-xs text-white/30 text-center md:text-left max-w-xs">
              Building skills, not selling dreams.
            </p>
            {/* Contact Info */}
            <div className="flex flex-col gap-1.5">
              <a href="mailto:info@evergreenprofitacademy.com" className="flex items-center gap-2 text-xs text-white/40 hover:text-forest-400 transition-colors duration-300">
                <Mail className="w-3.5 h-3.5" />
                <span>info@evergreenprofitacademy.com</span>
              </a>
              <a href="tel:+919811659531" className="flex items-center gap-2 text-xs text-white/40 hover:text-forest-400 transition-colors duration-300">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 9811659531</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-forest-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40 hover:bg-white/10 ${social.color} transition-all duration-300 border border-white/5 hover:border-white/10 hover:scale-110`}
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-white/25 font-medium">
              © {new Date().getFullYear()} Evergreen Profit Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/20">
              <span>Made with ❤️ in India</span>
              <span className="hidden sm:inline text-white/10">|</span>
              <span className="text-forest-400/40">Empowering Traders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
