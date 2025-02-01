import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { Star, Award, Heart, SmilePlus } from "lucide-react";

const Hero = () => {
  return (
    <main>
      <div className="relative bg-gradient-to-b from-white to-blue-50" name="home">
        <div className="mx-auto h-full px-4 py-6 sm:max-w-xl md:max-w-full md:px-24 md:pt-6 md:pb-28 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">
                <Fade direction="down">
                  <h2 className="md:mt-0 mt-24 mb-4 max-w-lg text-6xl font-light leading-snug tracking-tight text-blue-800 sm:text-8xl">
                    Welcome to
                  </h2>
                  <h2 className="max-w-lg mb-6 text-4xl font-bold leading-snug tracking-tight text-blue-800 sm:text-6xl">
                    Z Family & Cosmetic Dentistry
                  </h2>
                </Fade>

                <Fade>
                  <p className="text-base text-gray-700 mt-4">
                    At Z Family & Cosmetic Dentistry, we are committed to
                    harmonizing oral health and creating beautiful smiles. Our
                    modern dental care brings confidence and wellness to your
                    life. Experience the highest standard of dental care with our
                    dedicated team of professionals.
                  </p>
                </Fade>
              </div>
              <Fade direction="up">
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="mb-3 inline-flex h-12 w-full items-center justify-center rounded border border-blue-900 bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:1234567890"
                    className="ml-4 font-bold text-blue-900 flex items-center text-lg hover:text-blue-700"
                  >
                    Call (386) 574-7272
                  </a>
                </div>
              
              <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x">
                <div className="flex max-w-xs space-x-2 px-4">
                  <Star className="h-12 w-12 text-emerald-600" strokeWidth={2} />
                  <p>
                    We are dedicated to providing comprehensive, quality dental
                    care.
                  </p>
                </div>
                <div className="flex max-w-xs space-x-2 px-4">
                  <Award className="h-12 w-12 text-blue-600" strokeWidth={2} />
                  <p>Leading dental clinic in Deltona, Florida.</p>
                </div>
              </div>
              </Fade>
            </div>
            
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-md rounded-br-md max-h-[500px]" style={{ backgroundImage: `url('/Images/heroTexture.jpg'), linear-gradient(to bottom, #2563eb, #1e40af)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: "overlay" }}>      
                <Fade direction="right">
                  <img className="-mb-20" src="/Images/doctors3.png" alt="hero portrait" />
                </Fade>
              </div>
              {/* Floating Icons */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 -m-8 h-20 w-20 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                  <Heart className="h-10 w-10 text-blue-900 animate-pulse" />
                </div>
                <div className="absolute bottom-0 right-0 -m-8 h-20 w-20 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                  <SmilePlus className="h-10 w-10 text-blue-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
