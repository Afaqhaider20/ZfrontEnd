import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TermsConditions = ({ onClose, onAgree }) => {
  return (
    <motion.div 
      className="text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Terms & Conditions</h2>
        <p className="text-sm text-gray-500 mt-1">Z Family and Cosmetic Dentistry</p>
      </div>
      
      <div className="space-y-6 custom-scrollbar pr-2" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#CBD5E0 #EDF2F7'
      }}>
        <p className="text-gray-700 leading-relaxed">
          These Terms & Conditions govern your use of services provided by Z Family and Cosmetic Dentistry.
          By using our website or engaging with our SMS communications, you agree to these terms.
        </p>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">SMS Terms</h3>
          <p className="text-gray-700 leading-relaxed">
            If you consent to receive SMS from Z Family and Cosmetic Dentistry, you agree to receive 
            appointment reminders, dental care tips, promotional offers, and service updates via SMS from us. 
            Reply STOP to unsubscribe; Reply HELP for help; msg & data rates may apply; Messaging frequency may vary. 
            Consent is not required as a condition of purchasing any goods or services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Appointment Policy</h3>
          <p className="text-gray-700 leading-relaxed">
            We may send SMS reminders for scheduled appointments. While we make every effort to ensure 
            the accuracy of these reminders, it remains your responsibility to remember your appointments.
            Cancellations should be made at least 24 hours in advance to avoid any cancellation fees.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Disclaimers</h3>
          <p className="text-gray-700 leading-relaxed">
            The content of our messages is for informational purposes only and should not be considered 
            medical advice. Any dental advice provided via text is general and should not replace 
            proper dental consultation. Always consult with your dentist for specific dental concerns.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Limitation of Liability</h3>
          <p className="text-gray-700 leading-relaxed">
            Z Family and Cosmetic Dentistry is not liable for any damages or issues arising from your 
            use of our SMS service or reliance on information provided through SMS communications.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Changes to Terms</h3>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of our services 
            after such modifications constitutes your consent to the updated terms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Contact Information</h3>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about these Terms & Conditions, please contact us at:
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

TermsConditions.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
};

export default TermsConditions;
