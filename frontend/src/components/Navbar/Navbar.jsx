// import { FiMenu, FiX } from "react-icons/fi";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaInstagram,
//   FaHeadSideMask,
// } from "react-icons/fa";

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("about");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const openBox = useRef();

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);

//       const sections = document.querySelectorAll("section");

//       sections.forEach((section) => {
//         const top = window.scrollY;
//         const offset = section.offsetTop - 150;
//         const height = section.offsetHeight;
//         const id = section.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//           setActiveSection(id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on outside click
//   useEffect(() => {
//     const handleOpenBox = (e) => {
//       if (openBox.current && !openBox.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOpenBox);

//     return () => document.removeEventListener("mousedown", handleOpenBox);
//   }, []);

//   // Smooth scroll
//   const handleActiveSection = (activeId) => {
//     setActiveSection(activeId);
//     setIsOpen(false);

//     const section = document.getElementById(activeId);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "coding-stats", label: "Stats" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-[6vw] lg:px-[10vw] py-3 sm:py-4
//            bg-[#0b061f]/70 backdrop-blur-2xl border-b border-purple-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]
//       `}
//     >
//       <div className="flex items-center justify-between">
//         {/* LOGO */}
//         <div
//           onClick={() => handleActiveSection("about")}
//           className="group cursor-pointer"
//         >
//           <h1 className="text-xl sm:text-2xl font-black tracking-wide">
//             <span className="text-purple-500">&lt;</span>

//             <span className="text-white group-hover:text-purple-300 transition">
//               Tushar
//             </span>

//             <span className="text-purple-500">/</span>

//             <span className="text-white group-hover:text-pink-300 transition">
//               Barik
//             </span>

//             <span className="text-purple-500">&gt;</span>
//           </h1>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden lg:flex items-center gap-10">
//           <ul className="flex items-center gap-8">
//             {menuItems.map((item) => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => handleActiveSection(item.id)}
//                   className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${
//                     activeSection === item.id ? "text-white" : "text-gray-400"
//                   }`}
//                 >
//                   {item.label}

//                   {activeSection === item.id && (
//                     <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* SOCIAL ICONS */}
//           <div className="flex items-center gap-4">
//             {[
//               {
//                 icon: <FaGithub />,
//                 link: "https://github.com/Tushar-Barik-78",
//               },
//               {
//                 icon: <FaLinkedin />,
//                 link: "https://www.linkedin.com/in/tushar-barik/",
//               },
//               {
//                 icon: <FaInstagram />,
//                 link: "https://www.instagram.com/tushar_barik_06/",
//               },
//             ].map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 text-lg hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
//               >
//                 {item.icon}
//               </a>
//             ))}
//             <Link
//               to="/admin"
//               className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 text-lg hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
//             >
//               <FaHeadSideMask />
//             </Link>
//           </div>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white text-2xl hover:border-purple-500/40 transition"
//           >
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`lg:hidden absolute left-1/2 -translate-x-1/2 w-[92%] transition-all duration-500 ${
//           isOpen ? "top-18 opacity-100 visible" : "top-16 opacity-0 invisible"
//         }`}
//       >
//         <div
//           ref={openBox}
//           className="rounded-3xl border border-purple-500/20 bg-[#100a24]/97 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden"
//         >
//           {/* TOP GLOW */}
//           <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>

//           <ul className="flex flex-col p-6 gap-2">
//             {menuItems.map((item) => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => handleActiveSection(item.id)}
//                   className={`w-full text-left px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
//                     activeSection === item.id
//                       ? "bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-white border border-purple-500/20"
//                       : "text-gray-400 hover:text-white hover:bg-white/5"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}

//             {/* SOCIAL ICONS */}
//             <div className="flex items-center justify-center gap-5 mt-6 pt-6 border-t border-white/10">
//               {[
//                 {
//                   icon: <FaGithub />,
//                   link: "https://github.com/",
//                 },
//                 {
//                   icon: <FaLinkedin />,
//                   link: "https://linkedin.com/",
//                 },
//                 {
//                   icon: <FaInstagram />,
//                   link: "https://instagram.com/",
//                 },
//               ].map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 text-xl hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//               <Link
//                 to="/admin"
//                 className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 text-lg hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
//               >
//                 <FaHeadSideMask />
//               </Link>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHeadSideMask,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openBox = useRef();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOpenBox = (e) => {
      if (openBox.current && !openBox.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOpenBox);

    return () => document.removeEventListener("mousedown", handleOpenBox);
  }, []);

  // Smooth scroll
  const handleActiveSection = (activeId) => {
    setActiveSection(activeId);
    setIsOpen(false);

    const section = document.getElementById(activeId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "coding-stats", label: "Stats" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[6vw] lg:px-[10vw] py-3 sm:py-4 
        ${
          isScrolled
            ? "bg-[#030712]/80 border-b border-blue-500/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#030712]/40 backdrop-blur-md border-b border-transparent"
        }
      `}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => handleActiveSection("about")}
          className="group cursor-pointer select-none"
        >
          <h1 className="text-xl sm:text-2xl font-black tracking-wide">
            <span className="text-cyan-400 group-hover:text-blue-500 transition-colors">&lt;</span>

            <span className="text-white group-hover:text-cyan-300 transition-colors">
              Tushar
            </span>

            <span className="text-cyan-400 mx-0.5">/</span>

            <span className="text-white group-hover:text-blue-400 transition-colors">
              Barik
            </span>

            <span className="text-cyan-400 group-hover:text-blue-500 transition-colors">&gt;</span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleActiveSection(item.id)}
                  className={`relative text-sm font-semibold tracking-wide transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-400"
                  }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Tushar-Barik-78",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/tushar-barik/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/tushar_barik_06/",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-blue-900/40 bg-blue-950/20 backdrop-blur-xl flex items-center justify-center text-gray-400 text-lg hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
            <Link
              to="/admin"
              className="w-10 h-10 rounded-xl border border-blue-900/40 bg-blue-950/20 backdrop-blur-xl flex items-center justify-center text-gray-400 text-lg hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaHeadSideMask />
            </Link>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 sm:w-11 h-11 rounded-xl border border-blue-900/40 bg-blue-950/20 backdrop-blur-xl flex items-center justify-center text-white text-xl hover:border-cyan-500/40 transition-colors"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute left-1/2 -translate-x-1/2 w-[92%] transition-all duration-300 ease-in-out ${
          isOpen ? "top-[72px] opacity-100 visible" : "top-[60px] opacity-0 invisible"
        }`}
      >
        <div
          ref={openBox}
          className="rounded-2xl border border-blue-900/40 bg-[#090d1a]/95 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* TOP GLOW ACCENT */}
          <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent"></div>

          <ul className="flex flex-col p-5 gap-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleActiveSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-500/10 text-cyan-400 border border-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-blue-950/20"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* MOBILE SOCIAL ICONS */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-blue-950/60">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Tushar-Barik-78",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/tushar-barik/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/tushar_barik_06/",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-blue-900/40 bg-blue-950/20 flex items-center justify-center text-gray-400 text-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl border border-blue-900/40 bg-blue-950/20 flex items-center justify-center text-gray-400 text-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              >
                <FaHeadSideMask />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;