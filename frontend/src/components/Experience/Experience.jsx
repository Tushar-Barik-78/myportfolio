// // import React from "react";
// // import { experiences } from "../../constants";

// // const Experience = () => {
// //   return (
// //     <section
// //       id="experience"
// //       className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2 "
// //     >
// //       {/* Section Title */}
// //       <div className="text-center mb-16">
// //         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
// //         <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
// //         <p className="text-gray-400 mt-4 text-lg font-semibold">
// //           A collection of my work experience and the roles I have taken in
// //           various organizations
// //         </p>
// //       </div>

// //       {/* Experience Timeline */}
// //       <div className="relative">
// //         {/* Vertical line */}
// //         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

// //         {/* Experience Entries */}
// //         {experiences.map((experience, index) => (
// //           <div
// //             key={experience.id}
// //             className={`flex flex-col lg:flex-row items-center mb-16 ${
// //               index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
// //             }`}
// //           >
// //             {/* Timeline Circle */}
// //             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0">
// //               <img
// //                 src={experience.img}
// //                 alt={experience.company}
// //                 className="w-full h-full object-cover rounded-full"
// //               />
// //             </div>

// //             {/* Content Section */}
// //             <div
// //               className={`w-full md:w-[80%] lg:max-w-[32%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
// //                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
// //               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
// //             >
// //               {/* Flex container for image and text */}
// //               <div className="flex items-center space-x-6">
// //                 {/* Company Logo/Image */}
// //                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
// //                   <img
// //                     src={experience.img}
// //                     alt={experience.company}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 {/* Role, Company Name, and Date */}
// //                 <div className="flex flex-col justify-between">
// //                   <div>
// //                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
// //                       {experience.role}
// //                     </h3>
// //                     <h4 className="text-md sm:text-sm text-gray-300">
// //                       {experience.company}
// //                     </h4>
// //                   </div>
// //                   {/* Date at the bottom */}
// //                   <p className="text-sm text-gray-500 mt-2">
// //                     {experience.date}
// //                   </p>
// //                 </div>
// //               </div>

// //               <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">{experience.desc}</p>
// //               <div className="mt-4">
// //                 <h5 className="font-medium text-white">Skills:</h5>
// //                 <ul className="flex flex-wrap mt-2">
// //                   {experience.skills.map((skill, index) => (
// //                     <li
// //                       key={index}
// //                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
// //                     >
// //                       {skill}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Experience;

// // src/components/Experience/Experience.jsx
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// import { experiences } from "../../constants";

// const Experience = () => {
//   const { portfolio, loading } = usePortfolio();

//   if (loading) {
//     return (
//       <section className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//           <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
//         </div>
//         <div className="space-y-8">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="animate-pulse bg-gray-900 rounded-2xl p-8 border border-white ml-8 sm:ml-44 max-w-sm">
//               <div className="flex gap-4 mb-4">
//                 <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
//                 <div className="space-y-2 flex-1">
//                   <div className="h-6 bg-gray-700 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-700 rounded w-1/2"></div>
//                 </div>
//               </div>
//               <div className="h-16 bg-gray-700 rounded"></div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   // DB se experience array lo
//   // Structure: [{ role, company, companyLogo, date, desc, skills: [] }]
//   const experiences1 = portfolio?.experience || experiences;

//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

