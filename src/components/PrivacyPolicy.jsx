import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PrivacyPolicy = ({ onClose, onAgree }) => {
  return (
    <motion.div 
      className="text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Privacy Policy</h2>
        <p className="text-sm text-gray-500 mt-1">Z Family and Cosmetic Dentistry</p>
      </div>
      
      <div className="space-y-6 custom-scrollbar pr-2" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#CBD5E0 #EDF2F7'
      }}>
        <p className="text-gray-700 leading-relaxed">
          This Privacy Policy describes how Z Family and Cosmetic Dentistry  
          collects, uses, and discloses your information when you use our services, 
          website, or interact with us through SMS communications.
        </p>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Information Collection and Use</h3>
          <p className="text-gray-700 leading-relaxed">
            We collect personal information when you contact us through our website forms, 
            subscribe to notifications, or otherwise communicate with us.
            This information may include your name, email address, phone number, and any other 
            information you provide to us.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">SMS Communications</h3>
          <p className="text-gray-700 leading-relaxed">
            If you opt-in to receive SMS communications from us, we will use your phone number to 
            send you appointment reminders, dental care tips, special offers, and other service-related 
            messages. We will not share your opt-in to an SMS campaign with any third party for 
            purposes unrelated to providing you with the services of that campaign.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Information Sharing</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>We will not share your opt-in to an SMS campaign with any third party for 
            purposes unrelated to providing you with the services of that campaign.</strong> We may share your 
            Personal Data, including your SMS opt-in or consent status, with third parties 
            that help us provide our messaging services, including but not limited to platform 
            providers, phone companies, and any other vendors who assist us in the delivery of text 
            messages. All of the above categories exclude text messaging originator opt-in data and 
            consent; this information will not be shared with any third parties.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Your Rights</h3>
          <p className="text-gray-700 leading-relaxed">
            You can unsubscribe from our SMS communications at any time by replying &ldquo;STOP&rdquo; to any message 
            you receive from us or by contacting us directly. You can request information about the 
            personal data we hold about you and request correction or deletion of your information.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Contact Information</h3>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or our practices, please contact us at:
            <br />
            <span className="font-medium">Z Family and Cosmetic Dentistry</span>
            <br />
            Email: <a href="mailto:info@zfamilydentistry.com" className="text-blue-600 hover:underline">info@zfamilydentistry.com</a>
            <br />
            Phone: <a href="tel:3865747272" className="text-blue-600 hover:underline">(386)574-7272</a>
          </p>
        </div>
      </div>
      
      <div className="flex justify-end mt-8 pt-4 border-t border-gray-300 gap-4">
        <button
          onClick={onClose}
          className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Close
        </button>
        <button
          onClick={onAgree}
          className="px-5 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 shadow-sm"
        >
          I Agree
        </button>
      </div>
    </motion.div>
  );
};

PrivacyPolicy.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired
};

export default PrivacyPolicy;