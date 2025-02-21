import Fade from "react-awesome-reveal";

const Offers = () => {
  return (
    <section className="offers-section py-12 bg-white z-0">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="text-center mx-4 sm:mx-0">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              offers
            </p>
          </div>
          <Fade>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center mx-4 sm:mx-0">
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
                <span className="relative">Your </span>
              </span>{" "}
              Z Yearly<span className="text-blue-800"> Discount</span> Membership Plan{" "}
            </h2>
          </Fade>
          <Fade direction="left">
            <p className="text-base text-gray-700 md:text-lg text-center mx-4 sm:mx-0">
              An affordable dental care solution for those without insurance!
            </p>
          </Fade>
        </div>
        <Fade>
          <div className="container mx-auto px-4 justify-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-start md:justify-items-center pl-4 md:pl-0">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Membership Benefits Include:
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-8">
                  <li>Free Unlimited Emergency Exams</li>
                  <li>Free Unlimited X-Rays</li>
                  <li>2 Free Regular Cleanings (D1110/D1120/D4910)</li>
                  <li>2 Free Fluoride Treatments (D1206/D1208)</li>
                  <li>1 Free Comprehensive Exam (D0150)</li>
                  <li>15%-25% Discount on All Dental Procedures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Pricing:
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-8">
                  <li>Individual Plan: $249/year</li>
                  <li>Add a Family Member: $225/year</li>
                </ul>
              </div>
            </div>
            <p className="text-blue-700 mt-8 mb-4 text-left">
              No Credit Checks – Everyone Gets Approved!
            </p>
            <p className="text-gray-500 font-bold text-left">
              Note: This is not an insurance plan.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Offers;
