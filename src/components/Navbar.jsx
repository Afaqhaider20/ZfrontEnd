import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { animateScroll } from 'react-scroll';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const location = window.location;

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "#",
      label: "General Dentistry",
      items: [
        {
          id: 1,
          link: "/Teeth-Cleaning",
          label: "Teeth Cleaning",
        },
        {
          id: 2,
          link: "/Cavity-filling",
          label: "Cavity Filling",
        },
        {
          id: 3,
          link: "/Tooth-extraction",
          label: "Tooth Extraction",
        },
        {
          id: 4,
          link: "/Periodontal-Treatment",
          label: "Periodontal Treatment",
        },
      ],
    },
    {
      id: 2,
      link: "#",
      label: "Cosmetic Dentistry",
      items: [
        {
          id: 1,
          link: "/Teeth-Whitening",
          label: "Teeth Whitening",
        },
        {
          id: 2,
          // Updated link and label:
          link: "/Aesthetic-Crowns-and-Veneers",
          label: "Aesthetic Crowns & Veneers",
        },
      ],
    },
    {
      id: 3,
      link: "#",
      label: "Restorative Dentistry",
      items: [
        {
          id: 1,
          link: "/Dental-Implants",
          label: "Dental Implants",
        },
        {
          id: 2,
          link: "/Root-Canal",
          label: "Root Canal",
        },
        {
          id: 3,
          link: "/Crowns-and-Bridges",
          label: "Crowns and Bridges",
        },
        {
          id: 4,
          link: "/Explore-Dentures",
          label: "Dentures",
        },
      ],
    },
    {
      id: 4,
      link: "#",
      label: "Insurance & Financing",
      items: [
        {
          id: 1,
          link: "/Membership-Plan",
          label: "Our Membership Plan",
        },
        {
          id: 2,
          link: "/Insurance-and-Finacing",
          label: "Insurance & Financing",
        },
      ],
    },
    {
      id: 5,
      link: "#",
      label: "About Us",
      items: [
        {
          id: 1,
          link: "/team",
          label: "Our Team",
        },
        {
          id: 2,
          link: "/Our-Mission",
          label: "Our Mission & Vision",
        },
        {
          id: 3,
          link: "/contact",
          label: "Contact Us",
        },
        {
          id: 4,
          link: "/Privacy-Policy",
          label: "Privacy Policy",
        },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleAccordion = (id) => {
    setActiveLink(activeLink === id ? null : id);
  };

  // External appointment URL for the Book Appointment button
  const appointmentURL = "https://book2.getweave.com/c0e939c8-ae93-4574-9323-84a1c55e8447/request-appointment?source=WEBSITE";

  return (
    <header
      className={`fixed w-full flex items-center justify-between px-4 py-1 transition-all${
        showNavbar ? " bg-white shadow-md text-blue-900" : " text-white"
      }`}
      style={{
        zIndex: showMenu ? 999 : "10",
        backgroundImage: `linear-gradient(rgba(0, 0, 139, 0.5), rgba(0, 0, 139, 0.5)), url(/Images/bg2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '3px solid',
        borderImage: 'linear-gradient(to right, lightgray, silver) 1',
        height: '4.7rem',
      }}
    >
      <Link
        to="/"
        className="flex items-center whitespace-nowrap cursor-pointer relative"
        onClick={scrollToTop}
        style={{ bottom: '-1rem' }}
      >
        <img src="/Images/logo5.png" alt="ZFC Dentistry Logo" className="drop-shadow-lg mr-1 h-[7rem] w-[7rem] mt-1 z-50" />
      </Link>

      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex items-center space-x-6 px-1">
          {links.map(({ id, link, label, items }) => (
            <li key={id} className="relative group">
              <Link
                onClick={scrollToTop}
                to={link}
                className="drop-shadow-xl cursor-pointer font-semibold hover:text-blue-400 text-white text-lg"
              >
                {label}
              </Link>
              {items && items.length > 0 ? (
                <div className="invisible absolute z-50 flex w-64 flex-col bg-white py-1 px-4 text-gray-800 shadow-xl rounded-lg group-hover:visible">
                  {items.map(({ id, link, label }) => (
                    <a
                      key={id}
                      href={link}
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-blue-900 hover:text-blue-700 md:mx-2"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Updated Book Appointment button (desktop) */}
      <a
        href={appointmentURL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex mb-3 h-12 items-center justify-center rounded-lg bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900"
      >
        Book Appointment
      </a>

      <div className="lg:hidden">
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <svg
              className="h-6 w-6 font-semibold text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 font-semibold text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {showMenu && (
          <ul className="gap-y-6 absolute top-10 my-8 left-0 right-0 z-30 w-full py-6 px-4 bg-white border-t border-gray-300 shadow-md flex flex-col items-start overflow-y-auto">
            {links.map(({ id, label, items }) => (
              <li key={id} className="w-full">
                <button
                  className="w-full px-4 py-2 font-semibold mt-1 text-blue-800 hover:text-blue-500 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleAccordion(id)}
                >
                  {label}
                  {items && items.length > 0 && (
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        activeLink === id ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                {activeLink === id && items?.length > 0 && (
                  <div className="flex flex-col w-full ml-4 border-l border-gray-300">
                    {items.map(({ id, link, label }) => (
                      <Link
                        key={id}
                        to={link}
                        className="block w-full px-4 py-2 mt-2 font-semibold text-blue-800 hover:text-blue-500"
                        onClick={toggleMenu}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            {/* Updated Book Appointment button (mobile) */}
            <li className="w-full">
              <a
                href={appointmentURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mx-3 my-6 inline-flex h-12 items-center justify-center rounded-lg bg-blue-900 px-12 py-3 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none hover:bg-white hover:text-blue-900 border border-blue-900"
                onClick={toggleMenu}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
