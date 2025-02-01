import { Fade } from "react-awesome-reveal";
import Faq from "../components/FAQs";

const faqData = [
  {
    question: "How long do crowns and bridges last?",
    answer:
      "With proper care, crowns and bridges can last for many years, often 10-15 years or longer.",
  },
  {
    question: "Are crowns and bridges noticeable?",
    answer:
      "Modern crowns and bridges are designed to look natural and blend seamlessly with your existing teeth.",
  },
  {
    question: "What is the process for getting crowns and bridges?",
    answer:
      "The process typically involves two visits: one to prepare the teeth and take impressions, and another to place the permanent crowns or bridges.",
  },
];

const CrownsAndBridges = () => {
  return (
    <main className="text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Crowns and Bridges
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Restore your smile and functionality with our high-quality crowns
              and bridges.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Schedule Appointment
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
      {/* What Are Crowns and Bridges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
              What Are Crowns and Bridges?
            </h2>
            <p className="text-lg text-center mb-6">
              Crowns and bridges are fixed prosthetic devices that are cemented
              onto existing teeth or implants. Crowns are used to entirely cover
              or &quot;cap&quot; a damaged tooth, while bridges are used to
              replace one or more missing teeth by anchoring to the adjacent
              teeth.
            </p>
          </Fade>
          <Fade>
            <div className="w-10/12 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Fade direction="left">
                <div className="relative w-full h-80">
                  <img src="/Images/CAB/crown.png" alt="Crown" className="w-full h-full object-cover rounded-md shadow-lg" />
                  <p className="absolute bottom-2 left-2 bg-blue-600 text-white p-2 rounded shadow text-sm">
                    A natural-looking crown providing durability.
                  </p>
                </div>
              </Fade>
              <Fade direction="right">
                <div className="relative w-full h-80">
                  <img src="/Images/CAB/bridge.png" alt="Bridge" className="w-full h-full object-cover rounded-md shadow-lg" />
                  <p className="absolute bottom-2 left-2 bg-blue-600 text-white p-2 rounded shadow text-sm">
                    A bridge option to replace missing teeth seamlessly.
                  </p>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Benefits of Crowns and Bridges
            </h2>
          </Fade>
          <Fade direction="up">
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Restore your smile and confidence.</li>
              <li>Improve chewing and speaking abilities.</li>
              <li>Maintain the shape of your face.</li>
              <li>Prevent remaining teeth from drifting out of position.</li>
              <li>Durable and long-lasting with proper care.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* Types of Crowns and Bridges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Types of Crowns and Bridges We Offer
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-6">
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Porcelain Crowns</h3>
                <p className="text-gray-700 mb-4">
                  Porcelain crowns are highly durable and provide a
                  natural-looking appearance.
                </p>
                <div className="w-full h-48 flex items-center justify-center rounded-md overflow-hidden">
                  <img src="/Images/CAB/cab2.png" alt="Porcelain Crowns" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Metal Crowns</h3>
                <p className="text-gray-700 mb-4">
                  Metal crowns are known for their strength and durability,
                  making them ideal for back teeth.
                </p>
                <div className="w-full h-48 flex items-center justify-center rounded-md overflow-hidden">
                  <img src="/Images/CAB/cab3.png" alt="Metal Crowns" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="rounded-lg bg-white shadow-lg p-6 transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-4">Ceramic Bridges</h3>
                <p className="text-gray-700 mb-4">
                  Ceramic bridges are a great option for replacing missing teeth
                  with a natural look.
                </p>
                <div className="w-full h-48 flex items-center justify-center rounded-md overflow-hidden">
                  <img src="/Images/CAB/cab4.png" alt="Ceramic Bridges" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <Faq faqs={faqData} sectionTitle="FAQs about Crowns and bridges" />{" "}
      {/* Use the Faq component with faqs prop */}
      {/* Footer Section */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to restore your smile? Contact us today to schedule your
          appointment and explore your crowns and bridges options.
        </p>
      </footer>
    </main>
  );
};

export default CrownsAndBridges;
