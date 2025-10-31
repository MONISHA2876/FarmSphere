import React, { useState, useEffect } from "react";
import Header from "../Components/header";
import AgriDashboard from "../Components/AgriDashboard";
import StorageForm from "../Components/StorageManagement";
import PlantDiseaseDetection from "../Components/PlantDiseaseDetector";
import WeatherForecast from "../Components/WeatherAnalyser";
import MarketPrediction from "../Components/MarketPredictor";

export default function FarmerFrontend() {
  return (
    <div>
      <Header />
      <div className="pt-24 md:pt-28">
        <AgriDashboard />
        <StorageForm />
        <PlantDiseaseDetection />
        <WeatherForecast />
        <MarketPrediction />
      </div>
    </div>
  );
}
