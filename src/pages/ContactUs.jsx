import ContactForm from "../components/Contact";
import { Fade } from "react-awesome-reveal";

const ContactUs = () => {
  return (
    <div className="bg-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white pt-28 pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/Images/backgroundTexture.jpg)` }}
        >
          <div className="absolute inset-0 bg-blue-700 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              We are here to help you with any questions or concerns you may have. Reach out to us and we will get back to you as soon as possible.
            </p>
          </Fade>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;