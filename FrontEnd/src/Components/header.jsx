import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Disease Detector", path: "/disease-detector" },
  { name: "Soil Analyzer", path: "/soil-analyzer" },
  { name: "Price Predictor", path: "/price-predictor" },
  { name: "Weather Forecast", path: "/weather-forecast" },
  { name: "Storage Management", path: "/storage-management" },
  { name: "MarketPlace", path: "/marketplace" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-header-scrolled/95 backdrop-blur-md shadow-lg py-3"
          : "bg-header-bg/80 backdrop-blur-sm py-5"
      } text-primary-foreground`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center space-x-2">
            <div className="relative">
              <Leaf className="w-8 h-8 text-primary-lighter transition-all duration-500 group-hover:rotate-12 group-hover:scale-125" />
              <div className="absolute inset-0 blur-lg bg-primary-lighter/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="text-2xl font-bold relative overflow-hidden">
              <span className="inline-block relative">
                <span className="inline-block transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
                  Farm
                </span>
                <span className="absolute left-0 top-0 text-primary-lighter transition-all duration-500 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Farm
                </span>
              </span>
              <span className="inline-block transition-colors duration-400 group-hover:text-primary-lighter">
                Sphere
              </span>
            </div>

            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary-lighter transition-all duration-500 group-hover:w-full rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-primary-lighter hover:bg-primary-light/20 hover:shadow-sm group"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <span
                  className={`transition-all duration-300 ${
                    activeItem === item.name ? "scale-110" : ""
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary-lighter transition-all duration-300 ${
                    activeItem === item.name || location.pathname === item.path
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden lg:block">
            <Link to="/register">
              <button className="bg-button-primary hover:bg-button-hover text-primary-foreground rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-lighter/20">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-light/20 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex justify-center items-center">
              <span
                className={`absolute h-0.5 w-6 bg-primary-foreground transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-primary-foreground transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-primary-foreground transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light/20 transition-all duration-300 transform ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/register" className="block">
                <div className="w-full bg-button-primary hover:bg-button-hover text-white rounded-lg py-3 px-4 font-medium transition-all duration-300 hover:shadow-lg text-center cursor-pointer">
                  Login
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
