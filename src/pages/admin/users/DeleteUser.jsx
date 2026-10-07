import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";
export default function DeleteUser() {
  const params = useParams();
  const [user, setUser] = useState({});
  const id = params.id;
  const navigate = useNavigate()
  const fetchUser = async () => {
    try {
      const res = await api.get("/users/" + id);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await api.delete("/users/delete/" + id);
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <h1>Confirm User Deletion</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p>
          <button>Confirm</button>
        </p>
      </form>
    </div>
  );
}
