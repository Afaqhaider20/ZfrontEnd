import { Fade } from "react-awesome-reveal";
import Faq from "../components/FAQs";

const faqData = [
  {
    question: "How long do aesthetic crowns & veneers last?",
    answer:
      "Aesthetic crowns and veneers can last 10-15 years, while composite veneers typically last 5-7 years with proper care.",
  },
  {
    question: "Are aesthetic crowns & veneers reversible?",
    answer:
      "Porcelain veneers are not reversible due to the enamel removal process, but composite veneers may be reversible.",
  },
  {
    question: "Do aesthetic crowns & veneers require special care?",
    answer:
      "They do not require special care, but maintaining good oral hygiene and avoiding hard foods can help prolong their lifespan.",
  },
];

const AestheticCrownsAndVeneers = () => {
  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header
        className="relative bg-blue-700 text-white py-16 px-6"
        style={{
          backgroundImage: `url(/Images/backgroundTexture.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">
              Aesthetic Crowns & Veneers Services
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Enhance your smile with our professional aesthetic crowns &
              veneers services. Our treatments are designed to give you a
              beautiful, natural-looking smile.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                <a
                  href="https://yapiapp.io/v2/sched/ap/?guid=d83abc35-46a4-4194-9e26-f5f4125ee875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </button>
              <a
                href="tel:(386) 574-7272"
                className="font-bold text-white flex items-center text-lg"
              >
                Call (386) 574-7272
              </a>
            </div>
          </Fade>
        </div>
      </header>

      {/* What Are Aesthetic Crowns & Veneers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              What Are Aesthetic Crowns & Veneers?
            </h2>
            <p className="mt-6 text-lg text-center text-gray-700">
              Aesthetic crowns & veneers are thin, custom-made shells. They are
              used to improve your smile by correcting issues such as
              discoloration, chips, and gaps.
            </p>
            <div className="bg-gray-300 w-11/12 h-80 flex items-center justify-center mt-8 rounded-lg overflow-hidden mx-auto">
              <img
                src="/Images/V/v1.jpg"
                alt="Aesthetic Crowns & Veneers Process"
                className="w-full h-full object-cover"
              />
            </div>
          </Fade>
        </div>
      </section>

      {/* Why Choose Aesthetic Crowns & Veneers Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              Why Choose Aesthetic Crowns & Veneers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Improve Appearance
                </h3>
                <p className="mt-4 text-gray-700">
                  Aesthetic crowns & veneers can dramatically enhance the look
                  of your teeth, giving you a brighter, more uniform smile.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Durable and Long-Lasting
                </h3>
                <p className="mt-4 text-gray-700">
                  They are crafted from durable materials that can last for many
                  years with proper care.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Minimally Invasive
                </h3>
                <p className="mt-4 text-gray-700">
                  The procedure is minimally invasive and typically requires
                  only a few visits.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Types of Aesthetic Crowns & Veneers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              Types of Aesthetic Crowns & Veneers We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Porcelain Crowns & Veneers
                </h3>
                <p className="text-gray-700">
                  Porcelain crowns & veneers are highly durable and provide a
                  natural-looking appearance.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Composite Crowns & Veneers
                </h3>
                <p className="text-gray-700">
                  Composite crowns & veneers are a cost-effective option that
                  can be applied in a single visit.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Lumineers</h3>
                <p className="text-gray-700">
                  Lumineers are ultra-thin veneers that require minimal tooth
                  preparation.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              What to Expect During the Aesthetic Crowns & Veneers Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 1: Consultation</h3>
                <p className="text-gray-700">
                  Your dentist will discuss your goals and determine if
                  aesthetic crowns & veneers are the right option for you.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 2: Preparation</h3>
                <p className="text-gray-700">
                  A small amount of enamel is removed to prepare your teeth for
                  the veneers.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Step 3: Bonding</h3>
                <p className="text-gray-700">
                  The veneers are bonded to your teeth with a strong adhesive,
                  and adjustments are made for a perfect fit.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq faqs={faqData} sectionTitle="Aesthetic Crowns & Veneers FAQs" />

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h2 className="text-3xl md:text-4xl font-bold">
              Transform Your Smile with Aesthatic Crowns & Veneers
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              Book an appointment or visit our office to discover how Aesthatic Crowns & Veneers
              can give you a radiant, movie-star smile.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                <a
                  href="https://yapiapp.io/v2/sched/ap/?guid=d83abc35-46a4-4194-9e26-f5f4125ee875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </button>
              <a
                href="tel:(386) 574-7272"
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

export default AestheticCrownsAndVeneers;
