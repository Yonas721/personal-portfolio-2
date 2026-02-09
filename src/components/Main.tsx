import { FiSend } from "react-icons/fi";
import { CiDesktopMouse2 } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import Button from "./Button";
import yonas from "../assets/yonas.jpg";
const Main = () => {
  return (
    <main
      className="flex flex-col-reverse md:flex-row px-4 sm:px-6 py-4 my-8 md:my-12 max-w-[90%] md:max-w-[80%] mx-auto gap-8 md:gap-4 items-center"
      id="home"
    >
      <div className="flex flex-col justify-around items-center gap-6 md:gap-8">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-left text-wrap">
          Yonas Jemberu ✋
        </h1>
        <p className="flex items-center">
          <hr className="w-12 text-gray-500" />
          <p className="ml-2 pb-1">Software Engineer</p>
        </p>

        <p className="text-gray-500 text-sm max-w-[90%] md:max-w-[75%] text-center">
          I am creative software engineer in Addis Ababa,and I'm very passionate
          and dedicated in my work.
        </p>
        <a
          href="https://www.linkedin.com/in/yonas-jemberu-856b352b8/"
          className="flex text-white items-center gap-2 border-2 px-4 py-2 bg-black rounded-xl"
          target="_blank"
        >
          <p>Say Hello</p>
          <FiSend className="self-center" />
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 border rounded-md p-1 mt-4 self-center md:self-start md:ml-20 font-bold"
        >
          <CiDesktopMouse2 />
          <p className="text-sm font-medium">Scroll down</p>
          <FaArrowDown />
        </a>
      </div>

      <img
        src={yonas}
        alt="yonas jemberu's photo"
        className="w-40 h-40 md:w-50 md:h-50 rounded-full"
      />
    </main>
  );
};

export default Main;
