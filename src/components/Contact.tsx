import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

const experienceLevels = [
  'Complete Beginner',
  'Some Knowledge',
  'Intermediate Trader',
  'Advanced / Professional',
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-400 bg-forest-500/10 border border-forest-500/20 mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Ready to{' '}
            <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Fill out the form below and our team will reach out within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 section-animate space-y-8">
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@evergreenprofitacademy.com',
                  href: 'mailto:info@evergreenprofitacademy.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 9811659531',
                  href: 'tel:+919811659531',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'India (Online Academy)',
                  href: '#',
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-500/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-forest-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium mb-1">{contact.label}</p>
                    <p className="text-sm text-white/80 font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Office hours */}
            <div className="glass rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-semibold text-white">Support Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Mon - Fri</span>
                  <span className="text-white/70">10:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Saturday</span>
                  <span className="text-white/70">10:00 AM – 2:00 PM IST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 section-animate">
            {submitted ? (
              <div className="glass-strong rounded-3xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-forest-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-white/50 max-w-sm mx-auto">
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', phone: '', email: '', experience: '', message: '' });
                  }}
                  className="text-sm text-forest-400 hover:text-forest-300 font-medium mt-4"
                >
                  Submit another inquiry →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-3xl p-8 sm:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-forest-500/50 focus:ring-1 focus:ring-forest-500/25 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-forest-500/50 focus:ring-1 focus:ring-forest-500/25 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-forest-500/50 focus:ring-1 focus:ring-forest-500/25 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={formState.experience}
                    onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-forest-500/50 focus:ring-1 focus:ring-forest-500/25 transition-colors appearance-none"
                  >
                    <option value="" className="bg-navy-900">Select your level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level} className="bg-navy-900">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-forest-500/50 focus:ring-1 focus:ring-forest-500/25 transition-colors resize-none"
                    placeholder="Any specific questions or interests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold text-base hover:from-forest-400 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-500/25 hover:shadow-forest-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
