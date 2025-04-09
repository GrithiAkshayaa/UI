// src/pages/LoginPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { ip, username, password, deviceType } = location.state || {};

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/device-options", {
      state: {
        deviceType,
      },
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 style={{ color: "blue" }}>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="IP Address" value={ip} readOnly /><br /><br />
        <input placeholder="Username" value={username} readOnly /><br /><br />
        <input type="password" placeholder="Password" value={password} readOnly /><br /><br />
        <button type="submit" style={{ backgroundColor: "#00bfff", padding: "10px 20px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
