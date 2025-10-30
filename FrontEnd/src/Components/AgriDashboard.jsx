// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AgriDashboard = () => {
//   // Theme colors (used via CSS variables on the root container)
//   const colors = {
//     primary: {
//       dark: "#1B4332",
//       main: "#2D6A4F",
//       light: "#40916C",
//       lighter: "#52B788",
//       lightest: "#74C69D",
//       bg: "#081C15",
//     },
//     button: {
//       main: "#40916C",
//       hover: "#52B788",
//       focus: "#74C69D",
//     },
//     white: "#FFFFFF",
//   };
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [weatherData, setWeatherData] = useState({ temp: 28, humidity: 65 });
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsLoaded(true);
//     const interval = setInterval(() => {
//       setWeatherData({
//         temp: Math.floor(25 + Math.random() * 5),
//         humidity: Math.floor(60 + Math.random() * 10),
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleCardClick = (cardId) => {
//     switch (cardId) {
//       case 1:
//         navigate("/market-predection");
//         break;
//       case 2:
//         navigate("/disease-detection");
//         break;
//       case 3:
//         navigate("/weather-predection");
//         break;
//       case 4:
//         navigate("/SoilPredictor");
//         break;
//       case 5:
//         navigate("/StorageForm");
//         break;
//       case 6:
//         navigate("/Marketplace");
//         break;
//       default:
//         setActiveCard(cardId);
//         break;
//     }
//   };

//   const dashboardCards = [
//     {
//       id: 1,
//       title: "Market Prediction",
//       description: "Forecast prices for crops using AI algorithms",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="w-12 h-12 text-(--primary-light) group-hover:text-(--primary-bg) transition-colors duration-300"
//         >
//           <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
//         </svg>
//       ),
//       notification: 0,
//     },
//     {
//       id: 2,
//       title: "Plant Disease Detection",
//       description: "Identify plant diseases using image processing",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="w-12 h-12 text-(--primary-light) group-hover:text-(--primary-bg) transition-colors duration-300"
//         >
//           <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       ),
//       notification: 0,
//     },
//     {
//       id: 3,
//       title: "Weather Prediction",
//       description: "Real-time weather forecasts for your farm location",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="w-12 h-12 text-(--primary-light) group-hover:text-(--primary-bg) transition-colors duration-300"
//         >
//           <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//         </svg>
//       ),
//       notification: 0,
//     },
//     {
//       id: 4,
//       title: "Soil Dectection",
//       description: "Know what plant to plant on you soil",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="w-12 h-12 text-(--primary-light) group-hover:text-(--primary-bg) transition-colors duration-300"
//         >
//           <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//         </svg>
//       ),
//       notification: 0,
//     },
//     {
//       id: 5,
//       title: "Storage",
//       description: "Monitor and optimize crop storage conditions",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="w-12 h-12 text-(--primary-light) group-hover:text-(--primary-bg) transition-colors duration-300"
//         >
//           <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
//         </svg>
//       ),
//       notification: 0,
//     },
//     {
//       id: 6,
//       title: "Marketplace",
//       description: "Buy and sell agricultural products online",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="w-12 h-12 text-(--primary-light) group-hover:text-(--primary-bg) transition-colors duration-300"
//         >
//           <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//       notification: 0,
//     },
//   ];

//   return (
//     <div
//       className={`w-full min-h-screen bg-[#2f7d6e] p-6 overflow-hidden`}
//       style={{
//         "--primary-dark": colors.primary.dark,
//         "--primary-main": colors.primary.main,
//         "--primary-light": colors.primary.light,
//         "--primary-lighter": colors.primary.lighter,
//         "--primary-lightest": colors.primary.lightest,
//         "--primary-bg": colors.primary.bg,
//         "--btn-main": colors.button.main,
//         "--btn-hover": colors.button.hover,
//         "--btn-focus": colors.button.focus,
//         "--white": colors.white,
//       }}
//     >
//       <div className="fixed inset-0 z-0 opacity-10">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: `${Math.random() * 8 + 2}px`,
//               height: `${Math.random() * 8 + 2}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//               backgroundColor: "var(--white)",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <header className="text-center mb-12 pt-6">
//           <div
//             className={`transition-all duration-1000 transform ${
//               isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-10"
//             }`}
//           >
//             <p className="uppercase tracking-wider text-sm mb-2 relative inline-block text-(--primary-lightest)">
//               SMART AGRICULTURAL TOOLS
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-(--primary-light) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//             </p>
//             <br></br>
//             <h1 className="text-(--white) text-4xl md:text-5xl font-bold relative inline-block">
//               Smart Farming Dashboard
//               <div
//                 className="absolute -bottom-2 left-0 w-full h-1 transform scale-x-0 origin-left transition-transform duration-700"
//                 style={{
//                   backgroundColor: "var(--primary-light)",
//                   transform: isLoaded ? "scaleX(1)" : "scaleX(0)",
//                 }}
//               ></div>
//             </h1>
//           </div>

//           <div
//             className={`mt-6 inline-flex items-center bg-black bg-opacity-25 rounded-full px-4 py-2 text-(--white) transition-all duration-700 ${
//               isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//             style={{ transitionDelay: "400ms" }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 mr-2 text-(--primary-light)"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
//             </svg>
//             <span>{weatherData.temp}°C</span>
//             <span className="mx-2">|</span>
//             <span>Humidity: {weatherData.humidity}%</span>
//           </div>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {dashboardCards.map((card, index) => (
//             <div
//               key={card.id}
//               className="group bg-gray-800 bg-opacity-25 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center transition-all duration-500 hover:bg-(--primary-light) hover:text-(--primary-bg) cursor-pointer relative shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
//               onMouseEnter={() => {
//                 setActiveCard(card.id);
//                 setIsHovering(true);
//               }}
//               onMouseLeave={() => {
//                 setActiveCard(null);
//                 setIsHovering(false);
//               }}
//               onClick={() => handleCardClick(card.id)}
//               style={{
//                 transform: isLoaded ? "translateY(0)" : "translateY(50px)",
//                 opacity: isLoaded ? 1 : 0,
//                 transitionDelay: `${index * 100}ms`,
//               }}
//             >
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full scale-0 group-hover:scale-150"
//                 style={{
//                   transformOrigin: "center",
//                   transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
//                   backgroundColor: "var(--primary-light)",
//                 }}
//               ></div>

//               {card.notification > 0 && (
//                 <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
//                   {card.notification}
//                 </div>
//               )}

//               <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
//                 {card.icon}
//                 <svg
//                   className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-700 transform rotate-0 group-hover:rotate-180"
//                   viewBox="0 0 100 100"
//                 >
//                   <circle
//                     cx="50"
//                     cy="50"
//                     r="40"
//                     stroke="currentColor"
//                     strokeWidth="8"
//                     fill="none"
//                   />
//                 </svg>
//               </div>

//               <h3 className="font-bold text-lg text-center text-(--white) group-hover:text-(--primary-bg) transition-colors duration-300 mb-2">
//                 {card.title}
//               </h3>

//               <p className="text-(--primary-lighter) text-sm text-center mt-1 transition-all duration-500 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 overflow-hidden">
//                 {card.description}
//               </p>

//               <div className="mt-4 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
//                 <button className="w-full py-1 px-3 bg-(--btn-main) text-(--white) text-sm rounded transition-all duration-300 hover:bg-(--btn-hover) flex items-center justify-center">
//                   <span>Open</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//           100% {
//             transform: translateY(0) rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AgriDashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AgriDashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({ temp: 28, humidity: 65 });
  const navigate = useNavigate();

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

  const handleCardClick = (path) => {
    navigate(path);
  };

  const dashboardCards = [
    {
      id: 1,
      title: "Market Prediction",
      description: "Forecast crop prices with AI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      path: "/market-predection",
    },
    {
      id: 2,
      title: "Disease Detection",
      description: "Identify plant diseases from images.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      ),
      path: "/disease-detection",
    },
    {
      id: 3,
      title: "Weather Forecast",
      description: "Get real-time weather updates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      path: "/weather-predection",
    },
    {
      id: 4,
      title: "Soil Analysis",
      description: "Find the perfect crops for your soil.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.258-16c-.662.24-1.34.42-2.042.545M12 3v18m-3-3V6" />
        </svg>
      ),
      path: "/SoilPredictor",
    },
    {
      id: 5,
      title: "Storage Management",
      description: "Optimize your crop storage conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      path: "/StorageForm",
    },
    {
      id: 6,
      title: "Marketplace",
      description: "Buy and sell agricultural products.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      path: "/Marketplace",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F0F5F0] text-gray-800 pt-24 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Smart Farming Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Access all your agricultural tools in one place.
          </p>
        </div>

        {/* Weather Widget */}
        <div
          className={`mt-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="inline-flex items-center bg-white/60 backdrop-blur-md rounded-full p-3 sm:p-4 shadow-lg border border-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 mr-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            </svg>
            <div className="text-sm sm:text-base">
              <span className="font-bold">{weatherData.temp}°C</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>Humidity: {weatherData.humidity}%</span>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative rounded-xl p-6 bg-white/60 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCardClick(card.path)}
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                opacity: isLoaded ? 1 : 0,
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              <div className="relative z-10">
                <div className="p-3 bg-green-100/80 rounded-full inline-block text-green-700 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="mt-4 font-bold text-xl text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {card.description}
                </p>
                <div className="mt-4 text-sm font-semibold text-green-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                  <span>Explore Tool</span>
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