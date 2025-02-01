import { Fade } from "react-awesome-reveal";

export default function OurMissionAndVision() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center pt-28 pb-11 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <Fade direction="down">
          <h1 className="text-5xl font-extrabold">Our Mission & Vision</h1>
        </Fade>
        <Fade direction="up">
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            At Z Family & Cosmetic Dentistry, we are dedicated to providing
            exceptional dental care that enhances lives and promotes healthy,
            beautiful smiles.
          </p>
        </Fade>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 flex flex-col lg:flex-row items-center gap-4 sm:gap-8">
        <div className="lg:w-1/2">
          <Fade direction="left">
            <h2 className="text-4xl font-bold text-blue-900">Our Mission</h2>
            <p className="mt-2 sm:mt-4 text-lg text-gray-700">
              Our mission is to deliver high-quality, compassionate dental care
              in a comfortable and welcoming environment. We strive to educate
              and empower our patients, ensuring they achieve optimal oral
              health and confidence in their smiles.
            </p>
          </Fade>
        </div>
        <div className="lg:w-1/2">
          <Fade direction="right">
            <div className="bg-gray-300 h-80 sm:h-64 w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-lg">Image Placeholder (e.g., team photo)</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 flex flex-col-reverse lg:flex-row items-center gap-4 sm:gap-8">
        <div className="lg:w-1/2">
          <Fade direction="left">
            <div className="bg-gray-300 h-80 sm:h-64 w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-lg">Image Placeholder (e.g., vision illustration)</span>
            </div>
          </Fade>
        </div>
        <div className="lg:w-1/2">
          <Fade direction="right">
            <h2 className="text-4xl font-bold text-blue-900">Our Vision</h2>
            <p className="mt-2 sm:mt-4 text-lg text-gray-700">
              We envision a future where every individual has access to
              world-class dental care, fostering a community of healthy smiles.
              Through innovation, education, and dedication, we aim to set new
              standards in dentistry.
            </p>
          </Fade>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-100 py-6 sm:py-12 px-4 sm:px-6">
        <Fade direction="up">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900">
              Our Core Values
            </h2>
            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900">
                  Compassion
                </h3>
                <p className="mt-2 text-gray-700">
                  We treat every patient with kindness and care, ensuring a
                  comfortable experience.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900">
                  Excellence
                </h3>
                <p className="mt-2 text-gray-700">
                  We maintain the highest standards in dental care and stay at
                  the forefront of innovation.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900">
                  Integrity
                </h3>
                <p className="mt-2 text-gray-700">
                  We believe in honesty and transparency in our treatment and
                  patient relationships.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
