import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Irgib from "../assets/irgib.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-3 my-4 mx-4 md:mx-8 lg:mx-16 relative">
      <a href="#home">
        <h1 className="w-12 px-2 py-1">
          <img src={Irgib} alt="yonas's logo" />
        </h1>
      </a>

      {/* Hamburger button - visible on mobile */}
      <button
        className="md:hidden text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Nav links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-6 md:gap-4 px-2 text-sm items-center
        fixed md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto
        bg-white md:bg-transparent justify-center z-40 transition-all`}
      >
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
