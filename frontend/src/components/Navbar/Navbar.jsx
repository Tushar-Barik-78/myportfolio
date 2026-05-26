import { FiMenu, FiX } from "react-icons/fi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHeadSideMask,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOpenBox = (e) => {
      if (
        openBox.current &&
        !openBox.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOpenBox
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOpenBox
      );
  }, []);

  // Smooth scroll
  const handleActiveSection = (activeId) => {
    setActiveSection(activeId);
    setIsOpen(false);

    const section =
      document.getElementById(activeId);

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
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-[6vw] lg:px-[10vw] py-3 sm:py-4 
           bg-[#0b061f]/70 backdrop-blur-2xl border-b border-purple-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      `}
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() =>
            handleActiveSection("about")
          }
          className="group cursor-pointer"
        >
          <h1 className="text-xl sm:text-2xl font-black tracking-wide">
            <span className="text-purple-500">
              &lt;
            </span>

            <span className="text-white group-hover:text-purple-300 transition">
              Tushar
            </span>

            <span className="text-purple-500">
              /
            </span>

            <span className="text-white group-hover:text-pink-300 transition">
              Barik
            </span>

            <span className="text-purple-500">
              &gt;
            </span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    handleActiveSection(item.id)
                  }
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/",
              },
              {
                icon: <FaInstagram />,
                link: "https://instagram.com/",
              },
              
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 text-lg hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
            <a
              href="/admin"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 text-lg hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <FaHeadSideMask />
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white text-2xl hover:border-purple-500/40 transition"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute left-1/2 -translate-x-1/2 w-[92%] transition-all duration-500 ${
          isOpen
            ? "top-18 opacity-100 visible"
            : "top-16 opacity-0 invisible"
        }`}
      >
        <div
          ref={openBox}
          className="rounded-3xl border border-purple-500/20 bg-[#100a24]/97 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {/* TOP GLOW */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>

          <ul className="flex flex-col p-6 gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    handleActiveSection(item.id)
                  }
                  className={`w-full text-left px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-500/20 text-white border border-purple-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center gap-5 mt-6 pt-6 border-t border-white/10">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://linkedin.com/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com/",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 text-xl hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
              <a
                href="/admin"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 text-xl hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaHeadSideMask />  
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiBookOpen } from "react-icons/fi";

// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("about");

//   const [isScrolled, setIsScrolled] = useState(false);

//   const [showNavbar, setShowNavbar] = useState(true);

//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Navbar Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setIsScrolled(currentScrollY > 20);

//       // Hide Navbar on Scroll Down
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       setLastScrollY(currentScrollY);

//       // Active Section Detection
//       const sections = document.querySelectorAll("section");

//       sections.forEach((section) => {
//         const top = window.scrollY;

//         const offset = section.offsetTop - 200;

//         const height = section.offsetHeight;

//         const id = section.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//           setActiveSection(id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Smooth Scroll
//   const handleActiveSection = (id) => {
//     setActiveSection(id);

//     const section = document.getElementById(id);

//     if(activeSection == "contact"){
//       setShowNavbar(false);
//     }else{
//       setShowNavbar(true);
//     }

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }

//   };

//   // Menu Items
//   const menuItems = [
//     {
//       id: "about",
//       label: "About",
//       icon: <FiHome />,
//     },
//     {
//       id: "skills",
//       label: "Skills",
//       icon: <FiCode />,
//     },
//     {
//       id: "experience",
//       label: "Experience",
//       icon: <FiBriefcase />,
//     },
//     {
//       id: "work",
//       label: "Projects",
//       icon: <FiUser />,
//     },
//     {
//       id: "education",
//       label: "Education",
//       icon: <FiBookOpen />,
//     },
//     {
//       id: "contact",
//       label: "Contact",
//       icon: <FiMail />,
//     },
//   ];

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}

//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 overflow-hidden
        
//         ${showNavbar ? "translate-y-0" : "-translate-y-full"}

//         ${
//           isScrolled
//             ? "py-4 bg-[#070217]/95 backdrop-blur-2xl border-b border-purple-500/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
//             : "py-5 bg-transparent"
//         }`}
//       >
//         {/* Gradient Blur */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>

//         <div className="relative px-[6vw] lg:px-[10vw] flex items-center justify-between">
//           {/* LOGO */}
//           <div
//             onClick={() => handleActiveSection("about")}
//             className="group cursor-pointer"
//           >
//             <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
//               <span className="text-purple-500">&lt;</span>

//               <span className="text-white">Tushar</span>

//               <span className="text-purple-500 mx-1">/</span>

//               <span className="text-white">Barik</span>

//               <span className="text-purple-500">&gt;</span>
//             </h1>
//           </div>

//           {/* DESKTOP NAVLINKS */}
//           <div className="hidden lg:flex items-center gap-12">
//             <ul className="flex items-center gap-8">
//               {menuItems.map((item) => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => handleActiveSection(item.id)}
//                     className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${
//                       activeSection === item.id ? "text-white" : "text-gray-400"
//                     }`}
//                   >
//                     {item.label}

//                     {activeSection === item.id && (
//                       <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
//                     )}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* SOCIAL ICONS */}
//             <div className="flex items-center gap-4">
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
//                   className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-300 text-lg hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* ================= MOBILE BOTTOM NAVBAR ================= */}

//       {(activeSection != "contact") && (
//         <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] lg:hidden">
//           <div className="flex items-center gap-2 px-3 py-3 rounded-full border border-white/10 bg-[#10091f]/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
//             {menuItems.slice(0, 5).map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleActiveSection(item.id)}
//               className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${
//                 activeSection === item.id
//                   ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white scale-105"
//                   : "text-gray-400"
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>

//               <span className="text-[10px] mt-1 font-medium">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//       )}

//     </>
//   );
// };

// export default Navbar;
