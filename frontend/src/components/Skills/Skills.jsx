// // src/components/Skills/Skills.jsx

// import Tilt from "react-parallax-tilt";
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// import { FiCode, FiLayers } from "react-icons/fi";

// const Skills = () => {
//   const { portfolio, loading } = usePortfolio();

//   if (loading) {
//     return (
//       <section className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#050414]">
//         <div className="animate-pulse">
//           <div className="text-center mb-16">
//             <div className="h-12 w-72 bg-[#1a1230] rounded-xl mx-auto"></div>

//             <div className="h-4 w-96 bg-[#1a1230] rounded-xl mx-auto mt-5"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[1, 2, 3, 4].map((i) => (
//               <div
//                 key={i}
//                 className="rounded-[30px] bg-[#120d25] border border-white/10 p-8"
//               >
//                 <div className="h-8 w-40 bg-[#1a1230] rounded-lg mb-8"></div>

//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((j) => (
//                     <div
//                       key={j}
//                       className="h-16 rounded-2xl bg-[#1a1230]"
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // DB Skills only — no constants fallback
//   const skillsData = portfolio?.skills || [];

//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden py-28 px-[7vw] md:px-[8vw] lg:px-[10vw] bg-[#050414]"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

//       <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full"></div>

//       {/* SECTION TITLE */}
//       <div className="relative z-10 text-center mb-20">
//         <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
//           <FiCode />
//           Technical Expertise
//         </div>

//         <h2 className="text-4xl sm:text-5xl font-black text-white">
//           Skills & Technologies
//         </h2>

//         <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

//         <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
//           A collection of technologies, frameworks, tools, and expertise I use
//           to craft modern, scalable, and high-performance applications.
//         </p>
//       </div>

//       {/* SKILL CARDS */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {skillsData.map((category) => {
//           const { title, skills } = category;

//           const CardWrapper = ({ children }) => {
//             // Disable tilt on mobile
//             if (typeof window !== "undefined" && window.innerWidth < 768) {
//               return children;
//             }

//             return (
//               <Tilt
//                 tiltMaxAngleX={8}
//                 tiltMaxAngleY={8}
//                 perspective={1000}
//                 scale={1.02}
//                 transitionSpeed={1500}
//                 gyroscope={true}
//               >
//                 {children}
//               </Tilt>
//             );
//           };

//           return (
//             <CardWrapper key={title}>
//               <div className="group relative rounded-[32px] border border-white/10 bg-[#120d25]/80 backdrop-blur-2xl px-3 py-5 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]">
//                 {/* Hover Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//                 {/* TOP */}
//                 <div className="relative z-10 flex items-center gap-4 mb-8">
//                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
//                     <FiLayers />
//                   </div>

//                   <div>
//                     <h3 className="text-2xl sm:text-3xl font-bold text-white">
//                       {title}
//                     </h3>

//                     <p className="text-gray-400 text-sm mt-1">
//                       {skills.length} Technologies
//                     </p>
//                   </div>
//                 </div>

//                 {/* SKILLS GRID */}
//                 <div className=" z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
//                   {skills.map((curSkill, index) => (
//                     <div
//                       key={curSkill.name || index}
//                       className="group/skill relative flex items-center justify-center text-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-2 px-3 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:-translate-y-1"
//                       style={{
//                         animationDelay: `${index * 100}ms`,
//                       }}
//                     >
//                       {/* Name only - no logo */}
//                       <span className="text-sm sm:text-[15px] text-gray-300 font-medium group-hover/skill:text-white transition">
//                         {curSkill.name}
//                       </span>

//                       {/* Decorative Glow */}
//                       <div className="absolute -bottom-8 w-16 h-16 bg-purple-500/10 blur-2xl rounded-full opacity-0 group-hover/skill:opacity-100 transition"></div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Decorative Blur */}
//                 <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
//               </div>
//             </CardWrapper>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;



import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { FiCode, FiLayers } from "react-icons/fi";

const Skills = () => {
  const { portfolio, loading } = usePortfolio();

  // Loading Skeleton State (Refined Blue/Black Theme)
  if (loading) {
    return (
      <section className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#030712]">
        <div className="animate-pulse">
          <div className="text-center mb-16">
            <div className="h-12 w-72 bg-blue-950/40 rounded-xl mx-auto"></div>
            <div className="h-4 w-96 bg-blue-950/40 rounded-xl mx-auto mt-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-[30px] bg-[#090d1a] border border-blue-900/20 p-8"
              >
                <div className="h-8 w-40 bg-blue-950/40 rounded-lg mb-8"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <div
                      key={j}
                      className="h-16 rounded-2xl bg-blue-950/30"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const skillsData = portfolio?.skills || [];

  return (
    <section
      id="skills"
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
          <FiCode />
          Technical Expertise
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-wide"
        >
          Skills & Technologies
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
          className="text-gray-400 mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          A collection of technologies, frameworks, tools, and expertise I use
          to craft modern, scalable, and high-performance applications.
        </motion.p>
      </div>

      {/* SKILL CARDS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, categoryIdx) => {
          const { title, skills } = category;

          const CardWrapper = ({ children }) => {
            if (typeof window !== "undefined" && window.innerWidth < 768) {
              return children;
            }

            return (
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1200}
                scale={1.01}
                transitionSpeed={1200}
                gyroscope={true}
              >
                {children}
              </Tilt>
            );
          };

          return (
            <CardWrapper key={title}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: categoryIdx * 0.15 }}
                className="group relative rounded-[32px] border border-blue-900/30 bg-[#090d1a]/80 backdrop-blur-2xl px-4 py-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)]"
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* CATEGORY HEADER */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20">
                    <FiLayers />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {skills.length} Technologies
                    </p>
                  </div>
                </div>

                {/* SKILLS GRID */}
                <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {skills.map((curSkill, index) => (
                    <motion.div
                      key={curSkill.name || index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIdx * 0.1) + (index * 0.05) }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group/skill relative flex items-center justify-center text-center rounded-2xl border border-blue-900/40 bg-blue-950/20 backdrop-blur-xl py-3 px-3 transition-all duration-300 hover:border-cyan-500/40 hover:bg-blue-500/10"
                    >
                      <span className="text-sm sm:text-[15px] text-gray-300 font-medium group-hover/skill:text-cyan-300 transition-colors duration-300">
                        {curSkill.name}
                      </span>

                      {/* Micro Radial Glow behind Skill Tag */}
                      <div className="absolute -bottom-8 w-16 h-16 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Bottom Blur Corner */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
              </motion.div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;