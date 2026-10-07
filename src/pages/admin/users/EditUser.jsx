import React from "react";
import api from "../../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function EditUser() {
  const params = useParams();
  const [user, setUser] = useState({});
  const id = params.id;
  const navigate = useNavigate();
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

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await api.put("/users/update/" + id, user);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h1>Edit User Form</h1>
        <p>
          <input
            type="text"
            defaultValue={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input type="text" defaultValue={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </p>
        <p>
          <input type="text" defaultValue={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} />
        </p>
        <p>
          <button>Update</button>
        </p>
      </form>
    </div>
  );
}
