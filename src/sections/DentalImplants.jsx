import { Fade } from "react-awesome-reveal";
import FAQs from "../components/FAQs";

const DentalImplants = () => {
  const faqs = [
    {
      question: "What are dental implants made of?",
      answer:
        "Dental implants are typically made of titanium, a biocompatible material that fuses with the jawbone.",
    },
    {
      question: "Are dental implants painful?",
      answer:
        "Most patients report minimal discomfort during the procedure and recovery period, thanks to modern anesthesia techniques.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care, dental implants can last a long time, making them a cost-effective, long-term solution.",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header
        className="relative bg-blue-700 text-white py-16 px-6"
        style={{ backgroundImage: `url(/Images/backgroundTexture.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: "overlay" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">
              Dental Implants
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Restore your smile with durable and natural-looking dental implants.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
  <a
    href="https://book2.getweave.com/c0e939c8-ae93-4574-9323-84a1c55e8447/request-appointment?source=WEBSITE"
    target="_blank"
    rel="noopener noreferrer"
    className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 py-2 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900"
  >
    Book Appointment
  </a>
  <a
    href="tel:1234567890"
    className="font-bold text-white flex items-center text-lg"
  >
    Call (386) 574-7272
  </a>
</div>
          </Fade>
        </div>
      </header>
      {/* What Are Dental Implants Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
              What Are Dental Implants?
            </h2>
            <p className="text-lg text-center mb-6">
              Dental implants are the most advanced long-term solution for missing teeth. Each
              implant consists of three parts: the implant itself, which fuses with your
              jawbone; the connector, which holds the crown; and the crown itself, designed to
              look and function just like a natural tooth.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="w-10/12 h-80 flex items-center justify-center rounded-md mb-8 overflow-hidden mx-auto">
              <img src="/Images/DI/di1.avif" alt="Implant Diagram" className="w-full h-full object-cover" />
            </div>
          </Fade>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Discover the Benefits of Dental Implants
            </h2>
          </Fade>
          <Fade direction="up">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Improved oral health—preventing bone loss and maintaining jaw structure.</li>
              <li>Natural appearance—implants seamlessly match your existing teeth.</li>
              <li>Comfortable and secure—no slipping or discomfort during daily activities.</li>
              <li>Durable—implants can last for decades with proper care.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* Affordable Options Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Your Affordable Implant Options
            </h2>
            <p className="text-lg text-center mb-6">
              Experience life-changing benefits at half the cost of traditional options. Our
              durable titanium implants snap securely into place without adhesives, giving you
              the confidence to eat, smile, and live freely.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="w-10/12 h-80 flex items-center justify-center rounded-md mb-8 overflow-hidden mx-auto">
              <img src="/Images/DI/di2.avif" alt="Secure Fit" className="w-full h-full object-cover" />
            </div>
          </Fade>
        </div>
      </section>
      {/* Explore Other Options Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Explore Other Implant Options
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-6">
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Single Tooth Implant</h3>
                <p className="text-gray-700 mb-4">
                  Replace a single missing tooth with a natural-looking, functional implant.
                </p>
                <div className="w-full h-48 flex items-center justify-center rounded-md overflow-hidden">
                  <img src="/Images/DI/di3.jpg" alt="Single Tooth Implant" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Implant Bridge</h3>
                <p className="text-gray-700 mb-4">
                  Replace multiple missing teeth while preserving your jaw structure.
                </p>
                <div className="w-full h-48 flex items-center justify-center rounded-md overflow-hidden">
                  <img src="/Images/DI/di4.png" alt="Implant Bridge" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Full Fixed Arch Implants</h3>
                <p className="text-gray-700 mb-4">
                  Restore an entire upper or lower arch of teeth with fixed, durable implants.
                </p>
                <div className="w-full h-48 flex items-center justify-center rounded-md overflow-hidden">
                  <img src="/Images/DI/di5.png" alt="Full Fixed Arch Implants" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQs faqs={faqs} sectionTitle="FAQs about Dental Implants" />
      {/* Footer Section */}
      <footer className="py-8 bg-blue-500 text-white text-center">
        <p className="text-lg">
          Ready to take the next step? Contact us today to schedule your appointment and explore your dental implant options.
        </p>
      </footer>
    </main>
  );
};

export default DentalImplants;
