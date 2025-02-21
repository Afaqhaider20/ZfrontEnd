import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import PropTypes from "prop-types";

const FAQs = ({ faqs, sectionTitle }) => {
  const [showMore, setShowMore] = useState(false);

  const initialFaqs = faqs.slice(0, 6);
  const remainingFaqs = faqs.slice(6);

  return (
    <div className="w-full bg-white">
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="container flex flex-col justify-center p-3 mx-auto md:p-8">
          <div className="text-center mb-8">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {sectionTitle}
            </p>
            <Fade direction="left">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                  <span className="relative">Frequently Asked </span>
                </span>{" "}
                <span className="text-blue-800">Questions</span>
              </h2>
            </Fade>
          </div>
          <div className="flex flex-col divide-y divide-gray-300 sm:mx-12 lg:px-12 xl:px-32 mb-4">
            {initialFaqs.map((faq, index) => (
              <Fade key={index}>
                <details className="group py-4">
                  <summary className="text-blue-950 py-2 outline-none cursor-pointer focus:font-semibold flex justify-between items-center">
                    {faq.question}
                    <svg
                      className="ml-2 h-5 w-5 text-blue-700 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="text-blue-800 px-4 pb-4">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </Fade>
            ))}
            {showMore &&
              remainingFaqs.map((faq, index) => (
                <Fade key={index}>
                  <details className="group py-4">
                    <summary className="text-blue-950 py-2 outline-none cursor-pointer focus:font-semibold flex justify-between items-center">
                      {faq.question}
                      <svg
                        className="ml-2 h-5 w-5 text-blue-700 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="text-blue-800 px-4 pb-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </Fade>
              ))}
          </div>
          {faqs.length > 6 && !showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mx-auto mt-2 text-blue-700 cursor-pointer focus:outline-none flex items-center"
            >
              See More
              <svg
                className="ml-2 h-5 w-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

FAQs.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionTitle: PropTypes.string.isRequired,
};

export default FAQs;
