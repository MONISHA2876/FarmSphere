import React, { useState, useEffect } from "react";
import Header from "../Components/header";
import AgriDashboard from "../Components/AgriDashboard";

export default function FarmerFrontend() {
  return (
    <div>
      <Header />
      <AgriDashboard />
    </div>
  );
}
