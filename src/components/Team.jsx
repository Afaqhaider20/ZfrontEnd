import { Fade } from "react-awesome-reveal";
import Heading from "./Heading";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. John Doe",
      role: "General Dentist",
      description:
        "With over 20 years of experience, Dr. John Doe is dedicated to providing the best dental care possible.",
      image: "/Images/chance.jpg",
    },
    {
      name: "Dr. Jane Smith",
      role: "Cosmetic Dentist",
      description:
        "Dr. Jane Smith specializes in cosmetic dentistry and is passionate about creating beautiful smiles.",
      image: "/Images/chance.jpg",
    },
    {
      name: "Dr. Michael Johnson",
      role: "Restorative Dentist",
      description:
        "Dr. Michael Johnson is an expert in restorative dentistry and is committed to restoring your smile.",
      image: "/Images/chance.jpg",
    },
  ];

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
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Heading title="Meet Our Dedicated Team" subtitle="Our Team" />
        <div className="grid gap-8 row-gap-12 sm:grid-cols-1 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Fade key={index} direction="left">
              <div className="bg-white rounded-[4rem] rounded-bl-md rounded-tr-md overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl max-w-sm mx-auto">
                <div className="relative">
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
                <div className="p-6">
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
