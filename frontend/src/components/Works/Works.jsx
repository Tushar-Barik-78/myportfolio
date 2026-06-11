// // src/components/Works/Works.jsx

// import { useEffect, useRef, useState } from "react";
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

// const Works = () => {
//   const { portfolio, loading } = usePortfolio();

//   const [selectedProject, setSelectedProject] = useState(null);

//   const workBox = useRef(null);

//   // Close Modal Outside Click
//   useEffect(() => {
//     const handleWorkBox = (e) => {
//       if (workBox.current && !workBox.current.contains(e.target)) {
//         setSelectedProject(null);
//       }
//     };

//     document.addEventListener("mousedown", handleWorkBox);

//     return () => document.removeEventListener("mousedown", handleWorkBox);
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-24 px-[7vw] lg:px-[12vw] bg-[#050414]">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-white">PROJECTS</h2>

//           <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="animate-pulse rounded-3xl overflow-hidden border border-white/10 bg-[#120d25]"
//             >
//               <div className="h-52 bg-[#1b1333]"></div>

//               <div className="p-5 space-y-4">
//                 <div className="h-6 bg-[#1b1333] rounded"></div>

//                 <div className="h-16 bg-[#1b1333] rounded"></div>

//                 <div className="flex gap-2">
//                   <div className="h-8 w-20 rounded-full bg-[#1b1333]"></div>

//                   <div className="h-8 w-24 rounded-full bg-[#1b1333]"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   const projects1 = portfolio?.projects || [];

//   return (
//     <section
//       id="work"
//       className="py-12 md:py-20 px-[7vw] md:px-[7vw] lg:px-[12vw] bg-[#050414] relative overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>

//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full"></div>

//       {/* TITLE */}
//       <div className="relative z-10 text-center mb-8 md:mb-15">
//         <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
//           ✨ Featured Work
//         </div>

//         <h2 className="text-3xl md:text-4xl font-black text-white">
//           My Projects
//         </h2>

//         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

//         <p className="text-gray-400 mt-6 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
//           A showcase of modern web applications and real-world projects built
//           using cutting-edge technologies and creative UI/UX design.
//         </p>
//       </div>

//       {/* PROJECT GRID */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects1.map((project, index) => (
//           <div
//             key={project._id || index}
//             className="group rounded-3xl overflow-hidden border border-white/10 bg-[#120d25]/80 backdrop-blur-xl hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(130,69,236,0.15)] transition-all duration-300"
//           >
//             {/* IMAGE */}
//             <div className="overflow-hidden">
//               {project.image ? (
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
//                 />
//               ) : (
//                 <div className="w-full h-52 bg-gradient-to-br from-[#1b1333] to-[#0f091f] flex items-center justify-center text-gray-500">
//                   {project.title}
//                 </div>
//               )}
//             </div>

//             {/* CONTENT */}
//             <div className="p-5">
//               <h3 className="text-xl font-bold text-white mb-3">
//                 {project.title}
//               </h3>

//               <p className="text-sm md:text-base text-gray-400 line-clamp-3 mb-3">
//                 {project.description}
//               </p>

//               {/* TAGS */}
//               <div className="flex flex-wrap gap-2 mb-3 md:mb-6">
//                 {(project.tags || []).map((tag, i) => (
//                   <span
//                     key={i}
//                     className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* BUTTON */}
//               <button
//                 onClick={() => setSelectedProject(project)}
//                 className="w-full py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/20 backdrop-blur-md p-4">
//           <div
//             ref={workBox}
//             className="w-[95%] max-w-3xl rounded-3xl overflow-hidden border border-white/10 bg-[#120d25] shadow-2xl"
//           >
//             {/* TOP IMAGE */}
//             <div className="relative w-full flex justify-center bg-gray-900 px-3 mt-3">
//               {selectedProject.image ? (
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
//                 />
//               ) : (
//                 <div className="w-full h-64 bg-gradient-to-br from-[#1b1333] to-[#0f091f]"></div>
//               )}

//               {/* CLOSE */}
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-red-500/30 transition"
//               >
//                 <FiX size={20} />
//               </button>
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 md:p-8">
//               <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
//                 {selectedProject.title}
//               </h2>

//               <p className="lg:text-base text-xs text-gray-400 mb-4">
//                 {selectedProject.description}
//               </p>

//               {/* TAGS */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {(selectedProject.tags || []).map((tag, i) => (
//                   <span
//                     key={i}
//                     className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* ACTION BUTTONS */}
//               <div className="flex gap-2">
//                 {selectedProject.github && (
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#1b1333] text-white font-semibold hover:bg-[#2a1d4d] transition"
//                   >
//                     <FiGithub />
//                     View Code
//                   </a>
//                 )}

//                 {selectedProject.webapp && (
//                   <a
//                     href={selectedProject.webapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
//                   >
//                     <FiExternalLink />
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Works;


import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { ExternalLink, X, Sparkles, Eye } from "lucide-react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";


const Works = () => {
  const { portfolio, loading } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState(null);
  const workBox = useRef(null);

  // Close Modal Outside Click
  useEffect(() => {
    const handleWorkBox = (e) => {
      if (workBox.current && !workBox.current.contains(e.target)) {
        setSelectedProject(null);
      }
    };
    document.addEventListener("mousedown", handleWorkBox);
    return () => document.removeEventListener("mousedown", handleWorkBox);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  // Loading Skeleton State (Matching Blue/Black Theme)
  if (loading) {
    return (
      <section className="py-24 px-[7vw] lg:px-[12vw] bg-[#030712]">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-6 bg-blue-950/50 w-40 mx-auto rounded-full mb-4"></div>
          <div className="h-10 bg-blue-950/50 w-64 mx-auto rounded-xl mb-4"></div>
          <div className="w-28 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-3xl overflow-hidden border border-blue-900/20 bg-[#090d1a]"
            >
              <div className="h-52 bg-blue-950/40"></div>
              <div className="p-5 space-y-4">
                <div className="h-6 bg-blue-950/40 rounded w-3/4"></div>
                <div className="h-12 bg-blue-950/40 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-7 w-16 rounded-full bg-blue-950/40"></div>
                  <div className="h-7 w-20 rounded-full bg-blue-950/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const projects = portfolio?.projects || [];

  return (
    <section
      id="work"
      className="py-16 md:py-24 px-[5vw] md:px-[7vw] lg:px-[12vw] bg-[#030712] relative overflow-hidden"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-[-10%] w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="relative z-10 text-center mb-12 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm mb-4 backdrop-blur-xl font-medium tracking-wide"
        >
          <Sparkles size={14} /> Featured Work
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tight"
        >
          My Projects
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 mt-6 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A showcase of modern web applications and real-world projects built
          using cutting-edge technologies and creative UI/UX design.
        </motion.p>
      </div>

      {/* PROJECT GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project._id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col justify-between rounded-3xl overflow-hidden border border-blue-900/30 bg-[#090d1a]/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-300"
          >
            {/* IMAGE HOLDER */}
            <div className="overflow-hidden relative aspect-video w-full bg-blue-950/20">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0e172c] to-[#050914] flex items-center justify-center text-gray-500 font-medium">
                  {project.title}
                </div>
              )}
              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-950/50 border border-blue-900/40 text-xs font-medium text-cyan-400 rounded-md px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                See Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL (AnimatePresence handles clean unmounting) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              ref={workBox}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-2xl rounded-3xl overflow-hidden border border-blue-900/40 bg-[#090d1a] shadow-2xl relative"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200"
              >
                <X size={18} />
              </button>

              {/* MODAL IMAGE */}
              <div className="relative w-full aspect-video bg-blue-950/20">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0e172c] to-[#050914]"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-transparent to-transparent"></div>
              </div>

              {/* MODAL CONTENT */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h2>

                <p className="text-sm md:text-base text-gray-300 mb-5 leading-relaxed max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  {selectedProject.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(selectedProject.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-950/50 border border-blue-900/40 text-xs font-medium text-cyan-400 rounded-md px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-950/40 border border-blue-900/40 text-white font-semibold hover:bg-blue-900/30 transition-all duration-200"
                    >
                      <FiGithub size={18} />
                      View Code
                    </a>
                  )}

                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/10 transition-all duration-200"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;