// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PortfolioProvider } from "./hooks/usePortfolio.jsx";

// import Navbar     from "./components/Navbar/Navbar";
// import About      from "./components/About/About";
// import Skills     from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
// import Works      from "./components/Works/Works";
// import Education  from "./components/Education/Education";
// import Contact    from "./components/Contact/Contact";
// import Footer     from "./components/Footer/Footer";
// import BlurBlob   from "./BlurBlob";

// import AdminApp from "./admin/AdminApp";

// // ---------- Main portfolio page ----------
// const Portfolio = () => (
//   <div className="bg-[#050414]">
//     <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />
//     {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
//     <div className="relative ">
//       <Navbar />
//       <About />
//       <Skills />
//       <Experience />
//       <Works />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   </div>
// );

// // ---------- Root App ----------
// const App = () => {
//   return (
//     // PortfolioProvider ek baar API call karta hai, sara data saare components ko milta hai
//     <PortfolioProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Admin panel — localhost:5173/admin */}
//           <Route path="/admin" element={<AdminApp />} />
//           {/* Main portfolio — localhost:5173 */}
//           <Route path="/*" element={<Portfolio />} />
//         </Routes>
//       </BrowserRouter>
//     </PortfolioProvider>
//   );
// };

// export default App;



// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioProvider, usePortfolio } from "./hooks/usePortfolio.jsx";

import Navbar     from "./components/Navbar/Navbar";
import About      from "./components/About/About";
import Skills     from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Works      from "./components/Works/Works";
import Education  from "./components/Education/Education";
import Contact    from "./components/Contact/Contact";
import Footer     from "./components/Footer/Footer";
import BlurBlob   from "./BlurBlob";
import CodingStats from "./components/CodingStats/CodingStats";


import AdminApp from "./admin/AdminApp";

// ── Waking Up Banner ──────────────────────────────────────────────────────────
// Jab Render ka backend soya hua ho aur wake up ho raha ho tab dikhega
const WakingUpBanner = () => (
  <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-center gap-3 bg-yellow-400/10 border-b border-yellow-400/30 backdrop-blur-sm py-2 px-4">
    {/* Spinning dot */}
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
    </span>
    <p className="text-yellow-300 text-sm font-medium">
      Connecting to server — fresh data loading shortly...
    </p>
  </div>
);

// ---------- Main portfolio page ----------
const Portfolio = () => {
  const { isWakingUp } = usePortfolio();

  return (
    <div className="bg-[#050414]">
      {isWakingUp && <WakingUpBanner />}
      <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />
      <div className="relative">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Works />
        <CodingStats />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

// ---------- Root App ----------
const App = () => {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminApp />} />
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  );
};

export default App;