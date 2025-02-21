import { Fade } from "react-awesome-reveal";
import FAQs from "../components/FAQs";

const faqs = [
  {
    question: "How much does a tooth extraction cost?",
    answer:
      "The cost varies based on the complexity of the procedure. We offer affordable options and payment plans to suit your budget.",
  },
  {
    question: "Will the procedure hurt?",
    answer:
      "With advanced anesthesia techniques, we ensure a pain-free experience. Some discomfort is normal post-procedure, but it is manageable with medication.",
  },
  {
    question: "What can I eat after an extraction?",
    answer:
      "Soft foods like soups, mashed potatoes, and yogurt are recommended for the first few days. Avoid hard or spicy foods until you heal.",
  },
];

const ToothExtraction = () => {
  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header
        className="relative bg-blue-700 text-white py-16 px-6"
        style={{
          backgroundImage: "url('/Images/background1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">
              Get Relief with Tooth Extractions
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              If you&apos;re struggling with tooth pain or need an urgent
              extraction, our experienced dental team is here to provide the
              care you need.
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
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              Why Choose Us for Tooth Extractions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Expert Dental Team
                </h3>
                <p className="mt-4 text-gray-700">
                  Our highly trained dentist has successfully performed
                  thousands of tooth extractions, ensuring a smooth and
                  comfortable experience for you.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold">Quick Relief</h3>
                <p className="mt-4 text-gray-700">
                  We offer same-day appointments for Emergency cases, so you
                  don&apos;t have to endure unnecessary pain.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  Comprehensive Care
                </h3>
                <p className="mt-4 text-gray-700">
                  From consultation to post-extraction care, our team provides
                  end-to-end dental solutions tailored to your needs.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* When to Remove a Tooth Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              When Should You Consider a Tooth Extraction?
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              While preserving your natural teeth is always a priority, certain
              situations make extraction the best option:
            </p>
            <ul className="mt-6 space-y-4 text-left max-w-2xl mx-auto text-gray-700">
              <li>- Severe tooth decay beyond repair</li>
              <li>- Advanced gum disease causing bone loss</li>
              <li>- Overcrowding that requires orthodontic correction</li>
              <li>- Impacted wisdom teeth causing discomfort</li>
              <li>- Fractured or broken teeth that can&apos;t be restored</li>
            </ul>
          </Fade>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://yapiapp.io/v2/sched/ap/?guid=d83abc35-46a4-4194-9e26-f5f4125ee875"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 py-2 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900"
            >
              Book Appointment
            </a>
            <a
              href="tel:(386) 574-7272"
              className="font-bold text-blue-700 flex items-center text-lg"
            >
              Call (386) 574-7272
            </a>
          </div>
        </div>
      </section>
      {/* Benefits of Extraction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              Benefits of Tooth Extraction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <div className="h-48 rounded-lg overflow-hidden">
                  <img
                    src="/Images/TE/te1.avif"
                    alt="Tooth Extraction Benefit 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-6 text-gray-700">
                  Extracting a severely damaged or infected tooth prevents the
                  spread of infection, alleviates pain, and improves overall
                  oral health.
                </p>
              </div>
              <div>
                <div className="h-48 rounded-lg overflow-hidden">
                  <img
                    src="/Images/TE/te2.jpg"
                    alt="Tooth Extraction Benefit 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-6 text-gray-700">
                  It creates space for orthodontic treatments or dental
                  implants, ensuring a healthy and aligned smile.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQs faqs={faqs} sectionTitle="Tooth Extraction FAQs" />
      {/* Footer */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h2 className="text-3xl md:text-4xl font-bold">Gentle Tooth Extraction for a Faster Recovery</h2>
            <p className="mt-6 text-lg md:text-xl">
              Book an appointment or visit our office to learn how a comfortable extraction can relieve pain and protect your oral health.
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

export default ToothExtraction;