//         {experiences1.map((experience, index) => (
//           <div
//             key={experience._id || index}
//             className={`flex flex-col lg:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
//             }`}
//           >
//             {/* Timeline Circle — companyLogo Cloudinary URL hoga */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
//               {experience.companyLogo || experience.img ? (
//                 <img
//                   src={experience.companyLogo || experience.img}
//                   alt={experience.company}
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               ) : (
//                 // Logo nahi hai to company name ka pehla letter dikhao
//                 <span className="text-white font-bold text-xl">
//                   {experience.company?.charAt(0) || "?"}
//                 </span>
//               )}
//             </div>

//             {/* Content Card */}
//             <div
//               className={`w-full md:w-[80%] lg:max-w-[32%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
//                   {experience.companyLogo || experience.img ? (
//                     <img
//                       src={experience.companyLogo || experience.img}
//                       alt={experience.company}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-purple-900 flex items-center justify-center">
//                       <span className="text-white font-bold text-2xl">
//                         {experience.company?.charAt(0) || "?"}
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Role, Company, Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">
//                 {experience.desc}
//               </p>

//               {/* Skills tags */}
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {(experience.skills || []).map((skill, i) => (
//                     <li
//                       key={i}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

// src/components/Experience/Experience.jsx

import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { experiences } from "../../constants";
import { FiBriefcase, FiCalendar, FiMail, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <section className="relative overflow-hidden py-28 px-[7vw] lg:px-[10vw] bg-[#050414]">
        <div className="animate-pulse space-y-10">
          <div className="text-center">
            <div className="h-10 w-72 bg-[#1b1333] rounded-xl mx-auto"></div>

            <div className="h-4 w-96 bg-[#1b1333] rounded-xl mx-auto mt-6"></div>
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="max-w-3xl mx-auto rounded-3xl bg-[#120d25] border border-white/10 p-8"
            >
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#1b1333]"></div>

                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-[#1b1333] rounded-lg w-52"></div>

                  <div className="h-4 bg-[#1b1333] rounded-lg w-32"></div>

                  <div className="h-4 bg-[#1b1333] rounded-lg w-24"></div>
                </div>
              </div>

              <div className="mt-6 h-20 bg-[#1b1333] rounded-xl"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const experiences1 = [...(portfolio?.experience || experiences)].sort(
    (a, b) => {
      const getYear = (date) =>
        parseInt(date?.match(/\d{4}/g)?.slice(-1)[0]) || 0;
      return getYear(b.date) - getYear(a.date); // latest year pehle
    },
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28 px-[7vw] md:px-[8vw] lg:px-[10vw] bg-[#050414]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* SECTION TITLE */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
          <FiBriefcase />
          My Journey
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white">
          Experience
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of my professional experience, internships, and the
          impactful roles I have worked on.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative z-10">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"></div>

        <div className="space-y-10">
          {experiences1.map((experience, index) => (
            <div
              key={experience._id || index}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
                {experience.companyLogo || experience.img ? (
                  <img
                    src={experience.companyLogo || experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white font-bold text-lg">
                    {experience.company?.charAt(0) || "?"}
                  </span>
                )}
              </div>

              {/* CARD */}
              <div
                className={`group relative w-full md:w-[46%] rounded-[32px] border border-white/10 bg-[#120d25]/80 backdrop-blur-2xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                } ml-8 md:ml-0`}
              >
                {/* Top Glow */}
                <div className="absolute top-0 left-0 w-full h-full rounded-[32px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* MOBILE LOGO */}
                <div className="md:hidden flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-[#1b1333]">
                    {experience.companyLogo || experience.img ? (
                      <img
                        src={experience.companyLogo || experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                        {experience.company?.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className=" text-lg sm:text-xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <p className="text-purple-300 text-sm">
                      {experience.company}
                    </p>
                  </div>
                </div>

                {/* DESKTOP CONTENT */}
                <div className="hidden md:flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-[#1b1333] flex-shrink-0">
                    {experience.companyLogo || experience.img ? (
                      <img
                        src={experience.companyLogo || experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                        {experience.company?.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <h4 className="text-purple-300 mt-1 font-medium">
                      {experience.company}
                    </h4>

                    <div className="flex items-center gap-2 text-gray-100 text-sm mt-3">
                      <FiCalendar />

                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-100 text-sm mt-3">
                      <FiMapPin />

                      <span>{experience.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Date */}
                <div className="md:hidden flex items-center gap-2 text-gray-200 text-sm mb-3">
                  <FiCalendar />
                  <span>{experience.date}</span>
                </div>
                <div className="md:hidden flex items-center gap-2 text-gray-200 text-sm mb-3">
                  <FiMapPin />
                  <span>{experience.mode}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-5 text-gray-400 leading-relaxed text-[13px] sm:text-base">
                  {experience.desc}
                </p>

                {/* SKILLS */}
                <div className="relative z-10 mt-6 md:mt-7">
                  <h5 className="text-white font-semibold mb-4">
                    Skills & Technologies
                  </h5>

                  <div className="flex flex-wrap gap-3">
                    {(experience.skills || []).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-2 rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-200 text-[12px] sm:text-sm font-medium hover:bg-purple-500/20 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Blur */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
