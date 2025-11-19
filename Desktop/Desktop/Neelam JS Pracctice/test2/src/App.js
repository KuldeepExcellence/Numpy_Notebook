import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./logintest";
import Verify from "./verify";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Screen → Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Verify Email Page */}
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default App;
