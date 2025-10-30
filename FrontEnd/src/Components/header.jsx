import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const colors = {
    primary: {
      dark: "#0f2b22", // darker deep forest green (darkened)
      main: "#1f4d3d", // darker forest green (darkened)
      light: "#40916C", // Sage green
      lighter: "#52B788", // Mint green
      lightest: "#74C69D", // Light mint
      bg: "#081C15", // Dark background
    },
    button: {
      main: "#40916C", // Match with primary.light
      hover: "#52B788", // Match with primary.lighter
      focus: "#74C69D", // Match with primary.lightest
    },
    white: "#FFFFFF",
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Disease Detector", path: "/" },
    { name: "Soil Analyzer", path: "/" },
    { name: "Price Predictor", path: "/" },
    { name: "Weather Forecast", path: "/" },
    { name: "Storage Management", path: "/" },
    { name: "MarketPlace", path: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ${
        scrolled
          ? `bg-[${colors.primary.dark}] shadow-lg py-2 backdrop-blur-md`
          : `bg-[${colors.primary.main}] py-4 backdrop-blur-sm`
      } text-[${colors.white}] px-6 md:px-16`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto md:justify-start">
        <div className="text-2xl font-bold relative overflow-hidden group md:mr-12">
          <div className="flex items-center">
            <span
              className={`text-[${colors.primary.light}] mr-2 transform transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-125 motion-safe:will-change-transform`}
            >
              🌿
            </span>
            <span className="inline-block relative">
              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0">
                Farm
              </span>
              <span
                className={`inline-block transition-colors duration-400 group-hover:text-[${colors.primary.light}]`}
              >
                Sphere
              </span>
              <span
                className={`absolute left-0 top-0 text-[${colors.primary.light}] transition-transform duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}
                style={{ willChange: "transform, opacity" }}
              >
                Eco
              </span>
            </span>
          </div>
          <span
            className={`absolute -bottom-1 left-0 w-0 h-1 bg-[${colors.primary.light}] transition-all duration-500 ease-in-out group-hover:w-full rounded-full origin-left transform-gpu`}
          ></span>
        </div>

        <button
          className={`md:hidden focus:outline-none p-2 rounded-full bg-[${colors.primary.bg}] bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 hover:scale-110`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative flex justify-center items-center">
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <nav className="hidden md:flex md:justify-between md:grow">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative transition-transform duration-200 hover:-translate-y-0.5"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <a
                  href={item.path}
                  className={`text-[${colors.white}] no-underline text-sm py-2 block hover:text-[${colors.primary.lighter}] transition-all duration-300`}
                >
                  <span
                    className={`transition-all duration-300 ${
                      activeItem === item.name
                        ? `transform scale-110 text-[${colors.primary.lighter}] font-medium`
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[${
                      colors.primary.light
                    }] transition-all duration-300 ${
                      activeItem === item.name ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <Link to="/RegisterPage">
              <button
                className={`bg-[${colors.button.main}] hover:bg-[${colors.button.hover}] px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[${colors.button.focus}]`}
              >
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 pt-6" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`transform transition-all duration-300 hover:bg-[${
                colors.primary.bg
              }] hover:bg-opacity-30 rounded-lg px-4 ${
                menuOpen
                  ? `opacity-100 translate-x-0`
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
            >
              <a
                href={item.path}
                className={`py-3 text-[${colors.white}] no-underline text-sm hover:text-[${colors.primary.lighter}] transition-all duration-300 flex items-center`}
              >
                <span>{item.name}</span>
                <span className="ml-auto transform transition-all duration-300 opacity-0 hover:opacity-100">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
          <li className="mt-4 px-4 pb-4">
            <Link to="/RegisterPage" className="block w-full">
              <button
                className={`w-full bg-[${colors.button.main}] hover:bg-[${colors.button.hover}] py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[${colors.button.focus}]`}
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
