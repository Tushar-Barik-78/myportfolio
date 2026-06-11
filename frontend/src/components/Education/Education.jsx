// import React from "react";
// // src/components/Education/Education.jsx
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";

// const Education = () => {
//   const { portfolio, loading } = usePortfolio();

//   if (loading) {
//     return (
//       <section className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//           <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
//         </div>
//         <div className="space-y-8">
//           {[1, 2].map((i) => (
//             <div
//               key={i}
//               className="animate-pulse bg-gray-900 rounded-2xl p-8 border border-white ml-8 sm:ml-44 max-w-sm"
//             >
//               <div className="flex gap-4 mb-4">
//                 <div className="w-24 h-16 bg-gray-700 rounded-md"></div>
//                 <div className="space-y-2 flex-1">
//                   <div className="h-6 bg-gray-700 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-700 rounded w-1/2"></div>
//                 </div>
//               </div>
//               <div className="h-20 bg-gray-700 rounded"></div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   // DB se education array lo
//   // Structure: [{ school, schoolLogo, date, grade, degree, desc }]
//   const education1 = [...(portfolio?.education || [])].sort((a, b) => {
//     const getYear = (date) =>
//       parseInt(date?.match(/\d{4}/g)?.slice(-1)[0]) || 0;
//     return getYear(b.date) - getYear(a.date); // latest year pehle
//   }); // Agar DB mein education nahi hai to constants wala use karlo

//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>

//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full"></div>

//       {/* TITLE */}
//       <div className="relative z-10 text-center mb-8 md:mb-15">
//         <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
//           🎓 Journey of Learning
//         </div>

//         <h2 className="text-3xl md:text-4xl font-black text-white">
//           Qualifications
//         </h2>

//         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

//         <p className="text-gray-400 mt-6 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
//           My education journey and academic achievements that shaped my
//           technical and problem-solving skills.
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"></div>

//         {education1.map((edu, index) => (
//           <div
//             key={edu._id || index}
//             className={`flex flex-col lg:flex-row items-center mb-16 ${
//               index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
//             }`}
//           >
//             {/* Timeline Circle — schoolLogo Cloudinary URL hoga */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
//               {edu.schoolLogo || edu.img ? (
//                 <img
//                   src={edu.schoolLogo || edu.img}
//                   alt={edu.school}
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               ) : (
//                 <span className="text-white font-bold text-lg">
//                   {edu.school?.charAt(0) || "?"}
//                 </span>
//               )}
//             </div>

//             {/* Content Card */}

//             <div
//               className={`group relative w-full md:w-[46%] rounded-[32px] border border-white/10 bg-[#120d25]/80 backdrop-blur-2xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] ${
//                 index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
//               } ml-8 md:ml-0`}
//             >
//               <div className="flex items-center space-x-4">
//                 {/* School Logo */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
//                   {edu.schoolLogo || edu.img ? (
//                     <img
//                       src={edu.schoolLogo || edu.img}
//                       alt={edu.school}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-purple-900 flex items-center justify-center px-2">
//                       <span className="text-white font-bold text-sm text-center leading-tight">
//                         {edu.school?.split(",")[0] || "School"}
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {/* School, Degree, Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-lg sm:text-2xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-sm sm:text-base text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               {/* Grade and Description */}
//               <p className="mt-4 text-white font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">
//                 {edu.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";

const Education = () => {
  const { portfolio, loading } = usePortfolio();

  // Loading Skeleton State (Matching the Blue/Black theme)
  if (loading) {
    return (
      <section className="relative py-24 px-[5vw] md:px-[10vw] font-sans bg-[#030712] overflow-hidden">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-6 bg-blue-950/50 w-40 mx-auto rounded-full mb-4"></div>
          <div className="h-10 bg-blue-950/50 w-64 mx-auto rounded-xl mb-4"></div>
          <div className="w-32 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto space-y-8">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse bg-[#0b1329] border border-blue-900/30 rounded-3xl p-6 md:p-8 max-w-xl mx-auto md:mx-0">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-950 rounded-xl"></div>
                <div className="space-y-2 flex-1 py-1">
                  <div className="h-6 bg-blue-950 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-blue-950 rounded-lg w-1/2"></div>
                </div>
              </div>
              <div className="h-16 bg-blue-950 rounded-xl mt-4"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Data Sorting (Latest education first)
  const educationData = [...(portfolio?.education || [])].sort((a, b) => {
    const getYear = (date) => parseInt(date?.match(/\d{4}/g)?.slice(-1)[0]) || 0;
    return getYear(b.date) - getYear(a.date);
  });

  return (
    <section id="education" className="relative py-24 px-[5vw] md:px-[10vw] font-sans bg-[#030712] text-gray-100 overflow-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="relative z-10 text-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm mb-4 backdrop-blur-xl font-medium tracking-wide"
        >
          <GraduationCap size={16} /> Journey of Learning
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tight"
        >
          Qualifications
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
          className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          My educational journey and academic achievements that shaped my technical and problem-solving skills.
        </motion.p>
      </div>

      {/* TIMELINE SECTION */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Center/Left Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent"></div>

        <div className="space-y-12 md:space-y-0">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={edu._id || index} 
                className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block w-1/2"></div>

                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#0b1329] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center justify-center overflow-hidden"
                  >
                    {edu.schoolLogo || edu.img ? (
                      <img
                        src={edu.schoolLogo || edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <GraduationCap className="text-cyan-400 w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`w-full md:w-[44%] pl-12 pr-2 md:p-0 ${
                    isEven ? "md:pr-12 md:pl-0" : "md:pl-12"
                  }`}
                >
                  <div className="group relative rounded-2xl border border-blue-900/40 bg-[#090d1a]/80 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                    
                    {/* Decorative Corner Glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex flex-row items-center gap-4 mb-4">
                      {/* School Logo */}
                      <div className="w-14 h-14 bg-blue-950/40 border border-blue-800/30 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-1">
                        {edu.schoolLogo || edu.img ? (
                          <img
                            src={edu.schoolLogo || edu.img}
                            alt={edu.school}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <span className="text-cyan-400 font-bold text-base uppercase">
                            {edu.school?.substring(0, 2) || "ED"}
                          </span>
                        )}
                      </div>

                      {/* Header Details */}
                      <div className="space-y-1">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                          {edu.degree}
                        </h3>
                        <h4 className="text-sm text-gray-400 font-medium">
                          {edu.school}
                        </h4>
                      </div>
                    </div>

                    {/* Metadata (Date & Grade) */}
                    <div className="flex flex-wrap gap-3 items-center text-xs font-medium text-gray-400 mt-4 pt-4 border-t border-blue-950/60">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-900/30">
                        <Calendar size={13} className="text-cyan-400" />
                        <span>{edu.date}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                          <Award size={13} />
                          <span>Grade: {edu.grade}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {edu.desc && (
                      <p className="mt-4 text-gray-400 text-sm leading-relaxed font-light">
                        {edu.desc}
                      </p>
                    )}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;