import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-between bg-orange-300 text-white p-3">
      <h1>MyStore</h1>
      <nav className="*:p-1">
        <Link to="/">Home</Link>
        <Link to="cart">Cart</Link>
        <Link to="admin">Admin</Link>
        <Link to="login">Login</Link>
      </nav>
    </div>
  );
}
