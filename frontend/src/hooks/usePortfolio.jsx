// src/hooks/usePortfolio.jsx
// Smart fallback strategy:
// 1. Pehle DB se data fetch karo (fast)
// 2. Agar DB mein koi section empty hai → constants.js ka data use karo
// 3. Agar net slow hai / API fail ho gayi → constants.js ka POORA data use karo
// Result: portfolio HAMESHA dikhega, chahe net ho ya na ho

import { useState, useEffect, createContext, useContext } from "react";
import { getPortfolio } from "../api";

// ── constants.js se fallback data import karo ──────────────────────────────
import { experiences, projects, education } from "../constants";

// Hero ka fallback (constants.js mein hero nahi hai, isliye yahan likhte hain)
const FALLBACK_HERO = {
  name: "Tushar Barik",
  greeting: "Hii, I am",
  roles: ["Fullstack Developer", "App Developer", "Coder", "Problem Solver"],
  bio: "I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.",
  resumeUrl:
    "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view",
  profileImage: null, // local Profile3.png component mein handle karega
};

// Contact ka fallback
const FALLBACK_CONTACT = {
  email: "",
  phone: "",
  github: "https://github.com/Tushar-Barik-78",
  linkedin: "https://linkedin.com/in/tushar-barik",
  twitter: "",
};

// ── Helper: check karo section DB mein actually filled hai ya nahi ──────────
const isFilled = {
  hero: (data) =>
    data?.hero &&
    (data.hero.name || data.hero.bio || data.hero.roles?.length > 0),
  skills: (data) => data?.skills && data.skills.length > 0,
  experience: (data) => data?.experience && data.experience.length > 0,
  projects: (data) => data?.projects && data.projects.length > 0,
  education: (data) => data?.education && data.education.length > 0,
  contact: (data) =>
    data?.contact &&
    (data.contact.email || data.contact.github || data.contact.linkedin),
};

// ── DB data + constants.js ko merge karo section by section ─────────────────
const mergeWithFallback = (dbData) => {
  return {
    hero: isFilled.hero(dbData) ? dbData.hero : FALLBACK_HERO,
    // Skills: ONLY from DB — no constants fallback (fast load, no logo images)
    skills: isFilled.skills(dbData) ? dbData.skills : [],
    experience: isFilled.experience(dbData) ? dbData.experience : experiences,
    projects: isFilled.projects(dbData) ? dbData.projects : projects,
    education: isFilled.education(dbData) ? dbData.education : education,
    contact: isFilled.contact(dbData) ? dbData.contact : FALLBACK_CONTACT,
    _source: {
      hero: isFilled.hero(dbData) ? "db" : "constants",
      skills: isFilled.skills(dbData) ? "db" : "empty",
      experience: isFilled.experience(dbData) ? "db" : "constants",
      projects: isFilled.projects(dbData) ? "db" : "constants",
      education: isFilled.education(dbData) ? "db" : "constants",
      contact: isFilled.contact(dbData) ? "db" : "constants",
    },
  };
};

// ── Context ──────────────────────────────────────────────────────────────────
const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState(null);
  const [apiStatus, setApiStatus] = useState("loading");
  // true hoga jab backend slow ho aur still try kar raha ho
  const [isWakingUp, setIsWakingUp] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Backend ko pehle se ping karo (Render cold start)
      fetch("https://myportfolio-zqex.onrender.com/api/portfolio").catch(
        () => {},
      );
      const controller = new AbortController();

      // 4 sec baad "waking up" banner dikhao — backend Render pe soya hua hai
      const wakeTimer = setTimeout(() => setIsWakingUp(true), 6000);

      // 10 sec mein bhi response nahi aaya → give up, constants use karo
      const abortTimer = setTimeout(() => controller.abort(), 30000);

      try {
        const response = await getPortfolio({ signal: controller.signal });

        clearTimeout(wakeTimer);
        clearTimeout(abortTimer);
        setIsWakingUp(false);

        const dbData = response.data;
        const merged = mergeWithFallback(dbData);

        setPortfolio(merged);
        setApiStatus("success");

        if (import.meta.env.DEV) {
          console.log("📊 Portfolio data sources:", merged._source);
        }
      } catch (err) {
        clearTimeout(wakeTimer);
        clearTimeout(abortTimer);
        setIsWakingUp(false);

        console.warn(
          "⚠️ API unavailable, using constants.js fallback:",
          err.message,
        );
        setPortfolio(mergeWithFallback(null));
        setApiStatus("fallback");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{ portfolio, loading, apiStatus, isWakingUp }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
