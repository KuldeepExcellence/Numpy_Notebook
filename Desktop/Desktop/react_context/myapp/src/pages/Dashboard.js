

// ===============================
// FILE: src/pages/Dashboard.jsx
// ===============================
import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 max-w-md mx-auto border rounded-xl">
      <h2 className="text-xl font-bold mb-2">Dashboard</h2>
      <p className="mb-4">Welcome, {user.email}</p>
      <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;