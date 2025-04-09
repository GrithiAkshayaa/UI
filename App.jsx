// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AddDevice from "./pages/AddDevice";
import LoginPage from "./pages/LoginPage";
import DeviceOptions from "./pages/DeviceOptions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddDevice />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/device-options" element={<DeviceOptions />} />
    </Routes>
  );
}

export default App;
