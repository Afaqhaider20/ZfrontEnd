import { Fade } from "react-awesome-reveal";
import Heading from "./Heading";

const doctors = [
  {
    name: "Dr. Fatima A Butt DDS",
    role: "Your Doctor",
    description:
      "Dr. Fatima A Butt DDS is a compassionate and experienced physician dedicated to your health and well-being. In her free time, she enjoys hiking, painting, and spending time with her family.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Steven J Smith DMD",
    role: "Retired Doctor",
    description:
      "Dr. Steven J Smith DMD served our community for over 30 years. He is now retired and enjoys gardening, reading, and traveling with his wife.",
    image: "https://via.placeholder.com/150",
  },
];

const teamMembers = [
  {
    name: "Mary A Coffman RDH",
    role: "Dental Hygienist",
    description:
      "Mary A Coffman RDH is dedicated to providing the best dental care possible.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Saad Aslam CRDH",
    role: "Dental Hygienist",
    description:
      "Saad Aslam CRDH specializes in dental hygiene and is passionate about creating beautiful smiles.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bonnie L Byrnes EFDA",
    role: "Dental Assistant",
    description:
      "Bonnie L Byrnes EFDA is an expert in dental assistance and is committed to restoring your smile.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rina Lantigua EFDA",
    role: "Dental Assistant",
    description:
      "Rina Lantigua EFDA is dedicated to providing the best dental care possible.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mayraliz Rodriguez",
    role: "Administrative Assistant",
    description:
      "Mayraliz Rodriguez ensures the smooth operation of our office and is committed to providing excellent service.",
    image: "https://via.placeholder.com/150",
  },
];

const Team = () => {
  return (
    <div
      className="bg-blue-200 py-12 w-full"
      style={{
        backgroundImage: `url(/Images/background2.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Meet Your Doctor Section */}
      <section className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <Heading title="Meet Your Doctor" subtitle="Our Team" />
        <div className="flex flex-col space-y-8">
          <Fade direction="left">
            <div className="px-6 bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col md:flex-row h-96">
              <img
                className="w-full md:w-1/2 h-full object-cover"
                src={doctors[0].image || "/placeholder.svg?height=400&width=300"}
                alt={doctors[0].name}
              />
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-800">{doctors[0].name}</h3>
                <p className="text-lg text-blue-600">{doctors[0].role}</p>
                <p className="text-gray-600 mt-4">{doctors[0].description}</p>
              </div>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="px-6 bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col md:flex-row-reverse h-96">
              <img
                className="w-full md:w-1/2 h-full object-cover"
                src={doctors[1].image || "/placeholder.svg?height=400&width=300"}
                alt={doctors[1].name}
              />
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-800">{doctors[1].name}</h3>
                <p className="text-lg text-blue-600">{doctors[1].role}</p>
                <p className="text-gray-600 mt-4">{doctors[1].description}</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Meet Our Dedicated Team Section */}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Our Team</h2>
        </div>
        <div className="grid gap-8 row-gap-12 sm:grid-cols-1 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Fade key={index} direction="left">
              <div className="bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col h-96">
                <div className="relative flex-shrink-0">
                  <img
                    className="w-full h-64 object-cover"
                    src={member.image || "/placeholder.svg?height=400&width=300"}
                    alt={member.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-blue-300">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
