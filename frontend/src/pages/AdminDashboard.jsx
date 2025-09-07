import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetch("http://127.0.0.1:8000/api/admin/messages/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => setMessages([]));
  }, [token]);

  if (!token) {
    return <p className="text-center mt-10">Please log in first.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h2>
      <h3 className="text-xl font-semibold mb-4">Messages</h3>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li key={msg.id} className="border p-4 rounded-lg shadow">
              <p className="font-semibold">{msg.name} ({msg.email})</p>
              <p className="mt-2">{msg.message}</p>
              <p className="text-sm text-gray-500 mt-1">Sent on: {msg.created_at}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
