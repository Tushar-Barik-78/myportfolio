// src/components/About/About.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { usePortfolio } from "../../hooks/usePortfolio.jsx";
import profile3 from "../../assets/Profile3.png";

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

  const name = hero.name || "Tushar Barik";

  const greeting = hero.greeting || "Hello, I'm";

  const roles = hero.roles || [
    "Fullstack Developer",
    "MERN Stack Developer",
    "UI Designer",
    "Problem Solver",
  ];

  const bio =
    hero.bio ||
    `I build modern, scalable and high-performance web applications using the MERN stack and modern technologies. Passionate about creating beautiful user experiences and solving real-world problems through code.`;

  const resumeUrl = hero.resumeUrl || "https://drive.google.com/";

  const profileImg = hero.profileImage || profile3;

  const typingSequence = roles.flatMap((role) => [role, 1200]);

  return (
    <section
      id="about"
      className="relative overflow-hidden pt-25 pb-20 md:pt-35 px-[7vw] md:px-[8vw] lg:px-[12vw] bg-[#050414]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: ` linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-16"
      >
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
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            {name}
          </motion.h1>

          {/* Animated Roles */}
          <div className="text-xl sm:text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={typingSequence}
              speed={50}
              deletionSpeed={25}
              repeat={Infinity}
              wrapper="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white"
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
                link: "https://github.com/Tushar-Barik-78",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/tushar-barik/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/tushar_barik_06/",
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
            <motion.div className="relative w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full p-[6px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_100px_rgba(59,130,246,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#120d25] border border-white/10 backdrop-blur-xl">
                <img
                  src={profileImg}
                  alt={`${name} profile`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute inset-[-15px] rounded-full border border-cyan-400/20 animate-spin [animation-duration:12s]"></div>

              <div className="absolute inset-[-30px] rounded-full border border-blue-500/10 animate-spin [animation-duration:20s] [animation-direction:reverse]"></div>
            </motion.div>

            {/* Floating Cards */}
            <div className="absolute -left-10 top-10 hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#08111f] border border-cyan-500/20 backdrop-blur-xl shadow-xl z-10">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div>
                <h4 className="text-white text-sm font-semibold">1+ Years</h4>

                <p className="text-gray-400 text-xs">Experience</p>
              </div>
            </div>

            <div className="absolute -right-10 bottom-10 hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#08111f] border border-blue-500/20 z-10 backdrop-blur-xl shadow-xl">
              <div> 
                <h4 className="text-white text-sm font-semibold">MERN Stack</h4>

                <p className="text-gray-400 text-xs">Specialist</p>
              </div>
            </div>
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
