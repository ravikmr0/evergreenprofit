import { X } from 'lucide-react';
import { type ReactNode, useState } from 'react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalShell({
  isOpen,
  onClose,
  title,
  headerClassName,
  children,
}: PolicyModalProps & {
  title: string;
  headerClassName: string;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white">
        <div
          className={`sticky top-0 flex items-center justify-between px-6 py-6 text-white ${headerClassName}`}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white transition-colors hover:bg-black/20"
            aria-label={`Close ${title}`}
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6 px-6 py-8">{children}</div>
      </div>
    </div>
  );
}

export function TermsAndConditionsModal({ isOpen, onClose }: PolicyModalProps) {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Terms & Conditions"
      headerClassName="bg-gradient-to-r from-blue-600 to-blue-800"
    >
      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">1. Agreement to Terms</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          By using this website, you agree to these terms. If you disagree with any part,
          please do not use this service.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">2. Use License</h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          Permission is granted for personal, non-commercial use only. You may not:
        </p>
        <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Modify or copy materials for commercial purposes</li>
          <li>Attempt to reverse engineer software</li>
          <li>Remove copyright or proprietary notices</li>
          <li>Mirror content on other servers</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">3. Disclaimer</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Materials are provided “as is” without warranties of any kind.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">4. Governing Law</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          These terms are governed by applicable law and subject to the jurisdiction of
          competent courts.
        </p>
      </section>
    </ModalShell>
  );
}

export function PrivacyPolicyModal({ isOpen, onClose }: PolicyModalProps) {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Privacy Policy"
      headerClassName="bg-gradient-to-r from-purple-600 to-purple-800"
    >
      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">1. Information We Collect</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          We may collect personal information such as your name, email address, billing
          details, and usage analytics when you interact with our platform.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">2. How We Use Information</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Your information is used to provide services, process payments, improve course
          delivery, and communicate important updates.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">3. Data Security</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          We implement reasonable administrative and technical safeguards to protect your
          data, though no method of transmission is completely secure.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">4. Third-Party Links</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Our site may include links to third-party websites. We are not responsible for
          their privacy practices.
        </p>
      </section>
    </ModalShell>
  );
}

export function RefundPolicyModal({ isOpen, onClose }: PolicyModalProps) {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Refund Policy"
      headerClassName="bg-gradient-to-r from-green-600 to-green-800"
    >
      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">1. Refund Window</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Refund requests are accepted within 30 days of purchase, subject to eligibility.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">2. Eligibility Criteria</h3>
        <ul className="ml-2 list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Request submitted within 30 days of purchase</li>
          <li>Course completion is below the eligible threshold</li>
          <li>Valid purchase details are provided</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-bold text-gray-900">3. Processing Time</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          Approved refunds are usually processed within 7–10 business days to the original
          payment method.
        </p>
      </section>
    </ModalShell>
  );
}

export function PolicyModalsContainer() {
  const [openModal, setOpenModal] = useState<'terms' | 'privacy' | 'refund' | null>(null);

  return (
    <>
      <TermsAndConditionsModal
        isOpen={openModal === 'terms'}
        onClose={() => setOpenModal(null)}
      />
      <PrivacyPolicyModal
        isOpen={openModal === 'privacy'}
        onClose={() => setOpenModal(null)}
      />
      <RefundPolicyModal
        isOpen={openModal === 'refund'}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}
