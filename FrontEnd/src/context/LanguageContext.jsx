import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Header
    home: "Home",
    diseaseDetector: "Disease Detector",
    soilAnalyzer: "Soil Analyzer",
    pricePredictor: "Price Predictor",
    weatherForecast: "Weather Forecast",
    storageManagement: "Storage Management",
    marketplace: "MarketPlace",
    login: "Login",
    
    // Dashboard
    smartFarmingDashboard: "Smart Farming Dashboard",
    accessAllTools: "Access all your agricultural tools in one place.",
    humidity: "Humidity",
    marketPrediction: "Market Prediction",
    forecastCropPrices: "Forecast crop prices with AI.",
    diseaseDetection: "Disease Detection",
    identifyPlantDiseases: "Identify plant diseases from images.",
    weatherForecastTitle: "Weather Forecast",
    getRealTimeWeather: "Get real-time weather updates.",
    soilAnalysis: "Soil Analysis",
    findPerfectCrops: "Find the perfect crops for your soil.",
    storageManagementTitle: "Storage Management",
    optimizeCropStorage: "Optimize your crop storage conditions.",
    marketplaceTitle: "Marketplace",
    buyAndSell: "Buy and sell agricultural products.",
    exploreTool: "Explore Tool",
  },
  hi: {
    // Header
    home: "होम",
    diseaseDetector: "रोग पहचानक",
    soilAnalyzer: "मिट्टी विश्लेषक",
    pricePredictor: "मूल्य भविष्यवक्ता",
    weatherForecast: "मौसम पूर्वानुमान",
    storageManagement: "भंडारण प्रबंधन",
    marketplace: "बाज़ार",
    login: "लॉगिन",
    
    // Dashboard
    smartFarmingDashboard: "स्मार्ट खेती डैशबोर्ड",
    accessAllTools: "एक जगह पर अपने सभी कृषि उपकरणों तक पहुंचें।",
    humidity: "नमी",
    marketPrediction: "बाजार भविष्यवाणी",
    forecastCropPrices: "AI के साथ फसल की कीमतों का पूर्वानुमान लगाएं।",
    diseaseDetection: "रोग पहचान",
    identifyPlantDiseases: "छवियों से पौधों की बीमारियों की पहचान करें।",
    weatherForecastTitle: "मौसम पूर्वानुमान",
    getRealTimeWeather: "वास्तविक समय मौसम अपडेट प्राप्त करें।",
    soilAnalysis: "मिट्टी विश्लेषण",
    findPerfectCrops: "अपनी मिट्टी के लिए सही फसलें खोजें।",
    storageManagementTitle: "भंडारण प्रबंधन",
    optimizeCropStorage: "अपनी फसल भंडारण स्थितियों को अनुकूलित करें।",
    marketplaceTitle: "बाज़ार",
    buyAndSell: "कृषि उत्पाद खरीदें और बेचें।",
    exploreTool: "उपकरण देखें",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'en'
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

