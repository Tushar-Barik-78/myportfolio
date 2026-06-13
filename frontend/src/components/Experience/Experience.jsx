// // src/components/Experience/Experience.jsx

// import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// // import { experiences } from "../../constants";
// import { FiBriefcase, FiCalendar, FiMail, FiMapPin } from "react-icons/fi";

// const Experience = () => {
//   const { portfolio, loading } = usePortfolio();

//   if (loading) {
//     return (
//       <section className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#050414]">
//         <div className="animate-pulse space-y-10">
//           <div className="text-center">
//             <div className="h-10 w-72 bg-[#1b1333] rounded-xl mx-auto"></div>

//             <div className="h-4 w-96 bg-[#1b1333] rounded-xl mx-auto mt-6"></div>
//           </div>

//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="max-w-3xl mx-auto rounded-3xl bg-[#120d25] border border-white/10 p-8"
//             >
//               <div className="flex gap-5">
//                 <div className="w-16 h-16 rounded-2xl bg-[#1b1333]"></div>

//                 <div className="flex-1 space-y-3">
//                   <div className="h-6 bg-[#1b1333] rounded-lg w-52"></div>

//                   <div className="h-4 bg-[#1b1333] rounded-lg w-32"></div>

//                   <div className="h-4 bg-[#1b1333] rounded-lg w-24"></div>
//                 </div>
//               </div>

//               <div className="mt-6 h-20 bg-[#1b1333] rounded-xl"></div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   const experiences1 = [...(portfolio?.experience || [])].sort(
//     (a, b) => {
//       const getYear = (date) =>
//         parseInt(date?.match(/\d{4}/g)?.slice(-1)[0]) || 0;
//       return getYear(b.date) - getYear(a.date); // latest year pehle
//     },
//   );

//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden py-28 px-[7vw] md:px-[8vw] lg:px-[10vw] bg-[#050414]"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

//       <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full"></div>

//       {/* SECTION TITLE */}
//       <div className="relative z-10 text-center mb-20">
//         <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
//           <FiBriefcase />
//           My Journey
//         </div>

//         <h2 className="text-4xl sm:text-5xl font-black text-white">
//           Experience
//         </h2>

//         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

//         <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//           A collection of my professional experience, internships, and the
//           impactful roles I have worked on.
//         </p>
//       </div>

//       {/* TIMELINE */}
//       <div className="relative z-10">
//         {/* Vertical Line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"></div>

//         <div className="space-y-10">
//           {experiences1.map((experience, index) => (
//             <div
//               key={experience._id || index}
//               className={`relative flex flex-col md:flex-row items-center ${
//                 index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//               }`}
//             >
//               <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
//                 {experience.companyLogo || experience.img ? (
//                   <img
//                     src={experience.companyLogo || experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-white font-bold text-lg">
//                     {experience.company?.charAt(0) || "?"}
//                   </span>
//                 )}
//               </div>

//               {/* CARD */}
//               <div
//                 className={`group relative w-full md:w-[46%] rounded-[32px] border border-white/10 bg-[#120d25]/80 backdrop-blur-2xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] ${
//                   index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
//                 } ml-8 md:ml-0`}
//               >
//                 {/* Top Glow */}
//                 <div className="absolute top-0 left-0 w-full h-full rounded-[32px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                 {/* MOBILE LOGO */}
//                 <div className="md:hidden flex items-center gap-4 mb-3">
//                   <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-[#1b1333]">
//                     {experience.companyLogo || experience.img ? (
//                       <img
//                         src={experience.companyLogo || experience.img}
//                         alt={experience.company}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
//                         {experience.company?.charAt(0)}
//                       </div>
//                     )}
//                   </div>

//                   <div>
//                     <h3 className=" text-lg sm:text-xl font-bold text-white">
//                       {experience.role}
//                     </h3>

//                     <p className="text-purple-300 text-sm">
//                       {experience.company}
//                     </p>
//                   </div>
//                 </div>

//                 {/* DESKTOP CONTENT */}
//                 <div className="hidden md:flex items-start gap-5">
//                   <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-[#1b1333] flex-shrink-0">
//                     {experience.companyLogo || experience.img ? (
//                       <img
//                         src={experience.companyLogo || experience.img}
//                         alt={experience.company}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
//                         {experience.company?.charAt(0)}
//                       </div>
//                     )}
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-bold text-white">
//                       {experience.role}
//                     </h3>

//                     <h4 className="text-purple-300 mt-1 font-medium">
//                       {experience.company}
//                     </h4>

//                     <div className="flex items-center gap-2 text-gray-100 text-sm mt-3">
//                       <FiCalendar />

//                       <span>{experience.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-100 text-sm mt-3">
//                       <FiMapPin />

//                       <span>{experience.mode}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile Date */}
//                 <div className="md:hidden flex items-center gap-2 text-gray-200 text-sm mb-3">
//                   <FiCalendar />
//                   <span>{experience.date}</span>
//                 </div>
//                 <div className="md:hidden flex items-center gap-2 text-gray-200 text-sm mb-3">
//                   <FiMapPin />
//                   <span>{experience.mode}</span>
//                 </div>

