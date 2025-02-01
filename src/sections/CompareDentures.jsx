import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import FAQs from "../components/FAQs"; // Import the FAQs component

const CompareDenture = () => {
  const faqs = [
    {
      question: "How do I know which denture type is best for me?",
      answer:
        "The best denture type depends on your specific needs, lifestyle, and budget. Our dental professionals can help guide you in making the right choice.",
    },
    {
      question: "Are implant dentures worth the cost?",
      answer:
        "Implant dentures offer superior stability, functionality, and aesthetics, making them a worthwhile investment for many patients.",
    },
    {
      question: "How long do dentures last?",
      answer:
        "With proper care, dentures can last anywhere from 5 to 10 years. Regular check-ups and maintenance can extend their lifespan.",
    },
    // Add more FAQs as needed
  ];

  return (
    <main className="bg-gray-50 text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Fade direction="down">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Compare Types of Dentures
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Every smile is unique, and every solution should be too. Compare
              our denture options to find the best fit for your needs, from full
              dentures to implant-supported solutions.
            </p>
          </Fade>
        </div>
      </section>
      {/* Full Dentures Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-600">
              Full Dentures Comparison
            </h2>
            <p className="text-center text-gray-700 md:text-lg mb-12 max-w-3xl mx-auto">
              Full dentures are ideal for replacing an entire arch of missing
              teeth. Discover how different options cater to your comfort,
              budget, and lifestyle.
            </p>
          </Fade>
          <Zoom>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Overview</th>
                    <th className="px-6 py-4 text-left">Customization</th>
                    <th className="px-6 py-4 text-left">Fit & Function</th>
                    <th className="px-6 py-4 text-left">Durability</th>
                    <th className="px-6 py-4 text-left">Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4">Implant Denture</td>
                    <td className="px-6 py-4">
                      Securely snaps onto dental implants for unparalleled
                      stability and functionality.
                    </td>
                    <td className="px-6 py-4">
                      Highly customizable gum and tooth options.
                    </td>
                    <td className="px-6 py-4">
                      Closest to natural teeth in feel and function.
                    </td>
                    <td className="px-6 py-4">
                      Extremely durable against wear and stains.
                    </td>
                    <td className="px-6 py-4">7 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">Signature Elite</td>
                    <td className="px-6 py-4">
                      Premium dentures with maximum customization for a natural
                      appearance.
                    </td>
                    <td className="px-6 py-4">
                      Custom gum shades and tooth alignment.
                    </td>
                    <td className="px-6 py-4">
                      Excellent fit with premium comfort.
                    </td>
                    <td className="px-6 py-4">
                      Resistant to cracking and chipping.
                    </td>
                    <td className="px-6 py-4">5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Zoom>
        </div>
      </section>
      {/* Partial Dentures Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Fade direction="right">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-600">
              Partial Dentures Comparison
            </h2>
            <p className="text-center text-gray-700 md:text-lg mb-12 max-w-3xl mx-auto">
              Partial dentures are a great solution for replacing multiple
              missing teeth while preserving your remaining healthy teeth.
              Compare our options below.
            </p>
          </Fade>
          <Zoom>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Overview</th>
                    <th className="px-6 py-4 text-left">Customization</th>
                    <th className="px-6 py-4 text-left">Durability</th>
                    <th className="px-6 py-4 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4">Flexilytes Combo</td>
                    <td className="px-6 py-4">
                      Lightweight and flexible with a natural appearance.
                    </td>
                    <td className="px-6 py-4">
                      Multiple gum and tooth shade options.
                    </td>
                    <td className="px-6 py-4">
                      Highly durable and crack-resistant.
                    </td>
                    <td className="px-6 py-4">Moderate</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">Cast Partial</td>
                    <td className="px-6 py-4">
                      Metal-based framework for added strength and stability.
                    </td>
                    <td className="px-6 py-4">
                      Limited customization options.
                    </td>
                    <td className="px-6 py-4">
                      Very durable with a long lifespan.
                    </td>
                    <td className="px-6 py-4">Affordable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Zoom>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQs faqs={faqs} sectionTitle="Denture FAQs" />{" "}
      {/* Pass the faqs and sectionTitle props */}
    </main>
  );
};

export default CompareDenture;
