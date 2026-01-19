
// ===============================
// FILE: src/pages/Login.jsx
// ===============================
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = ({ switchToSignup }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-6 max-w-sm mx-auto border rounded-xl">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input className="border p-2 w-full mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-black text-white px-4 py-2 w-full rounded" onClick={() => login(email, password)}>Login</button>
      <p className="text-sm mt-3">Don’t have an account? <span className="text-blue-600 cursor-pointer" onClick={switchToSignup}>Signup</span></p>
    </div>
  );
};

export default Login;