//                 {/* DESCRIPTION */}
//                 <p className="relative z-10 mt-5 text-gray-400 leading-relaxed text-[13px] sm:text-base">
//                   {experience.desc}
//                 </p>

//                 {/* SKILLS */}
//                 <div className="relative z-10 mt-6 md:mt-7">
//                   <h5 className="text-white font-semibold mb-4">
//                     Skills & Technologies
//                   </h5>

//                   <div className="flex flex-wrap gap-3">
//                     {(experience.skills || []).map((skill, i) => (
//                       <span
//                         key={i}
//                         className="px-2 md:px-3 py-2 rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-200 text-[12px] sm:text-sm font-medium hover:bg-purple-500/20 transition"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Decorative Blur */}
//                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import { motion } from "framer-motion";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const { portfolio, loading } = usePortfolio();

  // Skeleton Loader State (Refined Blue/Black Ecosystem)
  if (loading) {
    return (
      <section className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#030712]">
        <div className="animate-pulse space-y-10">
          <div className="text-center">
            <div className="h-10 w-72 bg-blue-950/40 rounded-xl mx-auto"></div>
            <div className="h-4 w-96 bg-blue-950/40 rounded-xl mx-auto mt-6"></div>
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="max-w-3xl mx-auto rounded-3xl bg-[#090d1a] border border-blue-900/20 p-8"
            >
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-blue-950/40"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-blue-950/40 rounded-lg w-52"></div>
                  <div className="h-4 bg-blue-950/40 rounded-lg w-32"></div>
                </div>
              </div>
              <div className="mt-6 h-20 bg-blue-950/40 rounded-xl"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const experiences1 = [...(portfolio?.experience || [])].sort((a, b) => {
    const getYear = (date) => parseInt(date?.match(/\d{4}/g)?.slice(-1)[0]) || 0;
    return getYear(b.date) - getYear(a.date);
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28 px-[7vw] md:px-[8vw] lg:px-[10vw] bg-[#030712]"
    >
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-0 left-[-100px] w-[350px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* SECTION TITLE */}
      <div className="relative z-10 text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm mb-6 backdrop-blur-xl"
        >
          <FiBriefcase />
          My Journey
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-wide"
        >
          Experience
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "128px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-5 rounded-full"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A collection of my professional experience, internships, and the
          impactful roles I have worked on.
        </motion.p>
      </div>

      {/* TIMELINE */}
      <div className="relative z-100">
        {/* Central Vertical Line */}
        <div className="absolute md:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-950 h-full"></div>

        <div className="space-y-12 sm:space-y-10">
          {experiences1.map((experience, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={experience._id || index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Central Timeline Logo/Badge */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="absolute md:left-1/2 left-0 transform -translate-x-1/2 bg-[#090d1a] border-4 border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.5)] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20 overflow-hidden"
                >
                  {experience.companyLogo || experience.img ? (
                    <img
                      src={experience.companyLogo || experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-cyan-400 font-black text-lg">
                      {experience.company?.charAt(0) || "?"}
                    </span>
                  )}
                </motion.div>

                {/* TIMELINE WORK DETAILS CARD */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.15 }}
                  className={`group relative w-full md:w-[46%] rounded-[32px] border border-blue-900/30 bg-[#090d1a]/80 backdrop-blur-2xl p-7 sm:p-8 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] ${
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  } ml-8 md:ml-0`}
                >
                  {/* Internal Hover Light Sheet */}
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                  {/* MOBILE HEADER ACCENT */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-blue-900/40 bg-blue-950/40 flex-shrink-0">
                      {experience.companyLogo || experience.img ? (
                        <img
                          src={experience.companyLogo || experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-cyan-400 font-bold text-xl">
                          {experience.company?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP HEADER ACCENT */}
                  <div className="hidden md:flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-blue-900/40 bg-blue-950/40 flex-shrink-0 shadow-lg">
                      {experience.companyLogo || experience.img ? (
                        <img
                          src={experience.companyLogo || experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-cyan-400 font-bold text-xl">
                          {experience.company?.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      <h4 className="text-cyan-400 mt-0.5 font-semibold text-[15px]">
                        {experience.company}
                      </h4>

                      <div className="flex items-center gap-4 mt-3 text-gray-400 text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                          <FiCalendar className="text-blue-500" />
                          <span>{experience.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiMapPin className="text-blue-500" />
                          <span>{experience.mode}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Meta Details Info Bar */}
                  <div className="md:hidden flex flex-wrap gap-4 text-gray-400 text-xs font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="text-blue-500" />
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="text-blue-500" />
                      <span>{experience.mode}</span>
                    </div>
                  </div>

                  {/* JOB DESCRIPTION TEXT */}
                  <p className="relative z-10 mt-4 text-gray-400 leading-relaxed text-sm sm:text-[15px]">
                    {experience.desc}
                  </p>

                  {/* CORE TECH LABELS */}
                  <div className="relative z-10 mt-6 md:mt-7">
                    <h5 className="text-white/90 text-xs uppercase tracking-wider font-bold mb-3">
                      Skills & Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(experience.skills || []).map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-gray-300 text-xs font-semibold hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-blue-500/10 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Radian Glow Base Accent */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;