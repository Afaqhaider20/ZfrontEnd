import { Fade } from "react-awesome-reveal";
import Faq from "../components/FAQs";

const faqData = [
  {
    question: "What are upper dentures?",
    answer:
      "Upper dentures are designed to replace missing teeth in the upper jaw. They are customized for a perfect fit and natural appearance, ensuring functionality and comfort.",
  },
  {
    question: "What are lower dentures?",
    answer:
      "Lower dentures replace missing teeth in the lower jaw. They are crafted to ensure stability and comfort while speaking or eating.",
  },
  {
    question: "What are implant dentures?",
    answer:
      "Implant dentures are secured with dental implants, providing superior stability and functionality. They are ideal for patients seeking a more permanent solution.",
  },
  {
    question: "What are full dentures?",
    answer:
      "Full dentures replace an entire arch of missing teeth, either upper, lower, or both, and are a cost-effective solution to restore functionality and appearance.",
  },
  {
    question: "What are partial dentures?",
    answer:
      "Partial dentures fill the gaps between your existing natural teeth and help restore your smile while preserving the health of your remaining teeth.",
  },
];

const ExploreDentures = () => {
  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Discover the Perfect Denture for You
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              We offer a wide range of denture solutions tailored to meet your
              unique needs. Whether you&apos;re looking for full, partial, or
              implant-supported dentures, we ensure a perfect fit and
              exceptional comfort. Let us help you rediscover the joy of smiling
              confidently.
            </p>
          </Fade>
          <Fade direction="up">
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
      </section>
      {/* Denture Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Types of Dentures We Offer
            </h2>
            <p className="text-center text-gray-700 md:text-lg">
              Our high-quality dentures are designed to restore your smile with
              durability, comfort, and aesthetics in mind. Explore our range of
              options to find the perfect fit for your dental needs.
            </p>
          </Fade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <div className="h-40 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/Images/D/d1.png" alt="Full Dentures" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Full Dentures</h3>
                <p className="mt-4 text-gray-700">
                  Full dentures are perfect for those who need to replace a full
                  arch of teeth. These durable and customizable dentures are
                  designed for optimal comfort and fit, ensuring a confident
                  smile.
                </p>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <div className="h-40 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/Images/D/d2.png" alt="Partial Dentures" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Partial Dentures</h3>
                <p className="mt-4 text-gray-700">
                  Partial dentures are ideal for filling gaps between healthy
                  teeth, maintaining your natural smile, and improving
                  functionality. They blend seamlessly with your existing teeth
                  for a flawless look.
                </p>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <div className="h-40 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/Images/D/d3.png" alt="Implant-Supported Dentures" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">
                  Implant-Supported Dentures
                </h3>
                <p className="mt-4 text-gray-700">
                  Implant-supported dentures offer a secure and long-lasting
                  solution for missing teeth, combining aesthetics with superior
                  functionality for a stable, confident smile.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* Expert Care Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Crafted with Care by Experts
            </h2>
            <p className="mt-6 text-gray-700 md:text-lg">
              Our team of skilled technicians and dentists handcraft every
              denture with precision and attention to detail. From repairs to
              relines, we provide personalized solutions to enhance your dental
              health and confidence.
            </p>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <div className="mt-12 space-y-8">
        <Faq faqs={faqData} sectionTitle="FAQs about Dentures" />{" "}
        {/* Use the Faq component with faqs prop */}
      </div>
      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h2 className="text-3xl md:text-4xl font-bold">
              Restore Your Smile for Less
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              Get 25% off custom dentures today! Book an appointment or visit
              one of our locations to take the first step toward your new smile.
              Embrace the confidence of a radiant smile.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Book Now
              </button>
              <a
                href="tel:1234567890"
                className="font-bold text-white flex items-center text-lg"
              >
                Call (386) 574-7272
              </a>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default ExploreDentures;
