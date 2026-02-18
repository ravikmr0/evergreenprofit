import { X } from 'lucide-react';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsAndConditions({ isOpen, onClose }: TermsAndConditionsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-8 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-3xl font-bold">Terms & Conditions</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-700/50 p-2 rounded-full transition-all duration-300 hover:rotate-90"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            By enrolling in our courses or services, you agree to the following terms:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
            <li>All content provided is strictly for <strong>educational purposes only</strong>.</li>
            <li>We do not provide investment advisory or guaranteed profit services.</li>
            <li>Trading in stock, options, crypto, and derivatives involves market risk.</li>
            <li>Users are responsible for their own trading decisions.</li>
            <li>Course materials, videos, and strategies are intellectual property of Evergreen Profit Academy and cannot be copied, shared, or redistributed without permission.</li>
            <li>Fees once paid are non-transferable and non-refundable.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
