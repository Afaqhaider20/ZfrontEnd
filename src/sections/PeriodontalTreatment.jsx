import { Fade } from "react-awesome-reveal";
import FAQs from "../components/FAQs";

const faqData = [
  {
    question: "What causes gum disease?",
    answer: "Plaque buildup is the main cause, but factors like smoking, diabetes, and genetics also play a role.",
  },
  {
    question: "How can I prevent periodontal disease?",
    answer: "Regular brushing, flossing, and professional dental cleanings are essential for prevention. Avoid smoking and maintain a healthy diet.",
  },
  {
    question: "How long does treatment take?",
    answer: "Treatment duration varies depending on the severity of the condition. Most scaling and root planing procedures are completed in one to two visits.",
  },
];

const PeriodontalTreatment = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-[2.5rem]">
      {/* Hero Section */}
      <header
        className="relative bg-blue-700 text-white py-16 px-6"
        style={{ backgroundImage: "url('/Images/backgroundTexture.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: "overlay" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold">
              Periodontal Disease Treatment
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Safeguard your gums with advanced treatments that not only restore gum health but also prevent further damage.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900">
                Book Appointment
              </button>
              <a
                href="tel:1234567890"
                className="font-bold text-white flex items-center text-lg"
              >
                Call (866) 264-9482
              </a>
            </div>
          </Fade>
        </div>
      </header>
      {/* What is Periodontal Disease Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              What is Periodontal Disease?
            </h2>
            <p className="mt-6 text-lg text-center text-gray-700">
              Periodontal disease is a serious gum infection caused by plaque and tartar buildup. If left untreated, it can damage the soft tissue and bone supporting your teeth, leading to tooth loss and other complications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <img src="/Images/P/unhealthyGums.png" alt="Unhealthy Gums" className="w-full h-72 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-bold text-center text-red-600">Unhealthy Gums</h3>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <img src="/Images/P/healthyGums.png" alt="Healthy Gums" className="w-full h-72 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-bold text-center text-green-600">Healthy Gums</h3>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* Treatment Options Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              Treatment Options
            </h2>
          </Fade>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <Fade direction="up">
              <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Scaling & Root Planing</h3>
                <p className="text-lg mb-4 text-gray-700">
                  This deep-cleaning procedure removes plaque and tartar below the gumline, promoting gum reattachment.
                </p>
                <div className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden">
                  <img src="/Images/P/p1.png" alt="Scaling & Root Planing" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="bg-white shadow-lg p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Antibiotic Therapy</h3>
                <p className="text-lg mb-4 text-gray-700">
                  Target bacterial infection with localized or systemic antibiotics to reduce inflammation and support healing.
                </p>
                <div className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden">
                  <img src="/Images/P/p2.png" alt="Antibiotic Therapy" className="w-full h-full object-cover" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* Why Treat Periodontal Disease Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
              Why Treat Periodontal Disease?
            </h2>
            <p className="mt-6 text-lg text-center text-gray-700">
              Ignoring gum disease can lead to severe complications like tooth loss, jawbone deterioration, and increased risk of heart disease and diabetes. Early intervention not only restores gum health but also improves your overall quality of life.
            </p>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQs faqs={faqData} sectionTitle="Frequently Asked Questions" />
      {/* Footer Section */}
      <footer className="text-center py-8 bg-blue-700 text-white">
        <p className="text-lg font-semibold">
          Take charge of your gum health today. Contact us to learn more about our periodontal treatments.
        </p>
      </footer>
    </main>
  );
};

export default PeriodontalTreatment;