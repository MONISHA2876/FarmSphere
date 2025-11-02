   
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
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

const AgriDashboard = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({ temp: 28, humidity: 65 });

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setWeatherData({
        temp: Math.floor(25 + Math.random() * 5),
        humidity: Math.floor(60 + Math.random() * 10),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const dashboardCards = [
    {
      id: 1,
      title: t("marketPrediction"),
      description: t("forecastCropPrices"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      sectionId: "market-predictor",
    },
    {
      id: 2,
      title: t("diseaseDetection"),
      description: t("identifyPlantDiseases"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      ),
      sectionId: "disease-detector",
    },
    {
      id: 3,
      title: t("weatherForecastTitle"),
      description: t("getRealTimeWeather"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      sectionId: "weather-forecast",
    },
    {
      id: 4,
      title: t("soilAnalysis"),
      description: t("findPerfectCrops"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.258-16c-.662.24-1.34.42-2.042.545M12 3v18m-3-3V6" />
        </svg>
      ),
      sectionId: "soil-analyzer",
    },
    {
      id: 5,
      title: t("storageManagementTitle"),
      description: t("optimizeCropStorage"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      sectionId: "storage-management",
    },
    {
      id: 6,
      title: t("marketplaceTitle"),
      description: t("buyAndSell"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      sectionId: "marketplace",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7FAF7] text-gray-800 pt-24 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t("smartFarmingDashboard")}
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {t("accessAllTools")}
          </p>
        </div>

        {/* Weather Widget */}
        <div
          className={`mt-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="inline-flex items-center bg-white/70 backdrop-blur-md rounded-full p-3 sm:p-4 shadow-md hover:shadow-lg border border-white/60 transition-shadow duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 mr-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            </svg>
            <div className="text-sm sm:text-base">
              <span className="font-bold">{weatherData.temp}°C</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>{t("humidity")}: {weatherData.humidity}%</span>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
       
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => (
    
            <div
              key={card.id}
              className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:ring-2 hover:ring-green-500/30 cursor-pointer min-h-[200px]"
              onClick={() => handleCardClick(card.sectionId)}
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                opacity: isLoaded ? 1 : 0,
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              <div className="relative z-10">
                <div className="p-3 bg-green-50 rounded-full inline-block text-green-700 transition-colors duration-300 group-hover:bg-green-100">
                  {card.icon}
                </div>
                <h3 className="mt-4 font-bold text-xl text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {card.description}
                </p>
                <div className="mt-4 text-sm font-semibold text-green-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                  <span>{t("exploreTool")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgriDashboard;