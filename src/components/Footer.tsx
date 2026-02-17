import { TrendingUp, Youtube, Instagram, Linkedin, Send, Facebook, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/evergreenprofit', color: 'hover:text-pink-400' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@evergreenprofit9259', color: 'hover:text-red-400' },
  // { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
  { name: 'Telegram', icon: Send, href: 'https://t.me/evergreen_forex_crypto_trading', color: 'hover:text-sky-400' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100090142026473&mibextid=ZbWKwL', color: 'hover:text-blue-600' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#030a15] to-[#020610] border-t border-white/5">
      {/* Gradient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/evergreenn.png" 
                alt="Evergreen Profit Academy Logo" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight leading-none text-white">
                  Evergreen Profit
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-forest-400/70">
                  Stock Market Learning Academy
                </span>
              </div>
            </a>
            <p className="text-sm text-white/40 text-center md:text-left max-w-sm leading-relaxed">
              Building skills, not selling dreams. Your trusted partner in mastering trading and building sustainable wealth.
            </p>
            {/* Contact Info */}
            <div className="flex flex-col gap-2 mt-2">
              <a href="mailto:profitevergreen@gmail.com" className="flex items-center gap-2.5 text-xs text-white/50 hover:text-forest-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>profitevergreen@gmail.com</span>
              </a>
              <a href="tel:+919811659531" className="flex items-center gap-2.5 text-xs text-white/50 hover:text-forest-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+91 9811659531</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-bold text-white tracking-wide">Quick Links</h3>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-forest-400 hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-sm font-bold text-white tracking-wide">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40 hover:bg-white/10 ${social.color} transition-all duration-300 border border-white/5 hover:border-white/10 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Bar */}
        <div className="pt-5">
          <div className="flex flex-col items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="#terms" className="text-xs font-medium text-white/50 hover:text-forest-400 transition-colors duration-300">
                Terms & Conditions
              </a>
              <span className="text-white/20">•</span>
              <a href="#privacy" className="text-xs font-medium text-white/50 hover:text-forest-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#refund" className="text-xs font-medium text-white/50 hover:text-forest-400 transition-colors duration-300">
                Refund Policy
              </a>
            </div>
            
            {/* Copyright & Tagline */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-white/30">
              <p className="font-medium">
                © {new Date().getFullYear()} Evergreen Profit Academy. All rights reserved.
              </p>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Made with ❤️ in India</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="text-forest-400/50">Empowering Traders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
