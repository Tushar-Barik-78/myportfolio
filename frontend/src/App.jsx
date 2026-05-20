// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "./hooks/usePortfolio.jsx";

import Navbar     from "./components/Navbar/Navbar";
import About      from "./components/About/About";
import Skills     from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Works      from "./components/Works/Works";
import Education  from "./components/Education/Education";
import Contact    from "./components/Contact/Contact";
import Footer     from "./components/Footer/Footer";
import BlurBlob   from "./BlurBlob";

import AdminApp from "./admin/AdminApp";

// ---------- Main portfolio page ----------
const Portfolio = () => (
  <div className="bg-[#050414]">
    <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    <div className="relative pt-20">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Education />
      <Contact />
      <Footer />
    </div>
  </div>
);

// ---------- Root App ----------
const App = () => {
  return (
    // PortfolioProvider ek baar API call karta hai, sara data saare components ko milta hai
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin panel — localhost:5173/admin */}
          <Route path="/admin" element={<AdminApp />} />
          {/* Main portfolio — localhost:5173 */}
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  );
};

export default App;