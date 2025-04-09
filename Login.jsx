import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ ip: "", username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful");
    navigate(`/device-options/${form.ip}`);
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="IP Address" required onChange={(e) => setForm({ ...form, ip: e.target.value })} />
        <input placeholder="Username" required onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
