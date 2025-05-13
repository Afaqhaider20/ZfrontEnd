// src/pages/ContactUs.jsx

import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/Contact";
import { Fade } from "react-awesome-reveal";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Deltona FL Dentist • Z Family Dentistry</title>
        <meta
          name="description"
          content="Get in touch with Z Family & Cosmetic Dentistry in Deltona, FL. Fill out our form or call (386) 574-7272 to book your appointment today."
        />
        <link
          rel="canonical"
          href="https://www.deltonafldentist.com/contact"
        />
      </Helmet>

      <div className="bg-blue-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white pt-28 pb-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/Images/backgroundTexture.jpg)` }}
          >
            <div className="absolute inset-0 bg-blue-700 opacity-75"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <Fade direction="down">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                Contact Us
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
                We are here to help you with any questions or concerns you may
                have. Reach out to us and we will get back to you as soon as
                possible.
              </p>
              {/* Buttons Container */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://book2.getweave.com/c0e939c8-ae93-4574-9323-84a1c55e8447/request-appointment?source=WEBSITE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:bg-white hover:text-blue-900 border border-blue-900"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:(386)574-7272"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:bg-white hover:text-blue-900 border border-blue-900"
                >
                  Call (386) 574-7272
                </a>
              </div>
            </Fade>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-6 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
