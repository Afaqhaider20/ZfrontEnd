import PropTypes from "prop-types";
import { useState } from "react";

const PrivacyPolicy = ({ onClose, onAgree }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    setIsChecked(true);
    onAgree();
    onClose();
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
      <div className="bg-white p-8 shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[80vh] mt-8 mb-8">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="max-w-lg mb-2 font-sans text-2xl font-bold leading-none tracking-tight text-blue-900 sm:text-3xl md:mx-auto">
            Privacy Policy
          </h2>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100">
            Effective Date: [Insert Date]
          </p>
        </div>
        <div className="text-justify">
          <p className="mb-4 text-base text-blue-900">
            Z Family & Cosmetic Dentistry respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you opt in to receive SMS messages from us.
          </p>
          <p className="mb-4 text-sm text-blue-800">
            <strong>Information We Collect</strong>
            <br />
            When you opt in to receive SMS messages, we collect:
            <br />
            • Your phone number
            <br />
            • Consent to send SMS messages
          </p>
          <p className="mb-4 text-sm text-blue-800">
            <strong>How We Use Your Information</strong>
            <br />
            We use your information to:
            <br />
            • Send you the SMS messages you’ve opted in to receive
            <br />
            • Provide updates, promotions, or other relevant content based on your preferences
          </p>
          <p className="mb-4 text-sm text-blue-800">
            <strong>Sharing Your Information</strong>
            <br />
            We do not share your phone number or SMS opt-in information with third parties for marketing purposes.
          </p>
          <p className="mb-4 text-sm text-blue-800">
            <strong>Your Rights</strong>
            <br />
            You can opt out of receiving SMS messages at any time by replying with “STOP” to any message we send you.
          </p>
          <p className="mb-4 text-sm text-blue-800">
            <strong>Data Security</strong>
            <br />
            We implement reasonable measures to protect your personal information from unauthorized access or disclosure.
          </p>
          <p className="mb-4 text-sm text-blue-800">
            If you have questions or concerns about our privacy practices, contact us at [Insert Contact Information].
          </p>
        </div>
        <div className="mt-4 text-center">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={isChecked}
              onChange={handleAgree}
            />
            <span className="ml-2 text-gray-700">
              I agree to the Privacy Policy
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

PrivacyPolicy.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
};

export default PrivacyPolicy;