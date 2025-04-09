import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddDevicePage from "./components/AddDevicePage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import DeviceDetailsPage from "./components/DeviceDetailsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddDevicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details" element={<DeviceDetailsPage />} />
    </Routes>
  </BrowserRouter>
);
