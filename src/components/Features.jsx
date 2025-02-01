import { Fade, Zoom } from "react-awesome-reveal";

const Features = () => {
  const features = [
    {
      title: "Emergency Dental Treatment",
      description:
        "Dental emergencies can happen at any time. Our team is ready to provide prompt and effective care to address your urgent dental needs.",
    },
    {
      title: "Easy Online Booking",
      description:
        "Our online booking system ensures stress-free scheduling at any time, making your visit as easy and comfortable as possible.",
    },
    {
      title: "Judgment-Free Care",
      description:
        "We help you achieve lifelong dental wellness with compassion and understanding, guiding you toward a healthier smile without judgment.",
    },
    {
      title: "Personalized Treatments",
      description:
        "We provide a full range of treatments tailored to your unique needs in a safe and welcoming environment.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-50">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Features
          </p>
        </div>
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
              <span className="relative">Your </span>
            </span>{" "}
            Comprehensive Dental <span className="text-blue-800">Care</span> Solution
          </h2>
        </Fade>
        <Fade direction="right">
          <p className="text-base text-gray-700 md:text-lg">
            We are dedicated to delivering exceptional dental care with a focus
            on convenience, prevention, and effective treatments.
          </p>
        </Fade>
      </div>
      <div className="grid gap-6 row-gap-5 sm:grid-cols-1 lg:grid-cols-4 justify-center">
        {features.map((feature, index) => (
          <Zoom key={index}>
            <div
              className={`flex flex-col justify-between p-6 border rounded-lg shadow-lg h-full text-white transition-shadow duration-300 hover:shadow-2xl ${
                index === 0
                  ? "bg-blue-800"
                  : index === 1
                  ? "bg-blue-600"
                  : index === 2
                  ? "bg-blue-700"
                  : "bg-blue-500"
              }`}
            >
              <div>
                <h6 className="mb-4 text-2xl font-bold leading-6">
                  {feature.title}
                </h6>
                <p className="mb-4 text-base">{feature.description}</p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Features;
