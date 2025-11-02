import React, { useState, useEffect } from "react";
import Header from "../Components/header";
import AgriDashboard from "../Components/AgriDashboard";
import StorageForm from "../Components/StorageManagement";
import PlantDiseaseDetection from "../Components/PlantDiseaseDetector";
import WeatherForecast from "../Components/WeatherAnalyser";
import MarketPrediction from "../Components/MarketPredictor";
import SoilPredictor from "../Components/SoilDetector";
import Marketplace from "../Components/MarketPlace";

export default function FarmerFrontend() {
  return (
    <div>
      <Header />
      <div className="pt-24 md:pt-28">
        <section id="home">
          <AgriDashboard />
        </section>
        <section id="storage-management">
          <StorageForm />
        </section>
        <section id="disease-detector">
          <PlantDiseaseDetection />
        </section>
        <section id="weather-forecast">
          <WeatherForecast />
        </section>
        <section id="market-predictor">
          <MarketPrediction />
        </section>
        <section id="soil-analyzer">
          <SoilPredictor />
        </section>
        <section id="marketplace">
          <Marketplace />
        </section>
      </div>
    </div>
  );
}
