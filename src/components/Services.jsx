// src/components/Services.jsx

import React, { useState } from "react";
import { Helmet }            from "react-helmet-async";
import { Fade }              from "react-awesome-reveal";
import Heading               from "./Heading";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: "General Dentistry",
      description:
        "Routine cleanings, exams, fillings, and extractions. Comprehensive dental services for everyone.",
      image: "/Images/GeneralDentistry.jpg",
      links: [
        { id: 1, link: "/Teeth-Cleaning", label: "Teeth Cleaning" },
        { id: 2, link: "/Cavity-filling", label: "Cavity Filling" },
        { id: 3, link: "/Tooth-extraction", label: "Tooth Extraction" },
        { id: 4, link: "/Periodontal-Treatment", label: "Periodontal Treatment" },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and more. Enhance your smile with our services.",
      image: "/Images/CosmaticDentistry.jpg",
      links: [
        { id: 1, link: "/Teeth-Whitening", label: "Teeth Whitening" },
        { id: 2, link: "/Aesthetic-Crowns-and-Veneers", label: "Aesthetic Crowns & Veneers" },
      ],
    },
    {
      title: "Restorative Dentistry",
      description:
        "Dental implants, crowns, and bridges. Restore your smile with our expertise.",
      image: "/Images/RestorativeDentistry.jpg",
      links: [
        { id: 1, link: "/Dental-Implants", label: "Dental Implants" },
        { id: 2, link: "/Root-Canal", label: "Root Canal" },
        { id: 3, link: "/Crowns-and-Bridges", label: "Crowns and Bridges" },
      ],
    },
    {
      title: "Dentures",
      description:
        "Partial and complete dentures to replace missing teeth effectively and comfortably.",
      image: "/Images/Dentures.png",
      links: [
        { id: 1, link: "/Explore-Dentures", label: "Full Dentures" },
        { id: 2, link: "/Explore-Dentures", label: "Partial Dentures" },
        { id: 3, link: "/Explore-Dentures", label: "Implant-Supported Dentures" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dental Services in Deltona, FL • Z Family & Cosmetic Dentistry</title>
        <meta
          name="description"
          content="Explore our dental services in Deltona, FL—cleanings, fillings, crowns, implants, dentures & more at Z Family & Cosmetic Dentistry."
        />
        <link rel="canonical" href="https://www.deltonafldentist.com/services" />
      </Helmet>

      <div
        className="bg-blue-200 py-12 w-full"
        style={{
          backgroundImage: `url(/Images/background1.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <section className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-20">
          <Heading title="Our Dental Services" subtitle="Services" />
          <div className="grid gap-6 row-gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Fade key={index} direction="left">
                <div className="max-w-sm bg-white border border-gray-200 rounded-[4rem] rounded-bl-md rounded-tr-md shadow-lg mx-auto transition-shadow duration-300 hover:shadow-2xl">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-tl-[4rem] rounded-tr-md w-full h-72 object-cover"
                    />
                  )}
                  <div className="p-5" style={{ minHeight: "200px" }}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {service.title}
                    </h5>
                    {activeCard === index ? (
                      <ul className="mb-3 font-normal text-gray-700">
                        {service.links.map((link) => (
                          <li key={link.id} className="mb-2">
                            <a
                              href={link.link}
                              className="text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-200"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        <p className="mb-3 font-normal text-gray-700">
                          {service.description}
                        </p>
                        <button
                          onClick={() => setActiveCard(index)}
                          className="rounded border inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-blue-900 bg-blue-900 tracking-wide shadow-md transition duration-200 focus:outline-none hover:bg-white hover:text-blue-900"
                        >
                          Learn more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
