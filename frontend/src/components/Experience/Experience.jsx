// import React from "react";
// import { experiences } from "../../constants";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2 "
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

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col lg:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full md:w-[80%] lg:max-w-[32%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">
//                     {experience.date}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
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

const Experience = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <section className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
          <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-gray-900 rounded-2xl p-8 border border-white ml-8 sm:ml-44 max-w-sm">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="h-16 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // DB se experience array lo
  // Structure: [{ role, company, companyLogo, date, desc, skills: [] }]
  const experiences1 = portfolio?.experience || experiences;

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

        {experiences1.map((experience, index) => (
          <div
            key={experience._id || index}
            className={`flex flex-col lg:flex-row items-center mb-16 ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Timeline Circle — companyLogo Cloudinary URL hoga */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
              {experience.companyLogo ? (
                <img
                  src={experience.companyLogo || experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                // Logo nahi hai to company name ka pehla letter dikhao
                <span className="text-white font-bold text-xl">
                  {experience.company?.charAt(0) || "?"}
                </span>
              )}
            </div>

            {/* Content Card */}
            <div
              className={`w-full md:w-[80%] lg:max-w-[32%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  {experience.companyLogo ? (
                    <img
                      src={experience.companyLogo || experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-purple-900 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {experience.company?.charAt(0) || "?"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Role, Company, Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">
                {experience.desc}
              </p>

              {/* Skills tags */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {(experience.skills || []).map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;