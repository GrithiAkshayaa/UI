import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDevice from "./components/AddDevice";
import Login from "./components/Login";
import DeviceOptions from "./components/DeviceOptions";
import ConfigurationManagement from "./components/ConfigurationManagement";
import PerformanceManagement from "./components/PerformanceManagement";
import FaultManagement from "./components/FaultManagement";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddDevice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/device-options/:deviceType" element={<DeviceOptions />} />
        <Route path="/configuration" element={<ConfigurationManagement />} />
        <Route path="/performance" element={<PerformanceManagement />} />
        <Route path="/fault" element={<FaultManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
