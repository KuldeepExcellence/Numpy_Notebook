import { useEffect, useState } from "react";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Verify() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const url = window.location.href;

    // 1️⃣ Check if the URL contains the magic link parameters
    if (isSignInWithEmailLink(auth, url)) {
      
      // 2️⃣ Get previously stored email
      let email = window.localStorage.getItem("emailForSignIn");

      // If user opened link on another device → ask email
      if (!email) {
        email = window.prompt("Please enter your email again:");
      }

      // 3️⃣ Complete sign-in
      signInWithEmailLink(auth, email, url)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");

          setMessage("🎉 Email verified successfully!");
          setTimeout(() => navigate("/dashboard"), 1500);
        })
        .catch((error) => {
          console.log(error);
          setMessage("❌ Invalid or expired link.");
        });
    } else {
      setMessage("❌ Invalid verification link.");
    }
  }, [auth, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{message}</h2>
    </div>
  );
}

export default Verify;
