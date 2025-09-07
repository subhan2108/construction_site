import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", resume: null });
  const [success, setSuccess] = useState(false);
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

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
    <div className="section">
      <h2>Careers</h2>
      {success ? (
        <p className="text-green-600">Application submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="careers-form">
          <input type="text" placeholder="Name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input  placeholder="Email" type="email"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="w-full border p-2" type="file" accept=".pdf,.doc,.docx"
            onChange={(e) => setForm({ ...form, resume: e.target.files[0] })} />
          <button type="submit" className="btn btn-primary">Apply</button>
        </form>
      )}
    </div>
  );
}
