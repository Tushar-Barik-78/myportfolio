// src/hooks/useCodingStats.js
import { useState, useEffect } from "react";
import { getCodingStats } from "../api";

export const useCodingStats = () => {
  const [stats, setStats]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await getCodingStats();
      setStats(data);
    } catch (e) {
      setError("Could not load stats");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStats(); }, []);

  return { stats, loading, error, refetch: fetchStats };
};