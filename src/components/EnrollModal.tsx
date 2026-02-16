import { useState } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const experienceLevels = [
  'Complete Beginner',
  'Some Knowledge',
  'Intermediate Trader',
  'Advanced / Professional',
];

export default function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormState({
          name: '',
          phone: '',
          email: '',
          experience: '',
          message: '',
        });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-navy-950 rounded-2xl max-w-md w-full relative border border-gold-500/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-navy-900 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gold-300" />
        </button>

        {submitted ? (
          <div className="p-8 flex flex-col items-center justify-center min-h-[400px] gap-4">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <h3 className="text-xl font-semibold text-white">Thank You!</h3>
            <p className="text-center text-gray-300">
              We've received your enrollment request. Our team will contact you soon.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to Enroll?</h2>
            <p className="text-gray-400 mb-6">
              Fill out the form below and our team will get in touch with you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Trading Experience *
                </label>
                <select
                  name="experience"
                  value={formState.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-gold-500/20 rounded-lg text-white focus:outline-none focus:border-gold-500/50"
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-navy-900 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 resize-none"
                  placeholder="Tell us more about your goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-lg font-semibold text-navy-950 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enroll Now
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
