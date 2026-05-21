import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import PortfolioAdmin from "./PortfolioAdmin";
import { getPortfolio } from "../api";

export default function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      getPortfolio()
        .then(({ data }) => setInitialData(data))
        .catch((err) => console.error("Failed to load portfolio:", err))
        .finally(() => setLoading(false));
    }
  }, [loggedIn]);

  if (!loggedIn) return <AdminLogin onLogin={() => setLoggedIn(true)} />;

  if (loading || !initialData) {
    return (
      <div style={{
        minHeight: "100vh", background: "#050414",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: 16
      }}>
        <div style={{
          width: 48, height: 48, border: "3px solid #8245ec",
          borderTopColor: "transparent", borderRadius: "50%",
          animation: "spin 0.8s linear infinite"
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ color: "#888", fontSize: 14 }}>Loading portfolio data...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Logout button */}
      <button
        onClick={() => {
          localStorage.removeItem("adminToken");
          setLoggedIn(false);
          setInitialData(null);
        }}
        style={{
          position: "fixed", top: 16, right: 16, zIndex: 999,
          background: "transparent", color: "#888",
          border: "1px solid #333", borderRadius: 8,
          padding: "6px 14px", cursor: "pointer", fontSize: 13,
        }}
      >
        Logout
      </button>

      {/* initialData DB se aaya — PortfolioAdmin ko pass ho raha hai */}
      <PortfolioAdmin initialData={initialData} />
    </div>
  );
}