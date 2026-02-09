import BackEndCard from "./subcomponents/BackEndCard";
import FrontEndCard from "./subcomponents/FrontEndCard";

const Skills = () => {
  return (
    <div className="mt-20 md:mt-30 px-4" id="skills">
      <div className="text-center mt-4 ">
        <h2 className="font-bold text-4xl">Skills</h2>
        <h4 className="text-sm mt-2">My technical level</h4>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-around gap-6 mt-10 items-center">
        <FrontEndCard />
        <BackEndCard />
      </div>
    </div>
  );
};

export default Skills;
