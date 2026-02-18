import { X } from 'lucide-react';

interface RiskDisclaimerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RiskDisclaimer({ isOpen, onClose }: RiskDisclaimerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-8 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-3xl font-bold">Risk Disclaimer</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-700/50 p-2 rounded-full transition-all duration-300 hover:rotate-90"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-5">
          <p className="text-gray-700 leading-relaxed">
            Trading and investing in the stock market, derivatives, options, commodities, and cryptocurrencies involve substantial risk of financial loss.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Evergreen Profit Stock Market Learning Academy provides educational training and learning programs only. We do not provide investment advisory, portfolio management, or guaranteed profit services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Past performance of any strategy or market example does not guarantee future results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All trading decisions taken by students or clients are entirely at their own risk. The academy, its mentors, or representatives will not be responsible for any financial loss incurred.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We strongly recommend consulting a SEBI-registered financial advisor before making any investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
