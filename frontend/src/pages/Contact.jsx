import { useState } from "react";
import { useLanguage } from "../context/LanguageProvider";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // get translations
  const { t } = useLanguage();
  const contact = t.ContactPage;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSuccess(true);
  };

  return (
    <div
      className="section"
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* LEFT: Contact Form */}
        <div style={{ flex: 2 }}>
          <h2 className="text-3xl font-bold mb-6 text-center">
            {contact.Title}
          </h2>
          {success ? (
            <p className="text-green-600 text-center">{contact.message1}</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                background: "#fff",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <input
                type="text"
                placeholder={contact.message2}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <input
                placeholder={contact.message3}
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <input
                type="tel"
                placeholder={contact.message4}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                rows="4"
                placeholder={contact.message5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border p-2 rounded"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                {contact.message6}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Map */}
        <div
          style={{
            flex: 1,
            height: "400px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <iframe
            title="business-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.862145948897!2d39.16050907402704!3d21.591303468222236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d085a451478b%3A0x1d8c9464245c40ff!2z2KfZhNmC2YbYtdmE2YrYqSDYp9mE2LnYp9mF2Kkg2YTZhNis2LLYp9im2LEg2KjYrNiv2Kk!5e0!3m2!1shi!2sin!4v1758726415505!5m2!1shi!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
