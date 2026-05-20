import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import PortfolioAdmin from "./PortfolioAdmin"; // previous file
import { getPortfolio } from "../api";

export default function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      getPortfolio().then(({ data }) => setInitialData(data));
    }
  }, [loggedIn]);

  if (!loggedIn) return <AdminLogin onLogin={() => setLoggedIn(true)} />;
  if (!initialData) return <div style={{ color: "#fff", padding: 40 }}>Loading...</div>;

  return (
    <div>
      <button onClick={() => { localStorage.removeItem("adminToken"); setLoggedIn(false); }}
        style={{ position: "fixed", top: 16, right: 16, zIndex: 99,
          background: "transparent", color: "#888", border: "1px solid #333",
          borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 13 }}>
        Logout
      </button>
      <PortfolioAdmin initialData={initialData} />
    </div>
  );
}