import React from "react";
// src/components/Education/Education.jsx
import { usePortfolio } from "../../hooks/usePortfolio.jsx";

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
            <div
              key={i}
              className="animate-pulse bg-gray-900 rounded-2xl p-8 border border-white ml-8 sm:ml-44 max-w-sm"
            >
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
  const education1 = [...(portfolio?.education || [])].sort((a, b) => {
    const getYear = (date) =>
      parseInt(date?.match(/\d{4}/g)?.slice(-1)[0]) || 0;
    return getYear(b.date) - getYear(a.date); // latest year pehle
  }); // Agar DB mein education nahi hai to constants wala use karlo

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full"></div>

      {/* TITLE */}
      <div className="relative z-10 text-center mb-8 md:mb-15">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
          🎓 Journey of Learning
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white">
          Qualifications
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
          My education journey and academic achievements that shaped my
          technical and problem-solving skills.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"></div>

        {education1.map((edu, index) => (
          <div
            key={edu._id || index}
            className={`flex flex-col lg:flex-row items-center mb-16 ${
              index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Timeline Circle — schoolLogo Cloudinary URL hoga */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 sm:z-0 overflow-hidden">
              {edu.schoolLogo || edu.img ? (
                <img
                  src={edu.schoolLogo || edu.img}
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
              className={`group relative w-full md:w-[46%] rounded-[32px] border border-white/10 bg-[#120d25]/80 backdrop-blur-2xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              } ml-8 md:ml-0`}
            >
              <div className="flex items-center space-x-4">
                {/* School Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                  {edu.schoolLogo || edu.img ? (
                    <img
                      src={edu.schoolLogo || edu.img}
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
                    <h3 className="text-lg sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              {/* Grade and Description */}
              <p className="mt-4 text-white font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400 text-[15px] sm:text-[16px]">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
