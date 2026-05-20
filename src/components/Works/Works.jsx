import { useEffect, useRef, useState } from "react";
import { projects } from "../../constants";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handelOpenModel = (project) => {
    setSelectedProject(project);
  };

  const workBox = useRef(null);
  useEffect(() => {
    const handelWorkBox = (e) => {
      if (workBox.current && !workBox.current.contains(e.target)) {
        setSelectedProject(null);
      }
    };
    document.addEventListener("mousedown", handelWorkBox);
    return () => document.removeEventListener("mousedown", handelWorkBox);
  }, []);
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Project Title section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-600 mx-auto mt-4 "></div>
        <p className="font-semibold text-gray-400 text-shadow-md mt-4">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 "
              onClick={() => handelOpenModel(project)}
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                  {project.description}
                </p>
                <div>
                  {project.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Open Model container */}
      {selectedProject && (
        <div
          
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <div ref={workBox} className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            {/* Cross mark to close the model */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white text-3xl font-bold hover:text-purple-500 cursor-pointer "
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h1 className="lg:text-3xl font-bold text-white text-md mb-4">
                  {selectedProject.title}
                </h1>
                <p className="lg:text-base text-xs text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 mr-2 mb-2 text-xs lg:text-[14px] bg-[#251f38] text-purple-500 font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-4 ">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 w-1/2 hover:bg-purple-800 text-gray-400 lg:px-2 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 w-1/2 hover:bg-purple-800 text-white lg:px-2 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
