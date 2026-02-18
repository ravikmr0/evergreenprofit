import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-6 px-8 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-3xl font-bold">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-purple-700/50 p-2 rounded-full transition-all duration-300 hover:rotate-90"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Evergreen Profit Stock Market Learning Academy</strong> respects your privacy.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
            <li>We collect basic information such as name, email, and contact number only for course communication and support.</li>
            <li>Your personal information will never be sold, rented, or shared with third parties.</li>
            <li>Payment transactions are processed through secure third-party gateways.</li>
            <li>We use appropriate security measures to protect your data.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6">
            By using our website and services, you consent to our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
