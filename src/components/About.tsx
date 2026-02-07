import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

import Button from "./Button";
import main from "../assets/main.jpg";
import AboutCards from "./subcomponents/AboutCards";
import { TbMedal } from "react-icons/tb";
const About = () => {
  return (
    <div className="mt-40 mx-4" id="about">


      <div className="text-center mt-4 ">
        <h2 className="font-bold text-xl">About Me</h2>
        <h4 className="text-sm mt-2">My introduction</h4>
      </div>

      <div className="flex gap-3 my-8 px-10">
        <img
          src={main}
          alt="yonas jemberu's photo"
          className="ml-4 h-80 self-center rounded-md"
        />

        <div className="flex flex-col gap-8 p-4">
          <div className="flex justify-around ">
            <AboutCards title="Exprience" count="8+ years" icon={<TbMedal />} />
            <AboutCards
              title="Completed"
              count="40+ projects"
              icon={<MdOutlineIncompleteCircle />}
            />
            <AboutCards
              title="Support"
              count="online  24/7"
              icon={<BiSupport />}
            />
          </div>

          <p className="max-w-[60%] text-center self-center text-sm/6 text-gray-400 font-medium">
            Fullstack developer,i create web applications using React,and
            laravel, I have experience in building responsive and user-friendly
            interfaces, as well as developing robust backend systems. I am
            passionate about learning new technologies and staying up-to-date
            with industry trends. I am a team player and enjoy collaborating
            with others to create innovative solutions.
          </p>

          <a href="#" className="mt-8 ml-25">
            <Button text="Download CV" icon={<IoDocumentAttachOutline />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
