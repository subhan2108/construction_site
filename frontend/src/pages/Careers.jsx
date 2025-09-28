import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";

export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", resume: null });
  const [success, setSuccess] = useState(false);
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  // get translations
  const { t } = useLanguage();
  const careers = t.CareersPage;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("resume", form.resume);

    const res = await fetch(`${API_URL}/careers/`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) setSuccess(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="section" style={{ marginTop: "80px" }}>
      <h2 className="text-3xl font-bold mb-6 text-center">{careers.Title}</h2>
      {success ? (
        <p className="text-green-600 text-center">{careers.message1}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="careers-form"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "10rem",
          }}
        >
          <input
            type="text"
            placeholder={careers.message2}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder={careers.message3}
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full border p-2"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
          />
          <button type="submit" className="btn btn-primary">
            {careers.message4}
          </button>
        </form>
      )}
    </div>
  );
}
