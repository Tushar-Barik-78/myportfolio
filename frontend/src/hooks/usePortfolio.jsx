// src/hooks/usePortfolio.js
// Ye hook ek baar data fetch karta hai aur poore app mein share karta hai
// Har component ko alag se API call nahi karna padega

import { useState, useEffect, createContext, useContext } from "react";
import { getPortfolio } from "../api";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio()
      .then(({ data }) => setPortfolio(data))
      .catch((err) => console.error("Portfolio fetch failed:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Har component mein yahi use karo: const { portfolio, loading } = usePortfolio();
export const usePortfolio = () => useContext(PortfolioContext);