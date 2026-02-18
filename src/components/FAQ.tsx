import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the Evergreen Profit Academy?',
    answer: 'Evergreen Profit Academy is a comprehensive online trading education platform designed to teach practical, market-focused strategies. We focus on real-world trading techniques, risk management, and building sustainable income streams from trading.',
  },
  {
    question: 'Who can join the academy?',
    answer: 'Our programs are designed for beginners and intermediate traders. Whether you\'re just starting out or looking to refine your existing strategies, we have structured modules that cater to all skill levels.',
  },
  {
    question: 'Do I need prior trading experience?',
    answer: 'No experience necessary! Our beginner-friendly modules start from the absolute basics and guide you step-by-step through trading fundamentals, market analysis, and practical strategies.',
  },
  {
    question: 'What trading instruments do you cover?',
    answer: 'We cover multiple trading instruments including stocks, options, futures, forex, and crypto currency , US stock future. Our curriculum is designed to help you understand market dynamics across different asset classes',
  },
  // {
  //   question: 'How long does it take to complete a program?',
  //   answer: 'Program duration varies depending on the course you choose and your learning pace. Most of our foundational programs can be completed in 4-8 weeks with consistent learning and practice.',
  // },
  // {
  //   question: 'Is there mentorship support?',
  //   answer: 'Yes! All our programs include access to our dedicated support ecosystem with mentors, community channels, and ongoing learning resources to help you succeed in your trading journey.',
  // },
  // {
  //   question: 'What if I don\'t see results immediately?',
  //   answer: 'Trading is a skill that requires practice and patience. We focus on building genuine skills and understanding rather than promising quick profits. Our approach is grounded in risk management and sustainable strategies.',
  // },
  // {
  //   question: 'Can I access the course materials multiple times?',
  //   answer: 'Yes! Once enrolled, you have unlimited access to course materials, resources, and updates. You can learn at your own pace and revisit content whenever you need a refresher.',
  // },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-10 lg:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#071422] to-navy-950" />
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 section-animate">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-gold-400 bg-gold-500/10 border border-gold-500/20 mb-4">
            Frequently Asked Questions(FQA)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Common Questions About <span className="gradient-text-gold">Evergreen Profit</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            Learn all about our academy, our training programs, and how we help you become a successful trader.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="section-animate group border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4 group-hover:text-gold-400 transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 pt-0 border-t border-white/5">
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center section-animate">
          <p className="text-white/50 mb-4">Still have questions?</p>
          <a
            href={`https://wa.me/919811659531?text=${encodeURIComponent('Hello! I would like to know more about your learning programs.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
