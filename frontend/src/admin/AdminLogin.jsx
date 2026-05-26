import { useState } from "react";
import { loginAdmin } from "../api";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { data } = await loginAdmin({
        email,
        password,
      });

      localStorage.setItem("adminToken", data.token);

      onLogin();
    } catch {
      setError("Wrong email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050414] px-4 py-10">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <button
        onClick={() => window.history.back()}
        className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white sm:left-6 sm:top-6"
      >
        <span className="text-lg">←</span>
        Back
      </button>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
        {/* Top Glow */}
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Logo */}
        <div className="relative mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 via-[#8245ec] to-pink-500 text-3xl font-bold text-white shadow-lg shadow-purple-900/40">
            P
          </div>

          <h1 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Secure Portfolio Control Panel
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 backdrop-blur-xl">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            {/* <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label> */}

            <div className="group flex items-center rounded-2xl border border-white/10 bg-[#140d2e]/80 px-4 transition-all duration-300 focus-within:border-[#8245ec] focus-within:bg-[#1a1238] focus-within:shadow-[0_0_0_4px_rgba(130,69,236,0.15)]">
              <span className="mr-3 text-lg text-gray-500 transition-all duration-300 group-focus-within:text-[#b892ff]">
                ✉
              </span>

              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-4 text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            {/* <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label> */}

            <div className="group flex items-center rounded-2xl border border-white/10 bg-[#140d2e]/80 px-4 transition-all duration-300 focus-within:border-[#8245ec] focus-within:bg-[#1a1238] focus-within:shadow-[0_0_0_4px_rgba(130,69,236,0.15)]">
              <span className="mr-3 text-lg text-gray-500 transition-all duration-300 group-focus-within:text-[#b892ff]">
                🔒
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-transparent py-4 text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`group relative mt-2 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-6 py-4 text-[15px] font-semibold text-white transition-all duration-300 ${
              loading
                ? "cursor-not-allowed bg-[#8245ec]/50 opacity-70"
                : "bg-gradient-to-r from-purple-600 via-[#8245ec] to-pink-500 shadow-lg shadow-purple-900/30 hover:scale-[1.02] hover:shadow-purple-900/50"
            }`}
          >
            {/* Shine */}
            {!loading && (
              <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] transition-transform duration-1000 group-hover:translate-x-full" />
            )}

            <span className="relative z-10">
              {loading ? "Logging in..." : "Login to Dashboard"}
            </span>

            {!loading && (
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            )}
          </button>
        </form>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="text-xs leading-relaxed text-gray-500">
            Protected Admin Access • Portfolio CMS
          </p>
        </div>
      </div>
    </div>
  );
}