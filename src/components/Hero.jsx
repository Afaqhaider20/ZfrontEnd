import { Fade } from "react-awesome-reveal";
import { Heart, SmilePlus, CheckCircle, Shield, Home } from "lucide-react";

const Hero = () => {
  return (
    <main>
      <div
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100"
        name="home"
      >
        <div className="mx-auto h-full px-4 py-6 sm:max-w-xl md:max-w-full md:px-24 md:py-16 lg:py-24 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="relative z-1 w-full lg:w-1/2">
              <div className="lg:max-w-xl lg:pr-5">
                <Fade direction="down" triggerOnce>
                  <h2 className="md:mt-0 mt-16 mb-2 max-w-lg text-4xl font-light leading-snug tracking-tight text-blue-800 sm:text-6xl lg:text-7xl drop-shadow-sm">
                    Welcome to
                  </h2>
                  <h2 className="max-w-lg mb-4 text-3xl font-bold leading-snug tracking-tight text-blue-800 sm:text-5xl lg:text-6xl drop-shadow-sm">
                    Z Family & Cosmetic Dentistry
                  </h2>
                </Fade>

                <Fade triggerOnce>
                  <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed max-w-xl">
                    At Z Family & Cosmetic Dentistry, we are committed to
                    harmonizing oral health and creating beautiful smiles. Our
                    modern dental care brings confidence and wellness to your
                    life. Experience the highest standard of dental care with
                    our dedicated team of professionals.
                  </p>
                </Fade>
              </div>
              <Fade direction="up" triggerOnce>
                <div className="mt-8 flex flex-col items-center md:flex-row">
                  <a
                    href="https://yapiapp.io/v2/sched/ap/?guid=d83abc35-46a4-4194-9e26-f5f4125ee875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-blue-900 hover:shadow-blue-200 border-2 border-blue-900 w-full md:w-auto m-2 transform hover:scale-105 text-sm sm:text-base"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="tel:(386)574-7272"
                    className="ml-4 font-bold text-blue-900 flex items-center text-lg hover:text-blue-700 transition-colors duration-300 m-4"
                  >
                    Call (386) 574-7272
                  </a>
                </div>

                <div className="mt-12 flex flex-col space-y-3 text-md font-bold text-blue-900 sm:flex-row sm:space-y-0 sm:divide-x sm:divide-gray-300">
                  <div className="flex space-x-3 px-4 items-center group">
                    <Home className="h-8 w-8 text-yellow-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                    <p className="group-hover:text-blue-700 transition-colors duration-300">Proudly family owned and operated.</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col space-y-3 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x sm:divide-gray-300">
                  <div className="flex max-w-xs space-x-3 px-4">
                    <CheckCircle
                      className="h-8 w-8 text-emerald-600"
                      strokeWidth={2}
                    />
                    <p>Comprehensive, quality dental care.</p>
                  </div>
                  <div className="flex max-w-xs space-x-3 px-4">
                    <Shield className="h-8 w-8 text-blue-600" strokeWidth={2} />
                    <p>Leading dental clinic in Deltona, Florida.</p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <div
                className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-md rounded-br-md max-h-[500px] shadow-2xl transform hover:scale-102 transition-transform duration-500"
                style={{
                  backgroundImage: `url('/Images/heroTexture.jpg'), linear-gradient(135deg, #2563eb, #1e40af)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                <Fade direction="right" triggerOnce>
  <video
    className="-mb-20 transform hover:scale-105 transition-transform duration-500"
    src="/videos/hero.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</Fade>

              </div>
              {/* Floating Icons */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 -m-8 h-20 w-20 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-blue-900 animate-pulse" />
                </div>
                <div className="absolute bottom-0 right-0 -m-8 h-20 w-20 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
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
