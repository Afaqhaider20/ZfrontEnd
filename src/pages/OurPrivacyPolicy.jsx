const PrivacyPolicy = () => {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-900">
              Privacy Policy
            </h2>
            <p className="mt-2 text-sm text-blue-700">
              Effective Date: 01/01/2025
            </p>
          </div>
          <div className="mt-6 text-gray-800 space-y-6">
            <p>
              Z Family & Cosmetic Dentistry respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and share information when you
              opt in to receive text messages from us.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Information We Collect
              </h3>
              <ul className="list-disc list-inside">
                <li>Your phone number</li>
                <li>Consent to send text messages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                How We Use Your Information
              </h3>
              <ul className="list-disc list-inside">
                <li>Send you the text messages you’ve opted in to receive</li>
                <li>Provide updates, promotions, or other relevant content</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Sharing Your Information
              </h3>
              <p>
                We do not share your phone number or text opt-in information with
                third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Your Rights</h3>
              <p>
                You can opt out of receiving text messages at any time by replying
                with “STOP” to any message we send you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Data Security
              </h3>
              <p>
                We implement reasonable measures to protect your personal
                information from unauthorized access or disclosure.
              </p>
            </div>
            <p>
              If you have questions or concerns about our privacy practices,
              contact us at (386) 574-7272.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
