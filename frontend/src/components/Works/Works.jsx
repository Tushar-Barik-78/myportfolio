// src/components/Works/Works.jsx

import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import { projects } from "../../constants";

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

  if (loading) {
    return (
      <section className="py-24 px-[7vw] lg:px-[12vw] bg-[#050414]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">PROJECTS</h2>

          <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-3xl overflow-hidden border border-white/10 bg-[#120d25]"
            >
              <div className="h-52 bg-[#1b1333]"></div>

              <div className="p-5 space-y-4">
                <div className="h-6 bg-[#1b1333] rounded"></div>

                <div className="h-16 bg-[#1b1333] rounded"></div>

                <div className="flex gap-2">
                  <div className="h-8 w-20 rounded-full bg-[#1b1333]"></div>

                  <div className="h-8 w-24 rounded-full bg-[#1b1333]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const projects1 = portfolio?.projects || projects;

  return (
    <section
      id="work"
      className="py-12 md:py-20 px-[7vw] md:px-[7vw] lg:px-[12vw] bg-[#050414] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full"></div>

      {/* TITLE */}
      <div className="relative z-10 text-center mb-8 md:mb-15">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
          ✨ Featured Work
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white">
          My Projects
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of modern web applications and real-world projects built
          using cutting-edge technologies and creative UI/UX design.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects1.map((project, index) => (
          <div
            key={project._id || index}
            className="group rounded-3xl overflow-hidden border border-white/10 bg-[#120d25]/80 backdrop-blur-xl hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(130,69,236,0.15)] transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="w-full h-52 bg-gradient-to-br from-[#1b1333] to-[#0f091f] flex items-center justify-center text-gray-500">
                  {project.title}
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-gray-400 line-clamp-3 mb-3">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-3 md:mb-6">
                {(project.tags || []).map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/20 backdrop-blur-md p-4">
          <div
            ref={workBox}
            className="w-[95%] max-w-3xl rounded-3xl overflow-hidden border border-white/10 bg-[#120d25] shadow-2xl"
          >
            {/* TOP IMAGE */}
            <div className="relative w-full flex justify-center bg-gray-900 px-3 mt-3">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-[#1b1333] to-[#0f091f]"></div>
              )}

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-red-500/30 transition"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h2>

              <p className="lg:text-base text-xs text-gray-400 mb-4">
                {selectedProject.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(selectedProject.tags || []).map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-2">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#1b1333] text-white font-semibold hover:bg-[#2a1d4d] transition"
                  >
                    <FiGithub />
                    View Code
                  </a>
                )}

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
