// src/pages/Home.jsx

import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection   from "../components/Hero";
import Services      from "../components/Services";
import Features      from "../components/Features";
import Team          from "../components/Team";
import OurLocation   from "../components/OurLocation";
import Offers        from "../components/offers";
import FAQs          from "../components/FAQs";
import Insurance     from "../components/Insurance";

const Home = () => {
  const faqs = [
    {
      question: "What Services does ZFC Dentistry offer?",
      answer:
        "ZFC Dentistry offers a wide range of dental services, including preventative care, virtual consultation, cleanings, fillings, root canals, extractions and more. Our experienced team is dedicated to providing exceptional oral health care to our patients.",
    },
    {
      question: "What are the effects of traditional habit known as Tooth bud extraction?",
      answer:
        "It's important to note that tooth bud extraction can have serious and detrimental effects on oral health. The tooth buds are the immature teeth that are still developing beneath the gums in children. Removing these tooth buds interferes with the natural eruption and alignment of permanent teeth, leading to various dental issues. Some potential effects of tooth bud extraction include: Misalignment of Teeth, Impacted Teeth, Bite Problems, Psychological Impact. It's essential to prioritize evidence-based dental care practices.",
    },
    {
      question: "How do I schedule an appointment at ZFC?",
      answer:
        "To schedule an appointment at ZFC simply fill out the form and submit. Besides our online booking system, you can also give us a call. We offer flexible scheduling options to ensure that you can receive the care you need at a time that works for you.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "It is recommended to visit the dentist every six months for a routine check-up and cleaning.",
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer:
        "If you have a dental emergency, contact our office immediately. We offer emergency dental services to address urgent dental issues.",
    },
    {
      question: "How can I improve my oral hygiene?",
      answer:
        "To improve your oral hygiene, brush your teeth twice a day, floss daily, and use mouthwash. Additionally, maintain a healthy diet and avoid sugary foods and drinks.",
    },
    {
      question: "What are the benefits of cosmetic dentistry?",
      answer:
        "Cosmetic dentistry can enhance your smile, boost your confidence, and improve your overall oral health. Services include teeth whitening, veneers, and more.",
    },
    {
      question: "Are dental X-rays safe?",
      answer:
        "Yes, dental X-rays are safe. They use a very low level of radiation and are an essential tool for diagnosing dental issues.",
    },
    {
      question: "What is the process for getting dental implants?",
      answer:
        "The process for getting dental implants involves a consultation, placement of the implant, and placement of the crown. The entire process can take several months.",
    },
    {
      question: "How can I prevent cavities?",
      answer:
        "To prevent cavities, maintain good oral hygiene, avoid sugary foods and drinks, and visit the dentist regularly for check-ups and cleanings.",
    },
    {
      question: "What should I do if I have sensitive teeth?",
      answer:
        "If you have sensitive teeth, use a toothpaste designed for sensitive teeth, avoid acidic foods and drinks, and consult with your dentist for further advice.",
    },
    {
      question: "What are the options for replacing missing teeth?",
      answer:
        "Options for replacing missing teeth include dental implants, bridges, and dentures. Your dentist can help determine the best option for you.",
    },
    {
      question: "How can I whiten my teeth?",
      answer:
        "Teeth whitening options include in-office treatments, take-home kits, and over-the-counter products. Consult with your dentist to determine the best option for you.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Z Family & Cosmetic Dentistry • Deltona, FL</title>
        <meta
          name="description"
          content="Z Family & Cosmetic Dentistry in Deltona, FL offers modern family & cosmetic care. Book online or call (386) 574-7272 today!"
        />
        <link
          rel="canonical"
          href="https://www.deltonafldentist.com/"
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Z Family & Cosmetic Dentistry",
            "image": "https://www.deltonafldentist.com/icon.png",
            "url": "https://www.deltonafldentist.com",
            "telephone": "(386) 574-7272",
            "email": "Info@deltonafldentist.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "WR3H+C7P Deltona, Florida, USA",
              "addressLocality": "Deltona",
              "addressRegion": "FL",
              "addressCountry": "US"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <HeroSection />
        <Services />
        <Features />
        <Team />
        <OurLocation />

        <div className="bg-blue-700 p-10 mx-4 md:mx-0 mt-8 rounded-lg shadow-md text-center text-white">
          <h2 className="text-3xl font-extrabold mb-5">Get in Touch with Us</h2>
          <p className="text-lg mb-5 text-gray-200">
            Leave us a message today for any inquiries or feedback.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-6 py-3 bg-white text-blue-800 rounded-md text-lg font-medium transition hover:bg-blue-900 hover:text-white"
          >
            Contact Us
          </button>
          <p className="text-lg mt-5">
            Or call us at: <strong>(386) 574-7272</strong>
          </p>
        </div>

        <Offers />
        <FAQs faqs={faqs} sectionTitle="FAQs" />
        <Insurance />
      </div>
    </>
  );
};

export default Home;
