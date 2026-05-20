import React from "react";
// import { education, education, experiences } from "../../constants";

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3 "
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are
//           the details of my academic background
//         </p>
//       </div>

//       {/* education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

//         {/* education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col lg:flex-row items-center mb-16 ${
//               index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
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
//               <div className="flex items-center space-x-4">
//                 {/* School Logo/Image */}
//                 <div className="w-30 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* school, degree, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               {/* Grade and description */}
//               <p className="mt-4 text-white font-bold">Grade : {edu.grade}</p>
//               <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px] ">
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



// src/components/Education/Education.jsx
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { education, experiences } from "../../constants";


const Education = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <section className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse bg-gray-900 rounded-2xl p-8 border border-white ml-8 sm:ml-44 max-w-sm">
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-16 bg-gray-700 rounded-md"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="h-20 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // DB se education array lo
  // Structure: [{ school, schoolLogo, date, grade, degree, desc }]
  const education1 = portfolio?.education || education; // Agar DB mein education nahi hai to constants wala use karlo

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-42 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

        {education1.map((edu, index) => (
          <div
            key={edu._id || index}
            className={`flex flex-col lg:flex-row items-center mb-16 ${
              index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Timeline Circle — schoolLogo Cloudinary URL hoga */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
              {edu.schoolLogo ? (
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {edu.school?.charAt(0) || "?"}
                </span>
              )}
            </div>

            {/* Content Card */}
            <div
              className={`w-full md:w-[80%] lg:max-w-[32%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-4">
                {/* School Logo */}
                <div className="w-30 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  {edu.schoolLogo ? (
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-purple-900 flex items-center justify-center px-2">
                      <span className="text-white font-bold text-sm text-center leading-tight">
                        {edu.school?.split(",")[0] || "School"}
                      </span>
                    </div>
                  )}
                </div>

                {/* School, Degree, Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              {/* Grade and Description */}
              <p className="mt-4 text-white font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;