import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const getMenuItems = (t) => [
  { name: t("home"), path: "#home" },
  { name: t("diseaseDetector"), path: "#disease-detector" },
  { name: t("soilAnalyzer"), path: "#soil-analyzer" },
  { name: t("pricePredictor"), path: "#market-predictor" },
  { name: t("weatherForecast"), path: "#weather-forecast" },
  { name: t("storageManagement"), path: "#storage-management" },
  { name: t("marketplace"), path: "#marketplace" },
];

const scrollToSection = (e, path) => {
  e.preventDefault();
  const elementId = path.replace('#', '');
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = getMenuItems(t);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => item.path.replace('#', ''));
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

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
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="relative group flex items-center space-x-2 cursor-pointer"
          >
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
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const sectionId = item.path.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-primary-lighter hover:bg-primary-light/20 hover:shadow-sm group cursor-pointer"
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
                      activeItem === item.name || isActive
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Language Toggle & Login Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="bg-primary-light/30 hover:bg-primary-light/50 text-primary-foreground rounded-full px-4 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-primary-lighter/30 flex items-center space-x-2"
              title={language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
            >
              <span className="text-sm">{language === 'en' ? '🇮🇳' : '🇬🇧'}</span>
              <span className="text-xs">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
            <button className="bg-button-primary hover:bg-button-hover text-primary-foreground rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-lighter/20">
              {t("login")}
            </button>
          </div>

          {/* Mobile Language Toggle & Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="bg-primary-light/30 hover:bg-primary-light/50 text-primary-foreground rounded-full px-3 py-1.5 font-medium transition-all duration-300 hover:scale-105 border border-primary-lighter/30 flex items-center space-x-1"
              title={language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
            >
              <span className="text-xs">{language === 'en' ? '🇮🇳' : '🇬🇧'}</span>
              <span className="text-xs">{language === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>
            <button
              className="p-2 rounded-lg hover:bg-primary-light/20 transition-all duration-300"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  scrollToSection(e, item.path);
                  setMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light/20 transition-all duration-300 transform cursor-pointer ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <div className="w-full bg-button-primary hover:bg-button-hover text-white rounded-lg py-3 px-4 font-medium transition-all duration-300 hover:shadow-lg text-center cursor-pointer">
                {t("login")}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
