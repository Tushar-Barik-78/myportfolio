// // src/hooks/usePortfolio.jsx
// // Smart fallback strategy:
// // 1. Pehle DB se data fetch karo (fast)
// // 2. Agar DB mein koi section empty hai → constants.js ka data use karo
// // 3. Agar net slow hai / API fail ho gayi → constants.js ka POORA data use karo
// // Result: portfolio HAMESHA dikhega, chahe net ho ya na ho

// import { useState, useEffect, createContext, useContext } from "react";
// import { getPortfolio } from "../api";

// // ── constants.js se fallback data import karo ──────────────────────────────
// import { SkillsInfo, experiences, projects, education } from "../constants";

// // Hero ka fallback (constants.js mein hero nahi hai, isliye yahan likhte hain)
// const FALLBACK_HERO = {
//   name: "Tushar Barik",
//   greeting: "Hii, I am",
//   roles: ["Fullstack Developer", "App Developer", "Coder", "Problem Solver"],
//   bio: "I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.",
//   resumeUrl:
//     "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view",
//   profileImage: null, // local Profile3.png component mein handle karega
// };

// // Contact ka fallback
// const FALLBACK_CONTACT = {
//   email: "",
//   phone: "",
//   github: "https://github.com/Tushar-Barik-78",
//   linkedin: "https://linkedin.com/in/tushar-barik",
//   twitter: "",
// };

// // ── Helper: check karo section DB mein actually filled hai ya nahi ──────────
// // Agar DB mein section null/undefined/empty array hai → false return karo
// const isFilled = {
//   hero: (data) =>
//     data?.hero &&
//     (data.hero.name || data.hero.bio || data.hero.roles?.length > 0),

//   skills: (data) => data?.skills && data.skills.length > 0,

//   experience: (data) => data?.experience && data.experience.length > 0,

//   projects: (data) => data?.projects && data.projects.length > 0,

//   education: (data) => data?.education && data.education.length > 0,

//   contact: (data) =>
//     data?.contact &&
//     (data.contact.email || data.contact.github || data.contact.linkedin),
// };

// // ── DB data + constants.js ko merge karo section by section ─────────────────
// // Jis section ka DB mein data hai → DB ka data
// // Jis section ka DB mein data nahi → constants.js ka data
// const mergeWithFallback = (dbData) => {
//   return {
//     // HERO: DB filled hai? DB use karo, nahi to fallback
//     hero: isFilled.hero(dbData) ? dbData.hero : FALLBACK_HERO,

//     // SKILLS: DB filled hai? DB use karo, nahi to constants.js ka SkillsInfo
//     skills: isFilled.skills(dbData) ? dbData.skills : SkillsInfo,
//     // Note: constants.js mein skills = [{ name, logo (local img) }]
//     //       DB mein skills = [{ name, logo (cloudinary URL) }]
//     //       dono format same hain, isliye kaam karega

//     // EXPERIENCE: DB filled hai? DB use karo, nahi to constants.js ka experiences
//     experience: isFilled.experience(dbData) ? dbData.experience : experiences,

//     // PROJECTS: DB filled hai? DB use karo, nahi to constants.js ka projects
//     projects: isFilled.projects(dbData) ? dbData.projects : projects,

//     // EDUCATION: DB filled hai? DB use karo, nahi to constants.js ka education
//     education: isFilled.education(dbData) ? dbData.education : education,

//     // CONTACT: DB filled hai? DB use karo, nahi to fallback
//     contact: isFilled.contact(dbData) ? dbData.contact : FALLBACK_CONTACT,

//     // source track karo — debug ke liye useful
//     _source: {
//       hero: isFilled.hero(dbData) ? "db" : "constants",
//       skills: isFilled.skills(dbData) ? "db" : "constants",
//       experience: isFilled.experience(dbData) ? "db" : "constants",
//       projects: isFilled.projects(dbData) ? "db" : "constants",
//       education: isFilled.education(dbData) ? "db" : "constants",
//       contact: isFilled.contact(dbData) ? "db" : "constants",
//     },
//   };
// };

// // ── Context ──────────────────────────────────────────────────────────────────
// const PortfolioContext = createContext(null);

// export const PortfolioProvider = ({ children }) => {
//   // loading: true sirf pehle API call ke dauran
//   const [loading, setLoading] = useState(true);

//   // portfolio: hamesha filled data hoga (DB ya constants fallback)
//   const [portfolio, setPortfolio] = useState(null);

//   // apiStatus: "loading" | "success" | "fallback"
//   const [apiStatus, setApiStatus] = useState("loading");
//   const [isWakingUp, setIsWakingUp] = useState(false);

