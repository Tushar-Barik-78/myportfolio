// import { TypeAnimation } from "react-type-animation";
// import profile3 from "../../assets/profile3.png";
// import Tilt from "react-parallax-tilt";
// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-16 md:mt-20 lg:mt-24"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-5">
//         {/* Left side code  */}
//         <div className="md:w-1/2 text-center  md:text-left mt-8 md:mt-0">
//           {/* Greetings */}
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
//             Hii, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
//             Tushar Barik
//           </h2>
//           {/* Skills heading with typing effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>

//             <TypeAnimation
//               sequence={[
//                 "Fullstack Developer",
//                 1000,
//                 "App Developer",
//                 1000,
//                 "Coder",
//                 1000,
//                 "Problem Solver",
//                 1000,
//               ]}
//               speed={40}
//               deletionSpeed={20}
//               repeat={Infinity}
//               wrapper="span"
//               style={{ color: "#8245ec", fontWeight: "600" }}
//             />
//           </h3>

//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             I am a full-stack developer with over 2 years of experience in
//             building scalable web applications. Skilled in both front-end and
//             back-end development, I specialize in the MERN stack and other
//             modern technologies to create seamless user experiences and
//             efficient solutions.
//           </p>
//           {/* Resume button */}
//           <a
//             href="https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: "linear-gradient(90deg, #8245ec,#a855f7)",
//               boxShadow: "0 0 2px #8245ec , 0 0 2px #8245ec,0 0 40px #8245ec",
//             }}
//           >
//             DOWNLOAD CV
//           </a>
//         </div>

//         {/* Right side code */}
//         <div className="md:w-1/2 flex justify-center items-center md:justify-end">
//           <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-500 rounded-full" 
//             scale={1.02}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             transitionSpeed={1000}
//           >
//             <img
//               src={profile3}
//               alt="Profile photo"
//               className="w-full h-full rounded-full rotate-y-180 object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
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
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
// Fallback image — agar DB mein profileImage nahi hai tab ye use hoga
import profile3 from "../../assets/profile3.png";

const About = () => {
  // usePortfolio hook se data lo — App.jsx mein ek baar fetch hua tha
  const { portfolio, loading } = usePortfolio();

  // Data load ho raha hai — loading state
  if (loading) {
    return (
      <section className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-16 md:mt-20 lg:mt-24">
        <div className="animate-pulse flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <div className="h-10 bg-gray-700 rounded w-3/4"></div>
            <div className="h-14 bg-gray-700 rounded w-full"></div>
            <div className="h-8 bg-gray-700 rounded w-1/2"></div>
            <div className="h-24 bg-gray-700 rounded w-full"></div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gray-700"></div>
          </div>
        </div>
      </section>
    );
  }

  // DB se hero data lo, agar nahi mila to default values use karo
  const hero = portfolio?.hero || {};
  const name       = hero.name       || "Tushar Barik";
  const greeting   = hero.greeting   || "Hi, I am";
  const roles      = hero.roles      || ["Fullstack Developer", "Designer","Problem Solver","Tech Enthusiast"];
  const bio        = hero.bio        || `I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.`;
  const resumeUrl  = hero.resumeUrl  || "https://drive.google.com/file/d/1cFqxcrKFJfnJXrJXmE9HnmO18bdVKJl2/view";
  // profileImage Cloudinary URL hoga, nahi to local image
  const profileImg = hero.profileImage || profile3;

  // TypeAnimation ke liye roles ko sequence format mein convert karo
  // ["Role1", "Role2"] → ["Role1", 1000, "Role2", 1000]
  const typingSequence = roles.flatMap((role) => [role, 1000]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-16 md:mt-20 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-5">

        {/* ---- Left side ---- */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

          {/* Greeting — DB se aata hai */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            {greeting}
          </h1>

          {/* Name — DB se aata hai */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            {name}
          </h2>

          {/* Typing animation — DB se roles array aata hai */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={typingSequence}
              speed={40}
              deletionSpeed={20}
              repeat={Infinity}
              wrapper="span"
              style={{ color: "#8245ec", fontWeight: "600" }}
            />
          </h3>

          {/* Bio — DB se aata hai */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            {bio}
          </p>

          {/* Resume button — DB se URL aata hai */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* ---- Right side — Profile image ---- */}
        <div className="md:w-1/2 flex justify-center items-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-500 rounded-full"
            scale={1.02}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
          >
            {/* src mein Cloudinary URL ya local image — dono kaam karega */}
            <img
              src={profileImg}
              alt={`${name} profile photo`}
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;