import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/evergreenprofit',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>,
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/@evergreenprofit9259',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>,
  },
  { 
    name: 'LinkedIn', 
    href: '#',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>,
  },
  { 
    name: 'Telegram', 
    href: 'https://t.me/evergreen_forex_crypto_trading',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>,
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/profile.php?id=100090142026473&mibextid=ZbWKwL',
    svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>,
  },
];

const quickLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Refund Policy', href: '#refund' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#020810]">
      {/* Subtle top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-forest-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand / About */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3 group w-fit">
              <img 
                src="/evergreenn.png" 
                alt="Evergreen Profit Academy Logo" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-none text-white">
                  Evergreen Profit
                </span>
                <span className="text-[8px] font-semibold tracking-[0.2em] uppercase text-forest-400/60 mt-0.5">
                  Stock Market Academy
                </span>
              </div>
            </a>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-xs">
              Building skills, not selling dreams. Your trusted partner in mastering trading and building sustainable wealth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-forest-500/20 hover:border-forest-500/30 transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                  title={social.name}
                >
                  <span className="w-4 h-4 flex items-center justify-center">{social.svg}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-[13px] text-white/35 hover:text-forest-400 transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest-400" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:profitevergreen@gmail.com" className="flex items-start gap-2.5 text-[13px] text-white/35 hover:text-forest-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-forest-500/50" />
                  <span>profitevergreen@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919811659531" className="flex items-start gap-2.5 text-[13px] text-white/35 hover:text-forest-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-forest-500/50" />
                  <span>+91 9811659531</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-[13px] text-white/35">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-forest-500/50" />
                  <span>India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/35 hover:text-forest-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/25 font-medium">
              © {new Date().getFullYear()} Evergreen Profit Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/25">
              <span>Made with ❤️ in India</span>
              <span className="text-white/10">·</span>
              <span className="text-forest-400/40 font-medium">Empowering Traders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
