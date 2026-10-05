import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      console.log(res.data)
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="flex justify-between">
      <h1>User Management</h1>
      <Link to="users/add">Add User</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>Delete Edit</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
