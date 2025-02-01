import { Fade } from "react-awesome-reveal";

const OurLocation = () => {
  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Location
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
                <span className="relative">Your</span>
              </span>{" "}
              Dental <span className="text-blue-800">Destination</span>{" "}
            </h2>
          </Fade>
          <Fade direction="right">
            <p className="text-base text-gray-700 md:text-lg">
              Visit our state-of-the-art dental clinic, conveniently located in the heart of the city. We look forward to welcoming you!
            </p>
          </Fade>
        </div>
        <div className="mt-16 lg:mt-20 mb:mym-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Fade direction="left">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3492.82375366304!2d-81.171786!3d28.903585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU0JzEyLjkiTiA4McKwMTAnMTguNCJX!5e0!3m2!1sen!2s!4v1737568944977!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Fade>
            <Fade direction="right">
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">WR3H+C7P Deltona, Florida, USA</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: Info@deltonafldentist.com</p>
                    <p className="mt-1 text-gray-600">Phone: (386) 574-7272</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;