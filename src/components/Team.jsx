import { Fade } from "react-awesome-reveal";
import Heading from "./Heading";
import { useState } from "react";

const doctors = [
  {
    name: "Dr. Fatima A Butt",
    role: "Your Doctor",
    description: "Dr. Fatima A Butt is a Doctor of Dental Surgery dedicated to your health and well-being. In her free time, she enjoys hiking, painting, and spending time with her family.",
    image: "/Images/fatima.jpg",
  },
  {
    name: "Dr. Steven J Smith DMD",
    role: "Retired Doctor",
    description: "Dr. Steven J Smith DMD served our community for over 30 years as a Doctor of Medicine in Dentistry. He is now retired and enjoys gardening, reading, and traveling with his wife.",
    image: "/Images/025.JPG", // updated image path
  },
  
];

const teamMembers = [
  {
    name: "Mary A Moore RDH",
    role: "Dental Hygienist",
    description: "Mary A Coffman RDH is a registered dental hygienist dedicated to providing the best dental care possible.",
    image: "/Images/mary.jpg",
  },
  {
    name: "Saad Aslam CRDH",
    role: "Dental Hygienist",
    description: "Saad Aslam CRDH specializes in dental hygiene and is passionate about creating beautiful smiles.",
    image: "/Images/saad.jpg",
  },
  {
    name: "Audrey Jones",
    role: "Dental Assistant",
    description: "Bio Coming Soon. Audrey Jones is a dedicated dental assistant who ensures that our patients receive the best care possible.",
    image: "/Images/girlImage.png",
  },
  {
    name: "Rina Lantigua EFDA",
    role: "Dental Assistant",
    description: "Rina Lantigua EFDA is an expanded functions dental assistant dedicated to providing the best dental care possible.",
    image: "/Images/rina.jpg",
  },
  {
    name: "Alexandria Thornton",
    role: " DA EFDA",
    description: "Bio Coming Soon",
    image: "/Images/girlImage.png",
  },
  {
    name: "Lisa Kemp",
    role: "Treatment Planner",
    description: "Lisa kemp is a treatment planner who works closely with patients to create personalized treatment plans that meet their needs.",
    image: "/Images/lisa.jpg",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (index) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

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
            <div className="bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col md:flex-row min-h-[24rem] md:h-[28rem]">
              <div className="relative w-full md:w-1/2 h-80 md:h-full">
                <img
                  style={{ objectPosition: 'center 19%' }}

                  className="w-full h-full object-cover"
                  src={doctors[0].image || "/Images/girlImage.png"}
                  alt={doctors[0].name}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:hidden">
                  <h3 className="text-xl font-bold text-white">{doctors[0].name}</h3>
                  <p className="text-sm text-blue-300">{doctors[0].role}</p>
                </div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-6">
                <div className="hidden md:block">
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">{doctors[0].name}</h3>
                  <p className="text-xl text-blue-600 font-medium">{doctors[0].role}</p>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{doctors[0].description}</p>
              </div>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col md:flex-row-reverse min-h-[24rem] md:h-[28rem]">
              <div className="relative w-full md:w-1/2 h-80 md:h-full">
                <img
                  className="w-full h-full object-cover"
                  src={doctors[1].image || "/Images/boyImage.png"}
                  alt={doctors[1].name}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:hidden">
                  <h3 className="text-xl font-bold text-white">{doctors[1].name}</h3>
                  <p className="text-sm text-blue-300">{doctors[1].role}</p>
                </div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-6">
                <div className="hidden md:block">
                  <h3 className="text-3xl font-bold text-blue-800 mb-2">{doctors[1].name}</h3>
                  <p className="text-xl text-blue-600 font-medium">{doctors[1].role}</p>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{doctors[1].description}</p>
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
              <div
                className="bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col cursor-pointer h-[500px]"
                onClick={() => handleCardClick(index)}
              >
                <div className="relative h-[320px]">
                  <img
                  style={{ objectPosition: 'center 22%' }}
                    className="w-full h-full object-cover"
                    src={member.image || (member.name.includes("Saad") ? "/Images/boyImage.png" : "/Images/girlImage.png")}
                    alt={member.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-blue-300">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 h-[180px] flex items-center justify-start">
                  <p className="text-gray-600 text-left">{member.description}</p>
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
