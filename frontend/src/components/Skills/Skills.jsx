// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";
// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
//     >
//       <div className="text-center mb-8">
//         <h2 className="text-white text-3xl md:text-4xl font-bold ">SKILLS</h2>
//         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//         <p className="text-gray-300 mt-4 text-lg font-semibold">
//           A collection of my technical skills and expertise honed through
//           various projects and experiences
//         </p>
//       </div>

//       {/* Skill card design */}
//       <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//         {SkillsInfo.map((catagory) => {
//           const { title, skills } = catagory;
//           return (
//             <div
//               key={title}
//               className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 lg:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//             >
//               <h3 className="text-gray-400 text-2xl sm:text-3xl font-semibold mb-4 text-center">
//                 {title}
//               </h3>

//               {/* Skill Items-3 per row on larger screen */}
//               <Tilt tiltMaxAngleX={20}
//                 tiltMaxAngleY={20}
//                 perspective={1000}
//                 scale={1.05}
//                 transitionSpeed={1000}
//                 gyroscope={true}
//               >
//                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full ">
//                   {skills.map((curSkill) => {
//                     return (
//                       <div
//                         key={curSkill.name}
//                         className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                       >
//                         <img
//                           src={curSkill.logo}
//                           alt={`${curSkill.name} logo`}
//                           className="w-5 h-5 lg:w-8 lg:h-8"
//                         />
//                         <span className="text-xs sm:text-sm text-gray-300">
//                           {curSkill.name}
//                         </span>
//                       </div>
//                     );
//                   })}
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

const Skills = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <section className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom">
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold">SKILLS</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        </div>
        <div className="flex flex-wrap gap-5 py-10 justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-900 px-6 py-8 w-full sm:w-[48%] rounded-2xl border border-white animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-6"></div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((j) => (
                  <div key={j} className="h-10 bg-gray-700 rounded-3xl"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // DB se skills array lo
  // Structure: [{ title: "Frontend", skills: [{ name: "React", logo: "https://..." }] }]
  const skillsData = portfolio?.skills || SkillsInfo;

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {skillsData.map((category) => {
          const { title, skills } = category;
          return (
            <div
              key={title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 lg:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            >
              <h3 className="text-gray-400 text-2xl sm:text-3xl font-semibold mb-4 text-center">
                {title}
              </h3>

              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                  {skills.map((curSkill) => (
                    <div
                      key={curSkill.name}
                      className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                    >
                      {/* Logo — Cloudinary URL ya koi bhi URL kaam karega */}
                      {curSkill.logo && (
                        <img
                          src={curSkill.logo}
                          alt={`${curSkill.name} logo`}
                          className="w-5 h-5 lg:w-8 lg:h-8 object-contain"
                        />
                      )}
                      <span className="text-xs sm:text-sm text-gray-300">
                        {curSkill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;