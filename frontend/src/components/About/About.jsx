// // import { TypeAnimation } from "react-type-animation";


// // import profile3 from "../../assets/profile3.png";
// // import Tilt from "react-parallax-tilt";
// // const About = () => {
// //   return (
// //     <section
// //       id="about"
// //       className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-16 md:mt-20 lg:mt-24"
// //     >
// //       <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-5">
// //         {/* Left side code  */}
// //         <div className="md:w-1/2 text-center  md:text-left mt-8 md:mt-0">
// //           {/* Greetings */}
// //           <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
// //             Hii, I am
// //           </h1>
// //           {/* Name */}
// //           <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
// //             Tushar Barik
// //           </h2>
// //           {/* Skills heading with typing effect */}
// //           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
// //             <span className="text-white">I am a </span>

// //             <TypeAnimation
// //               sequence={[
// //                 "Fullstack Developer",
// //                 1000,
// //                 "App Developer",
// //                 1000,
// //                 "Coder",
// //                 1000,
// //                 "Problem Solver",
// //                 1000,
// //               ]}
// //               speed={40}
// //               deletionSpeed={20}
// //               repeat={Infinity}
// //               wrapper="span"
// //               style={{ color: "#8245ec", fontWeight: "600" }}
// //             />
// //           </h3>

// //           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
// //             I am a full-stack developer with over 2 years of experience in
// //             building scalable web applications. Skilled in both front-end and
// //             back-end development, I specialize in the MERN stack and other
// //             modern technologies to create seamless user experiences and
// //             efficient solutions.
// //           </p>
// //           {/* Resume button */}
// //           <a
// //             href="https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
// //             style={{
// //               background: "linear-gradient(90deg, #8245ec,#a855f7)",
// //               boxShadow: "0 0 2px #8245ec , 0 0 2px #8245ec,0 0 40px #8245ec",
// //             }}
// //           >
// //             DOWNLOAD CV
// //           </a>
// //         </div>

// //         {/* Right side code */}
// //         <div className="md:w-1/2 flex justify-center items-center md:justify-end">
// //           <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-500 rounded-full" 
// //             scale={1.02}
// //             tiltMaxAngleX={20}
// //             tiltMaxAngleY={20}
// //             perspective={1000}
// //             transitionSpeed={1000}
// //           >
// //             <img
// //               src={profile3}
// //               alt="Profile photo"
// //               className="w-full h-full rounded-full rotate-y-180 object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
// //             />
// //           </Tilt>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

// // src/components/About/About.jsx
// import { TypeAnimation } from "react-type-animation";
// import Tilt from "react-parallax-tilt";
// import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// // Fallback image — agar DB mein profileImage nahi hai tab ye use hoga
// import profile3 from "../../assets/profile3.png";

// const About = () => {
//   // usePortfolio hook se data lo — App.jsx mein ek baar fetch hua tha
//   const { portfolio, loading } = usePortfolio();

//   // Data load ho raha hai — loading state
//   if (loading) {
//     return (
//       <section className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-16 md:mt-20 lg:mt-24">
//         <div className="animate-pulse flex flex-col-reverse md:flex-row justify-between items-center gap-8">
//           <div className="md:w-1/2 space-y-4">
//             <div className="h-10 bg-gray-700 rounded w-3/4"></div>
//             <div className="h-14 bg-gray-700 rounded w-full"></div>
//             <div className="h-8 bg-gray-700 rounded w-1/2"></div>
//             <div className="h-24 bg-gray-700 rounded w-full"></div>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gray-700"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // DB se hero data lo, agar nahi mila to default values use karo
//   const hero = portfolio?.hero || {};
//   const name       = hero.name       || "Tushar Barik";
//   const greeting   = hero.greeting   || "Hi, I am";
//   const roles      = hero.roles      || ["Fullstack Developer", "Designer","Problem Solver","Tech Enthusiast"];
//   const bio        = hero.bio        || `I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.`;
//   const resumeUrl  = hero.resumeUrl  || "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view";
//   // profileImage Cloudinary URL hoga, nahi to local image
//   const profileImg = hero.profileImage || profile3;

//   // TypeAnimation ke liye roles ko sequence format mein convert karo
//   // ["Role1", "Role2"] → ["Role1", 1000, "Role2", 1000]
//   const typingSequence = roles.flatMap((role) => [role, 1000]);

//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-16 md:mt-20 lg:mt-24"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-5">

//         {/* ---- Left side ---- */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

//           {/* Greeting — DB se aata hai */}
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
//             {greeting}
//           </h1>

//           {/* Name — DB se aata hai */}
//           <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
//             {name}
//           </h2>

