import { X } from 'lucide-react';

interface RefundPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RefundPolicy({ isOpen, onClose }: RefundPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-800 text-white py-6 px-8 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-3xl font-bold">Refund Policy</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-green-700/50 p-2 rounded-full transition-all duration-300 hover:rotate-90"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            All courses, online classes, webinars, and training programs offered by <strong>Evergreen Profit Stock Market Learning Academy</strong> are digital educational services.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Once payment is successfully completed and access is granted to the course, live sessions, or study material, <strong>no refund will be provided under any circumstances</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We encourage all students to understand the course details before enrolling. For any technical issues, our support team will assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
