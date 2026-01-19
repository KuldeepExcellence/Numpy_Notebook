

// ===============================
// FILE: src/App.jsx
// ===============================
import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { user } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  if (user) return <Dashboard />;

  return showSignup ? (
    <Signup switchToLogin={() => setShowSignup(false)} />
  ) : (
    <Login switchToSignup={() => setShowSignup(true)} />
  );
};

export default App;