//           {/* Typing animation — DB se roles array aata hai */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <TypeAnimation
//               sequence={typingSequence}
//               speed={40}
//               deletionSpeed={20}
//               repeat={Infinity}
//               wrapper="span"
//               style={{ color: "#8245ec", fontWeight: "600" }}
//             />
//           </h3>

//           {/* Bio — DB se aata hai */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             {bio}
//           </p>

//           {/* Resume button — DB se URL aata hai */}
//           <a
//             href={resumeUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: "linear-gradient(90deg, #8245ec, #a855f7)",
//               boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
//             }}
//           >
//             DOWNLOAD CV
//           </a>
//         </div>

//         {/* ---- Right side — Profile image ---- */}
//         <div className="md:w-1/2 flex justify-center items-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-500 rounded-full"
//             scale={1.02}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             transitionSpeed={1000}
//           >
//             {/* src mein Cloudinary URL ya local image — dono kaam karega */}
//             <img
//               src={profileImg}
//               alt={`${name} profile photo`}
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;



// src/components/About/About.jsx

import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import profile3 from "../../assets/profile3.png";

const About = () => {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <section className="relative overflow-hidden py-20 px-[7vw] lg:px-[12vw]">
        <div className="animate-pulse flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="h-8 bg-[#1e1633] rounded-xl w-40"></div>
            <div className="h-16 bg-[#1e1633] rounded-xl w-full"></div>
            <div className="h-10 bg-[#1e1633] rounded-xl w-72"></div>
            <div className="h-28 bg-[#1e1633] rounded-2xl w-full"></div>
          </div>

          <div className="w-72 h-72 rounded-full bg-[#1e1633]"></div>
        </div>
      </section>
    );
  }

  const hero = portfolio?.hero || {};

  const name =
    hero.name || "Tushar Barik";

  const greeting =
    hero.greeting || "Hello, I'm";

  const roles =
    hero.roles || [
      "Fullstack Developer",
      "MERN Stack Developer",
      "UI Designer",
      "Problem Solver",
    ];

  const bio =
    hero.bio ||
    `I build modern, scalable and high-performance web applications using the MERN stack and modern technologies. Passionate about creating beautiful user experiences and solving real-world problems through code.`;

  const resumeUrl =
    hero.resumeUrl ||
    "https://drive.google.com/";

  const profileImg =
    hero.profileImage || profile3;

  const typingSequence = roles.flatMap((role) => [role, 1200]);

  return (
    <section
      id="about"
      className="relative overflow-hidden pt-25 pb-20 md:pt-35 px-[7vw] md:px-[8vw] lg:px-[12vw] bg-[#050414]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-16">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          {/* Small Intro Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-6 backdrop-blur-xl">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available For Work
          </div>

          {/* Greeting */}
          <h2 className="text-xl sm:text-3xl text-gray-300 font-medium mb-3">
            {greeting}
          </h2>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            {name}
          </h1>

          {/* Animated Roles */}
          <div className="text-xl sm:text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={typingSequence}
              speed={50}
              deletionSpeed={25}
              repeat={Infinity}
              wrapper="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
            {bio}
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-5 justify-center lg:justify-start">
            
            {/* Resume */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex text-md items-center gap-3 px-4 md:px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
            >
              Download CV

              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-4 md:px-8 py-4 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-xl text-white hover:bg-purple-500/10 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-5 mt-10">
            {[
              {
                icon: <FaGithub />,
                link: "#",
              },
              {
                icon: <FaLinkedin />,
                link: "#",
              },
              {
                icon: <FaInstagram />,
                link: "#",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[full] lg:w-1/2 flex justify-center lg:justify-end">
          <Tilt
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="relative"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-3xl opacity-30 scale-110"></div>

            {/* Main Image Container */}
            <div className="relative w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[430px] lg:h-[430px] rounded-full p-[5px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
              
              <div className="w-full h-full rounded-full overflow-hidden bg-[#120d25] border border-white/10 backdrop-blur-xl">
                <img
                  src={profileImg}
                  alt={`${name} profile`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-10 top-10 hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#140d2e]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div>
                <h4 className="text-white text-sm font-semibold">
                  2+ Years
                </h4>

                <p className="text-gray-400 text-xs">
                  Experience
                </p>
              </div>
            </div>

            <div className="absolute -right-10 bottom-10 hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#140d2e]/90 border border-pink-500/20 backdrop-blur-xl shadow-xl">
              <div>
                <h4 className="text-white text-sm font-semibold">
                  MERN Stack
                </h4>

                <p className="text-gray-400 text-xs">
                  Specialist
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;