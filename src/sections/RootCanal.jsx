import { Fade } from "react-awesome-reveal";
import Faq from "../components/FAQs";

const faqData = [
  {
    question: "What is the recovery time after a root canal?",
    answer:
      "Most patients recover fully within a few days. Mild discomfort is normal but can be managed with over-the-counter pain relievers.",
  },
  {
    question: "Does a root canal hurt?",
    answer:
      "Modern root canals are virtually painless, thanks to advanced anesthetics and techniques. You may feel relief from pain after the procedure.",
  },
  {
    question: "How much does a root canal cost?",
    answer:
      "Costs vary depending on the complexity of the case and the tooth involved. Contact us for an affordable treatment plan.",
  },
];

const RootCanal = () => {
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
              Root Canal Treatment
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Say goodbye to tooth pain and sensitivity with professional root
              canal treatments designed to restore your oral health.
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
      {/* What is a Root Canal Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              What is a Root Canal?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              A root canal is a non-surgical endodontic procedure that saves and
              restores teeth with severe decay or infection. The process
              involves removing the infected pulp, cleaning and disinfecting the
              tooth&apos;s interior, and sealing it with a durable filling.
            </p>
            <div className="w-full md:w-8/12 md:h-[30rem] h-auto rounded-lg mt-8 flex items-center justify-center overflow-hidden mx-auto">
              <img
                src="/Images/RC/rc1.png"
                alt="Root Canal Process"
                className="w-full h-auto object-cover"
              />
            </div>
          </Fade>
        </div>
      </section>
      {/* Symptoms Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Signs You May Need a Root Canal
            </h2>
            <ul className="mt-6 space-y-4 text-left max-w-2xl mx-auto text-gray-700">
              <li>- Persistent tooth pain or throbbing.</li>
              <li>- Sensitivity to hot and cold that lingers.</li>
              <li>- Swollen or tender gums near the affected tooth.</li>
              <li>- Dark discoloration of the tooth.</li>
              <li>- Pus drainage or a recurring pimple on the gums.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* Procedure Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              What to Expect During the Procedure
            </h2>
            <div className="grid md:grid-cols-3 gap-12 mt-12">
              <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-2">
                  Step 1: Initial Assessment
                </h3>
                <p className="text-gray-700">
                  Your dentist will examine the tooth, take X-rays, and create a
                  customized treatment plan.
                </p>
                <div className="h-48 rounded-lg mt-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/Images/RC/rc2.jpeg"
                    alt="X-ray"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-2">
                  Step 2: Cleaning & Disinfecting
                </h3>
                <p className="text-gray-700">
                  The infected pulp is removed, and the canals are thoroughly
                  cleaned and shaped.
                </p>
                <div className="h-48 rounded-lg mt-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/Images/RC/rc3.png"
                    alt="Cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Step 3: Restoration</h3>
                <p className="text-gray-700">
                  The tooth is sealed and restored with a crown to ensure
                  durability and functionality.
                </p>
                <div className="h-48 rounded-lg mt-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="/Images/RC/rc4.png"
                    alt="Restoration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Benefits of a Root Canal
            </h2>
            <ul className="mt-6 space-y-4 text-left max-w-2xl mx-auto text-gray-700">
              <li>- Relieves pain and sensitivity caused by infection.</li>
              <li>- Prevents the need for tooth extraction.</li>
              <li>- Restores the tooth&apos;s strength and functionality.</li>
              <li>- Maintains the natural appearance of your smile.</li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <Faq faqs={faqData} sectionTitle="Root Canal Faqs" />{" "}
      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h2 className="text-3xl md:text-4xl font-bold">
              Take the First Step Towards a Healthier Smile
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              Don&apos;t wait for the pain to get worse. Contact us today to
              schedule your root canal consultation and reclaim your dental
              health.
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

export default RootCanal;
