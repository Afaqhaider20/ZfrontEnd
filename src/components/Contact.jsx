import { useRef, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import PrivacyPolicy from "./PrivacyPolicy";
import Heading from "./Heading";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  useEffect(() => {
    if (showPrivacyPolicy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacyPolicy]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate email sending
    setTimeout(() => {
      setIsSent(true);
      setIsLoading(false);
      form.current.reset();
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 2000);
  };

  const handleAgree = () => {
    setIsPrivacyChecked(true);
    setShowPrivacyPolicy(false);
  };

  return (
    <Fade>
      <div className="max-w-screen-lg mx-auto p-6 my-12 bg-white shadow-lg rounded-lg">
        <Heading title="Get In Touch" subtitle="Contact Us" />
        <form ref={form} onSubmit={sendEmail} className="px-10 pt-8 pb-8">
          <div className="mb-6" name="contact" id="contact">
            <label
              htmlFor="user_email"
              className="mb-1 block text-base font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 sm:w-1/2 order-1 sm:order-2">
              <label
                htmlFor="user_phone"
                className="mb-1 block text-base font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                required
              />
            </div>
            <div className="w-full px-3 sm:w-1/2 order-2 sm:order-1">
              <label
                htmlFor="user_name"
                className="mb-1 block text-base font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                required
              />
            </div>
          </div>
          <div className="w-full mb-6">
            <label
              className="mb-1 block text-base font-medium text-gray-700"
              htmlFor="user_message"
            >
              Message
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows="4"
              placeholder="Enter your message"
              className="resize-none w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                required
                checked={isPrivacyChecked}
                onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
              />
              <span className="ml-2 text-gray-700">
                I agree to receive SMS messages. For details, refer to our{" "}
                <button
                  type="button"
                  className="text-blue-600 underline"
                  onClick={() => setShowPrivacyPolicy(true)}
                >
                  Privacy Policy
                </button>
                .
              </span>
            </label>
          </div>
          <div className="mt-4 text-center">
            <Fade>
              <button
                type="submit"
                value="Send"
                className="mb-3 inline-flex h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </Fade>
            {isSent && (
              <p className="text-green-500 mt-1">
                Message sent successfully, Thank you!
              </p>
            )}
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </div>
        </form>
        {showPrivacyPolicy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[50vh] mt-8 mb-8">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowPrivacyPolicy(false)}
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
              <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} onAgree={handleAgree} />
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
};

export default Contact;
