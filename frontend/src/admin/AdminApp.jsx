import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import PortfolioAdmin from "./PortfolioAdmin";
import { getPortfolio } from "../api";

export default function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("adminToken"),
  );

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);

      getPortfolio()
        .then(({ data }) => setInitialData(data))
        .catch((err) =>
          console.error("Failed to load portfolio:", err),
        )
        .finally(() => setLoading(false));
    }
  }, [loggedIn]);

  /* Login Page */
  if (!loggedIn) {
    return (
      <AdminLogin onLogin={() => setLoggedIn(true)} />
    );
  }

  /* Loading Screen */
  if (loading || !initialData) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050414] px-4">
        {/* Background Glow */}
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Loading Card */}
        <div className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {/* Spinner */}
          <div className="relative mb-6">
            <div className="h-16 w-16 animate-spin rounded-full border-[4px] border-purple-500/20 border-t-[#8245ec]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-900/40" />
            </div>
          </div>

          <h2 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-2xl font-bold text-transparent">
            Loading Portfolio
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Fetching your portfolio dashboard and preparing
            everything for editing...
          </p>

          {/* Progress */}
          <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
          </div>
        </div>
      </div>
    );
  }

  
  
  return (
    <div className="relative">
     
      {/* Admin Panel */}
      <PortfolioAdmin initialData={initialData} />
    </div>
  );
}