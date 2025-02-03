import { Fade } from "react-awesome-reveal";
import Faq from "../components/FAQs";

const faqData = [
  {
    question: "How long does teeth whitening last?",
    answer:
      "Teeth whitening results can last from a few months to up to three years, depending on your oral care habits and lifestyle.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is safe when performed by a qualified dentist. It is important to follow post-treatment care instructions.",
  },
  {
    question: "Can teeth whitening remove all stains?",
    answer:
      "Teeth whitening is effective for most surface stains caused by food, drinks, and smoking. However, it may not work on intrinsic stains or discoloration caused by certain medications.",
  },
];

const TeethWhitening = () => {
  return (
    <main className="bg-blue-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <header
        className="relative bg-blue-700 text-white py-16 px-6"
        style={{ backgroundImage: `url(/Images/backgroundTexture.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: "overlay" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Fade direction="down">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transform Your Smile with Teeth Whitening
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Brighten your smile with our professional teeth whitening
              solutions, designed to safely and effectively enhance the natural
              beauty of your teeth. Rediscover your confidence with a radiant
              smile that turns heads.
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
      </header>
      {/* In-Office Whitening Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Professional In-Office Teeth Whitening
            </h2>
            <p className="text-lg text-center text-gray-700">
              Achieve a brilliant smile in as little as one appointment with our
              advanced in-office whitening treatments. Using cutting-edge LED
              technology and professional-grade whitening gels, we can lighten
              your teeth by several shades in under two hours.
            </p>
          </Fade>
          <div className="mt-12 flex justify-center">
            <div className="h-80 w-full max-w-3xl rounded-lg overflow-hidden">
              <img src="/Images/TW/tw2.jpg" alt="Whitening Process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Whitening vs. Bleaching Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Teeth Whitening vs. Teeth Bleaching
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg text-white shadow-md">
                <h3 className="text-xl font-bold mb-2">Teeth Whitening</h3>
                <p>
                  Teeth whitening focuses on removing stains and discoloration
                  from the surface of your teeth. It&apos;s an excellent option for
                  restoring your teeth&apos;s natural color and brightness.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white shadow-md">
                <h3 className="text-xl font-bold mb-2">Teeth Bleaching</h3>
                <p>
                  Teeth bleaching involves using peroxide-based solutions to
                  lighten teeth beyond their natural shade. This option is best
                  for individuals looking for a dramatic transformation.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* Cost Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
              How Much Does Teeth Whitening Cost?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              For the cost of the procedure, please contact us or call our office.
            </p>
          </Fade>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
              Tips for Maintaining a Whiter Smile
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>
                Avoid foods and drinks that stain, like coffee, tea, and red
                wine.
              </li>
              <li>
                Maintain a consistent oral hygiene routine, including brushing
                and flossing.
              </li>
              <li>
                Use a straw when drinking dark beverages to minimize contact
                with your teeth.
              </li>
              <li>Consider touch-up whitening treatments every six months.</li>
              <li>
                Visit your dentist regularly for professional cleanings and
                check-ups.
              </li>
            </ul>
          </Fade>
        </div>
      </section>
      {/* FAQ Section */}
      <Faq faqs={faqData} sectionTitle="Teeth Whitening FAQs" />{" "}
      {/* Use the Faq component with faqs prop */}
      {/* Footer Section */}
      <footer className="py-8 bg-blue-700 text-white text-center">
        <p className="text-lg">
          Ready to enhance your smile? Contact us today to schedule an
          appointment and learn more about our teeth whitening options!
        </p>
      </footer>
    </main>
  );
};

export default TeethWhitening;
