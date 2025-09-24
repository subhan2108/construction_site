import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import "../index.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // ✅ get translations
  const { t } = useLanguage();
  const register = t.RegisterPage;

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        navigate("/login");
      } else {
        const data = await res.json();
        setError(data.detail || register.message5);
      }
    } catch (err) {
      setError(register.message6);
    }
  };

  return (
    <div className="auth-box" style={{ marginTop: "100px" }}>
      <h2 className="text-2xl font-bold mb-6 text-center">{register.Title}</h2>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <form
        onSubmit={handleRegister}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder={register.message1}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder={register.message2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder={register.message3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          {register.message4}
        </button>
      </form>
    </div>
  );
}
