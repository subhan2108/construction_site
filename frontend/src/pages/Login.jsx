import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        localStorage.setItem("token", data.access);
        setSuccess("✅ Login successful!");
      } else {
        setError(data.detail || "❌ Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong");
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-full">Login</button>
      </form>

      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-brand-yellow font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
}
