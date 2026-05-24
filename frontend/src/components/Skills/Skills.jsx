// // import { SkillsInfo } from "../../constants";
// // import Tilt from "react-parallax-tilt";
// // const Skills = () => {
// //   return (
// //     <section
// //       id="skills"
// //       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
// //     >
// //       <div className="text-center mb-8">
// //         <h2 className="text-white text-3xl md:text-4xl font-bold ">SKILLS</h2>
// //         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
// //         <p className="text-gray-300 mt-4 text-lg font-semibold">
// //           A collection of my technical skills and expertise honed through
// //           various projects and experiences
// //         </p>
// //       </div>

// //       {/* Skill card design */}
// //       <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
// //         {SkillsInfo.map((catagory) => {
// //           const { title, skills } = catagory;
// //           return (
// //             <div
// //               key={title}
// //               className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 lg:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
// //             >
// //               <h3 className="text-gray-400 text-2xl sm:text-3xl font-semibold mb-4 text-center">
// //                 {title}
// //               </h3>

// //               {/* Skill Items-3 per row on larger screen */}
// //               <Tilt tiltMaxAngleX={20}
// //                 tiltMaxAngleY={20}
// //                 perspective={1000}
// //                 scale={1.05}
// //                 transitionSpeed={1000}
// //                 gyroscope={true}
// //               >
// //                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full ">
// //                   {skills.map((curSkill) => {
// //                     return (
// //                       <div
// //                         key={curSkill.name}
// //                         className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
// //                       >
// //                         <img
// //                           src={curSkill.logo}
// //                           alt={`${curSkill.name} logo`}
// //                           className="w-5 h-5 lg:w-8 lg:h-8"
// //                         />
// //                         <span className="text-xs sm:text-sm text-gray-300">
// //                           {curSkill.name}
// //                         </span>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </Tilt>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;

// // src/components/Skills/Skills.jsx
// import Tilt from "react-parallax-tilt";
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// import { SkillsInfo } from "../../constants";

// const Skills = () => {
//   const { portfolio, loading } = usePortfolio();

//   if (loading) {
//     return (
//       <section className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom">
//         <div className="text-center mb-8">
//           <h2 className="text-white text-3xl md:text-4xl font-bold">SKILLS</h2>
//           <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//         </div>
//         <div className="flex flex-wrap gap-5 py-10 justify-between">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="bg-gray-900 px-6 py-8 w-full sm:w-[48%] rounded-2xl border border-white animate-pulse">
//               <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-6"></div>
//               <div className="grid grid-cols-3 gap-3">
//                 {[1, 2, 3, 4, 5, 6].map((j) => (
//                   <div key={j} className="h-10 bg-gray-700 rounded-3xl"></div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   // DB se skills array lo
//   // Structure: [{ title: "Frontend", skills: [{ name: "React", logo: "https://..." }] }]
//   const skillsData = portfolio?.skills || SkillsInfo;

//   return (
//     <section
//       id="skills"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
//     >
//       <div className="text-center mb-8">
//         <h2 className="text-white text-3xl md:text-4xl font-bold">SKILLS</h2>
//         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//         <p className="text-gray-300 mt-4 text-lg font-semibold">
//           A collection of my technical skills and expertise honed through
//           various projects and experiences
//         </p>
//       </div>

//       <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//         {skillsData.map((category) => {
//           const { title, skills } = category;
//           return (
//             <div
//               key={title}
//               className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 lg:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//             >
//               <h3 className="text-gray-400 text-2xl sm:text-3xl font-semibold mb-4 text-center">
//                 {title}
//               </h3>

//               <Tilt
//                 tiltMaxAngleX={20}
//                 tiltMaxAngleY={20}
//                 perspective={1000}
//                 scale={1.05}
//                 transitionSpeed={1000}
//                 gyroscope={true}
//               >
//                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
//                   {skills.map((curSkill) => (
//                     <div
//                       key={curSkill.name}
//                       className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                     >
//                       {/* Logo — Cloudinary URL ya koi bhi URL kaam karega */}
//                       {curSkill.logo && (
//                         <img
//                           src={curSkill.logo}
//                           alt={`${curSkill.name} logo`}
//                           className="w-5 h-5 lg:w-8 lg:h-8 object-contain"
//                         />
//                       )}
//                       <span className="text-xs sm:text-sm text-gray-300">
//                         {curSkill.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </Tilt>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// src/components/Skills/Skills.jsx

import Tilt from "react-parallax-tilt";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { SkillsInfo } from "../../constants";

import { FiCode, FiLayers } from "react-icons/fi";

const Skills = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <section className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#050414]">
        <div className="animate-pulse">
          <div className="text-center mb-16">
            <div className="h-12 w-72 bg-[#1a1230] rounded-xl mx-auto"></div>

            <div className="h-4 w-96 bg-[#1a1230] rounded-xl mx-auto mt-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-[30px] bg-[#120d25] border border-white/10 p-8"
              >
                <div className="h-8 w-40 bg-[#1a1230] rounded-lg mb-8"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <div
                      key={j}
                      className="h-16 rounded-2xl bg-[#1a1230]"
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

  // DB Skills or Fallback Skills
  const skillsData = portfolio?.skills || SkillsInfo;

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 px-[7vw] md:px-[8vw] lg:px-[10vw] bg-[#050414]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* SECTION TITLE */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
          <FiCode />
          Technical Expertise
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white">
          Skills & Technologies
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          A collection of technologies, frameworks, tools, and expertise I use
          to craft modern, scalable, and high-performance applications.
        </p>
      </div>

      {/* SKILL CARDS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category) => {
          const { title, skills } = category;

          const CardWrapper = ({ children }) => {
            // Disable tilt on mobile
            if (typeof window !== "undefined" && window.innerWidth < 768) {
              return children;
            }

            return (
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                gyroscope={true}
              >
                {children}
              </Tilt>
            );
          };

          return (
            <CardWrapper key={title}>
              <div className="group relative rounded-[32px] border border-white/10 bg-[#120d25]/80 backdrop-blur-2xl px-3 py-5 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* TOP */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
                    <FiLayers />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {skills.length} Technologies
                    </p>
                  </div>
                </div>

                {/* SKILLS GRID */}
                <div className=" z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {skills.map((curSkill, index) => (
                    <div
                      key={curSkill.name}
                      className="group/skill relative flex gap-2 items-center justify-center text-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-2 px-3 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:-translate-y-1"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Logo */}
                      {/* <div className="w-14 h-14 rounded-2xl bg-[#1b1333] border border-white/10 flex items-center justify-center mb-4 overflow-hidden group-hover/skill:scale-110 transition duration-300"> */}
                        {curSkill.logo ? (
                          <img
                            src={curSkill.logo}
                            alt={`${curSkill.name} logo`}
                            className="w-7 h-7 object-contain"
                          />
                        ) : (
                          <span className="text-white text-xl font-bold">
                            {curSkill.name?.charAt(0)}
                          </span>
                        )}
                      {/* </div> */}

                      {/* Name */}
                      <span className="text-sm sm:text-[15px] text-gray-300 font-medium group-hover/skill:text-white transition">
                        {curSkill.name}
                      </span>

                      {/* Decorative Glow */}
                      <div className="absolute -bottom-8 w-16 h-16 bg-purple-500/10 blur-2xl rounded-full opacity-0 group-hover/skill:opacity-100 transition"></div>
                    </div>
                  ))}
                </div>

                {/* Decorative Blur */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
