import React, { useState } from "react";

const LoginPage = () => {
  // State variables for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle button click
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
    // Log data to console (replace with actual login logic)
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Login attempted with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fc",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
