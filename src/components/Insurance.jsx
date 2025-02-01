import { Fade } from "react-awesome-reveal";
import FAQs from "./FAQs";

const faqs = [
  {
    question: "What dental insurance plans do you accept?",
    answer:
      "We accept a wide range of dental insurance plans, including those from major providers such as Aetna PPO, Cigna, MetLife, Humana, United Healthcare, Principal, GEHA, and Central States. We also accept most PPO services.",
  },
  {
    question: "How do I know if my insurance covers a specific treatment?",
    answer:
      "You can contact your insurance provider directly or reach out to our office. We can help verify your coverage and explain your benefits.",
  },
  {
    question:
      "Do you offer payment plans for treatments not covered by insurance?",
    answer:
      "Yes, we offer flexible payment plans to help you manage the cost of treatments not covered by insurance. Please speak with our office staff for more details.",
  },
];

const Insurance = () => {
  const insuranceImages = [
    "/Images/Insurance/1.png",
    "/Images/Insurance/2.png",
    "/Images/Insurance/3.png",
    "/Images/Insurance/4.png",
    "/Images/Insurance/5.png",
    "/Images/Insurance/6.png",
    "/Images/Insurance/7.png",
    "/Images/Insurance/8.png",
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8" id="insurance">
      <section className="bg-blue-50 py-8 rounded-lg mx-4">
        <div className="max-w-screen-lg mx-auto px-4">
          <header className="text-center">
            <div className="max-w-xl mb-10 mx-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Insurance
              </p>
              <Fade direction="left">
                <h2 className="max-w-md mb-6 font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-2 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">How </span>
                  </span>{" "}
                  does <span className="text-blue-800">Insurance</span>{" "}
                  work
                </h2>
              </Fade>
            </div>
          </header>
          <p className="text-lg text-gray-700 mb-6">
            At Z Family & Cosmetic Dentistry, we strive to make dental care
            accessible and affordable for everyone. We work with a variety of
            insurance providers to ensure you receive the coverage you need. Our
            team is experienced in handling insurance claims and will assist you
            in understanding your benefits and coverage. We accept most PPO
            services, making it easier for you to get the dental care you
            deserve.
          </p>
          <p className="text-lg text-gray-700">
            If you have any questions about your insurance coverage or need
            assistance with your claim, please do not hesitate to contact our
            office. We are here to help you navigate the complexities of dental
            insurance and ensure you receive the best possible care.
          </p>
        </div>
      </section>

      <h2 className="text-blue-700 font-extrabold text-center my-8 text-2xl md:text-3xl">
        We work with the insurance companies for your convenience
      </h2>
      <div className="slider grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 rounded-lg p-4 mx-auto overflow-hidden relative">
        {insuranceImages.map((src, index) => (
          <div key={index} className="slide h-24 w-24 rounded-md overflow-hidden">
            <img
              src={src}
              className="object-cover w-full h-full"
              alt={`Insurance ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <FAQs sectionTitle="Frequently Asked Questions" faqs={faqs} />
    </section>
  );
};

export default Insurance;

