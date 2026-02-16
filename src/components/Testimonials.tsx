import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Software Engineer, Bangalore',
    avatar: 'AM',
    rating: 5,
    text: 'The algo trading module completely changed my approach. I now have backtested strategies and a clear framework for execution. Highly structured and practical.',
  },
  {
    name: 'Priya Sharma',
    role: 'MBA Student, Delhi',
    avatar: 'PS',
    rating: 5,
    text: 'As a complete beginner, I found the curriculum incredibly well-organized. The risk management focus gave me real confidence before putting money in the markets.',
  },
  {
    name: 'Rohit Kapoor',
    role: 'Business Owner, Mumbai',
    avatar: 'RK',
    rating: 5,
    text: 'The Forex module opened up global markets for me. The live simulations were game-changing. Worth every rupee invested in this education.',
  },
  {
    name: 'Sneha Reddy',
    role: 'CA Professional, Hyderabad',
    avatar: 'SR',
    rating: 4,
    text: 'Perfect for working professionals. Self-paced videos plus weekend live sessions - I never felt rushed. The community support is outstanding.',
  },
  {
    name: 'Vikram Singh',
    role: 'Full-Time Trader, Jaipur',
    avatar: 'VS',
    rating: 5,
    text: 'I transitioned from random trading to systematic strategies after this course. The mentorship and strategy frameworks are top-notch.',
  },
  {
    name: 'Ananya Joshi',
    role: 'Data Analyst, Pune',
    avatar: 'AJ',
    rating: 5,
    text: 'The combination of technical analysis and psychology modules is what sets this apart. I finally understand why I was making emotional trading mistakes.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute right-1/4 top-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-400 bg-forest-500/10 border border-forest-500/20 mb-6">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            What Our{' '}
            <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Real feedback from real learners who have transformed their trading journey with us.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="section-animate group relative p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-forest-500/20 mb-4" />

              {/* Text */}
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-gold-400 fill-gold-400'
                        : 'text-white/10'
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-500/30 to-gold-500/30 flex items-center justify-center text-xs font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/40">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
