import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSuccess(true);
  };

  return (
    <div className="section">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      {success ? (
        <p className="text-green-600">Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input  placeholder="Email" type="email"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="tel" placeholder="Phone"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea rows="4" placeholder="Message"
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      )}
    </div>
  );
}