//   // clearTimeout mein slowTimer bhi clear karo

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // 5 second timeout — agar backend slow hai to constants pe fall back karo
//         const controller = new AbortController();
//         // fetchData mein, timeout ke saath:
//         const slowTimer = setTimeout(() => setIsWakingUp(true), 3000); // 3s baad "waking up" dikhao
//         const timeout = setTimeout(() => controller.abort(), 20000);

//         const response = await getPortfolio({ signal: controller.signal });
//         clearTimeout(timeout);
//         clearTimeout(slowTimer);
//         setIsWakingUp(false);

//         const dbData = response.data;
//         const merged = mergeWithFallback(dbData);

//         setPortfolio(merged);
//         setApiStatus("success");

//         // Dev mode mein console mein dikhao kaunsa section kahan se aaya
//         if (import.meta.env.DEV) {
//           console.log("📊 Portfolio data sources:", merged._source);
//         }
//       } catch (err) {
//         // Net nahi hai / backend band hai / timeout — constants.js se poora data lo
//         console.warn(
//           "⚠️ API unavailable, using constants.js fallback:",
//           err.message,
//         );

//         setPortfolio(mergeWithFallback(null)); // null denge to har section fallback lega
//         setApiStatus("fallback");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <PortfolioContext.Provider value={{ portfolio, loading, apiStatus }}>
//       {children}
//     </PortfolioContext.Provider>
//   );
// };

// // Har component mein yahi use karo:
// // const { portfolio, loading, apiStatus } = usePortfolio();
// export const usePortfolio = () => useContext(PortfolioContext);



// src/hooks/usePortfolio.jsx
// Smart fallback strategy:
// 1. Pehle DB se data fetch karo (fast)
// 2. Agar DB mein koi section empty hai → constants.js ka data use karo
// 3. Agar net slow hai / API fail ho gayi → constants.js ka POORA data use karo
// Result: portfolio HAMESHA dikhega, chahe net ho ya na ho

import { useState, useEffect, createContext, useContext } from "react";
import { getPortfolio } from "../api";

// ── constants.js se fallback data import karo ──────────────────────────────
import {
  experiences,
  projects,
  education,
} from "../constants";

// Hero ka fallback (constants.js mein hero nahi hai, isliye yahan likhte hain)
const FALLBACK_HERO = {
  name: "Tushar Barik",
  greeting: "Hii, I am",
  roles: ["Fullstack Developer", "App Developer", "Coder", "Problem Solver"],
  bio: "I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.",
  resumeUrl: "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view",
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
    hero:       isFilled.hero(dbData)       ? dbData.hero       : FALLBACK_HERO,
    // Skills: ONLY from DB — no constants fallback (fast load, no logo images)
    skills:     isFilled.skills(dbData)     ? dbData.skills     : [],
    experience: isFilled.experience(dbData) ? dbData.experience : experiences,
    projects:   isFilled.projects(dbData)   ? dbData.projects   : projects,
    education:  isFilled.education(dbData)  ? dbData.education  : education,
    contact:    isFilled.contact(dbData)    ? dbData.contact    : FALLBACK_CONTACT,
    _source: {
      hero:       isFilled.hero(dbData)       ? "db" : "constants",
      skills:     isFilled.skills(dbData)     ? "db" : "empty",
      experience: isFilled.experience(dbData) ? "db" : "constants",
      projects:   isFilled.projects(dbData)   ? "db" : "constants",
      education:  isFilled.education(dbData)  ? "db" : "constants",
      contact:    isFilled.contact(dbData)    ? "db" : "constants",
    },
  };
};

// ── Context ──────────────────────────────────────────────────────────────────
const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [loading, setLoading]     = useState(true);
  const [portfolio, setPortfolio] = useState(null);
  const [apiStatus, setApiStatus] = useState("loading");
  // true hoga jab backend slow ho aur still try kar raha ho
  const [isWakingUp, setIsWakingUp] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const controller  = new AbortController();

      // 4 sec baad "waking up" banner dikhao — backend Render pe soya hua hai
      const wakeTimer   = setTimeout(() => setIsWakingUp(true), 4000);

      // 10 sec mein bhi response nahi aaya → give up, constants use karo
      const abortTimer  = setTimeout(() => controller.abort(), 10000);

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

        console.warn("⚠️ API unavailable, using constants.js fallback:", err.message);
        setPortfolio(mergeWithFallback(null));
        setApiStatus("fallback");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, loading, apiStatus, isWakingUp }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);