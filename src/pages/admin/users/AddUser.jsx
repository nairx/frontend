import React, { useState } from "react";
import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";
export default function AddUser() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleAdd = async (e) => {
    try {
      e.preventDefault();
      await api.post("/users", user);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <h1>Add New User</h1>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
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
          <input
            type="text"
            placeholder="Role"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />
        </p>
        <p>
          <button>Add</button>
        </p>
      </form>
    </div>
  );
}
