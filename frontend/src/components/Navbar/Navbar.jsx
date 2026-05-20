import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(""); //* this is for colouring active state
  const [isOpen, setIsOpen] = useState(false); //* this is for checking menu bar is open or not in mobile view
  const [isScrolled, setIsScrolled] = useState(false); //*  this is for to check navbar is scrolled or not
  const openBox = useRef();
  // ! check scroll and change navbar bacground
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenBox = (e) => {
      if (openBox.current && !openBox.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOpenBox);
    return () => document.removeEventListener("mousedown", handleOpenBox);
  }, []);

  //! scroll function
  const handelActiveSection = (activeId) => {
    console.log(activeId);

    setActiveSection(activeId);
    setIsOpen(false);

    const section = document.getElementById(activeId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[2vw] lg:px-[12vw] ${
        isScrolled
          ? "bg-[#050414]/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* //* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Tushar</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Barik</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 text-gray-300">
          {menuItems.map((curEle) => {
            return (
              <li
                key={curEle.id}
                className={`hover:text-[#8245ec] ${
                  activeSection === curEle.id ? "text-[#8245ec]" : ""
                }  `}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => handelActiveSection(curEle.id)}
                >
                  {curEle.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Social media accounts */}
        <div className="hidden md:flex space-x-8 md:space-x-5">
          <a
            href="https://github.com/Tushar-Barik-78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#681cec]"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-barik-575886261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6314eb]"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Mobile view Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer hover:text-white"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer hover:text-white"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}

      {isOpen && (
        <div
          ref={openBox}
          className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#010414]/90 backdrop-filter shadow-md backdrop-blur-lg z-50 rounded-lg "
        >
          <ul className="flex flex-col items-center space-y-5 py-4 text-gray-300 ">
            {/* navbar items */}
            {menuItems.map((item) => {
              return (
                <a
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button
                    className="cursor-pointer"
                    onClick={() => handelActiveSection(item.id)}
                  >
                    {item.label}
                  </button>
                </a>
              );
            })}
            {/* Social media icons */}
            <div className="flex space-x-5">
              <a
                href="https://github.com/Tushar-Barik-78"
                target="_blank"
                rel="noopener"
                className="text-gray-300 text-3xl hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-barik-575886261/"
                target="_blank"
                rel="noopener"
                className="text-gray-300 text-3xl hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
