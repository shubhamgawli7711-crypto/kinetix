import { useState } from "react";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Project Inquiry - Kinetix");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setMessage("✅ Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setMessage("❌ Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h1>Contact Kinetix</h1>

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <input
          name="company"
          type="text"
          placeholder="Company"
          style={inputStyle}
        />

        <select
          name="service"
          required
          style={inputStyle}
          defaultValue=""
        >
          <option value="" disabled>
            Select Service
          </option>
          <option>Video Editing</option>
          <option>Website Development</option>
          <option>Branding</option>
          <option>Social Media Management</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          required
          rows={6}
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#D9FF00",
            color: "#000",
            border: "none",
            padding: "14px",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "#111",
  border: "1px solid #333",
  color: "#fff",
  padding: "14px",
  borderRadius: "8px",
  fontSize: "16px",
};