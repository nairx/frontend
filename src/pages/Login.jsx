import React, { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(user)
      await api.post("/auth/login", user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <p>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </p>
        <p>
          <button>Login</button>
        </p>
        <p>
          New User? <Link to="/register">Register Here</Link>
        </p>
      </form>
    </div>
  );
}
