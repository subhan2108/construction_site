import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import "../index.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // get translations
  const { t } = useLanguage();
  const login = t.LoginPage;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${API_URL}/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        localStorage.setItem("token", data.access);
        setSuccess(`✅ ${login.message1}`);
        setTimeout(() => {
          navigate("/careers");
        }, 1000);
      } else {
        setError(data.detail || `❌ ${login.message2}`);
      }
    } catch (err) {
      console.error(err);
      setError(`❌ ${login.message3}`);
    }
  };

  return (
    <div className="auth-box" style={{ marginTop: "100px" }}>
      <h2 className="text-2xl font-bold mb-6 text-center">{login.Title}</h2>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", marginBottom: "1rem" }}>{success}</p>
      )}

      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder={login.message4}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder={login.message5}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          {login.Title}
        </button>
      </form>

      <p className="mt-4 text-center">
        {login.message6}{" "}
        <Link to="/register" className="text-brand-yellow font-semibold">
          {login.message7}
        </Link>
      </p>
    </div>
  );
}
