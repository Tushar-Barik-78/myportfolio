import { useState } from "react";
import { loginAdmin } from "../api";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginAdmin({ email, password });
      localStorage.setItem("adminToken", data.token);
      onLogin();
    } catch {
      setError("Wrong email or password");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#050414" }}>
      <div style={{ background: "#0f0a1e", border: "1px solid #8245ec44",
        borderRadius: 16, padding: "40px 48px", width: 360 }}>
        <h2 style={{ color: "#fff", marginBottom: 8 }}>Admin Login</h2>
        <p style={{ color: "#888", marginBottom: 24, fontSize: 14 }}>Portfolio control panel</p>
        {error && <p style={{ color: "#e24b4a", marginBottom: 12, fontSize: 13 }}>{error}</p>}
        <label style={{ color: "#aaa", fontSize: 12 }}>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", padding: "10px 14px", marginBottom: 14,
            background: "#1a1030", border: "1px solid #8245ec44", borderRadius: 8,
            color: "#fff", fontSize: 14, boxSizing: "border-box" }} />
        <label style={{ color: "#aaa", fontSize: 12 }}>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", padding: "10px 14px", marginBottom: 24,
            background: "#1a1030", border: "1px solid #8245ec44", borderRadius: 8,
            color: "#fff", fontSize: 14, boxSizing: "border-box" }} />
        <button onClick={handleSubmit}
          style={{ width: "100%", padding: "11px", background: "#8245ec",
            color: "#fff", border: "none", borderRadius: 8, fontSize: 15,
            fontWeight: 600, cursor: "pointer" }}>
          Login →
        </button>
      </div>
    </div>
  );
}