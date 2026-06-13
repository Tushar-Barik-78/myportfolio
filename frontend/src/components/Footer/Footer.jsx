// // src/components/Footer/Footer.jsx
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";

// const Footer = () => {
//   const { portfolio } = usePortfolio();

//   // DB se hero.name aur contact links lo
//   const name    = portfolio?.hero?.contact    || "Tushar Barik";
//   const contact = portfolio?.contact || "7799585225";

//   const handleScroll = (activeId) => {
//     const section = document.getElementById(activeId);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   // Social links DB se aate hain
//   const socialLinks = [
//     { icon: <FaLinkedin />,  link: contact.linkedin || "" },
//     { icon: <FaGithub />,    link: contact.github   || "" },
//     { icon: <FaTwitter />,   link: contact.twitter  || "" },
//     { icon: <FaInstagram />, link: contact.instagram || "" },
//     { icon: <FaFacebook />,  link: contact.facebook || "" },
//   ].filter((s) => s.link); // sirf wahi dikhao jinka link hai

//   return (
//     <section className="text-white py-8 px-[7vw] md:px-[7vw] lg:px-[12vw]">
//       <div className="container mx-auto text-center">
//         {/* Name DB se */}
//         <h2 className="text-xl font-semibold text-purple-500">
//           {name}
//         </h2>

//         {/* Navigation links */}
//         <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
//           {[
//             { name: "About",      id: "about"     },
//             { name: "Skills",     id: "skills"    },
//             { name: "Experience", id: "experience" },
//             { name: "Projects",   id: "work"      },
//             { name: "Education",  id: "education" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer"
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>

//         {/* Social links — DB se aate hain, sirf wahi dikhenge jinka link fill hai */}
//         {socialLinks.length > 0 && (
//           <div className="flex flex-wrap justify-center space-x-4 mt-6">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         )}

//         {/* Copyright */}
//         <p className="text-sm text-gray-400 mt-6">
//           &copy; {new Date().getFullYear()} {portfolio?.hero?.name || "Portfolio"}. All rights reserved.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Footer;


import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";

const Footer = () => {
  const { portfolio } = usePortfolio();

  // DB se hero.name aur contact links lo
  const name = portfolio?.hero?.name || "Tushar Barik";
  const contact = portfolio?.contact || {};

  const handleScroll = (activeId) => {
    const section = document.getElementById(activeId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Social links DB se aate hain
  const socialLinks = [
    { icon: <FaLinkedin />, link: contact.linkedin || "" },
    { icon: <FaGithub />, link: contact.github || "" },
    { icon: <FaTwitter />, link: contact.twitter || "" },
    { icon: <FaInstagram />, link: contact.instagram || "" },
    { icon: <FaFacebook />, link: contact.facebook || "" },
  ].filter((s) => s.link); // sirf wahi dikhao jinka link hai

  return (
    <footer className="relative overflow-hidden text-white py-12 px-[7vw] md:px-[8vw] lg:px-[12vw] bg-[#030712] border-t border-blue-900/30">
      {/* Background Micro Glow Accent */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[300px] h-[150px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Name DB se with animated glow */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
        >
          {name}
        </motion.h2>

        {/* Navigation links */}
        <motion.nav 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-6"
        >
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative text-gray-400 hover:text-cyan-400 text-sm sm:text-base font-medium transition-colors duration-300 cursor-pointer group py-1"
            >
              {item.name}
              {/* Underline Slide Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </motion.nav>

        {/* Social links — DB se aate hain, sirf wahi dikhenge jinka link fill hai */}
        {socialLinks.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-xl text-gray-400 rounded-xl border border-blue-900/50 bg-blue-950/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        )}

        {/* Separator Line */}
        <div className="w-16 h-[1px] bg-blue-900/30 mx-auto mt-8"></div>

        {/* Copyright */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-xs sm:text-sm text-gray-500 mt-4 tracking-wide"
        >
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
