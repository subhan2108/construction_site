import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        navigate("/login");
      } else {
        const data = await res.json();
        setError(data.detail || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="auth-box">
      <h2>Create Account</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
}
