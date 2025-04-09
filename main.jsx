import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddDevicePage from './components/AddDevicePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import DeviceDetailsPage from './components/DeviceDetailsPage.jsx'
import LogoutPage from './components/LogoutPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddDevicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/device-details" element={<DeviceDetailsPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
