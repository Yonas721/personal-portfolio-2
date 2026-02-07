import BackEndCard from "./subcomponents/BackEndCard";
import FrontEndCard from "./subcomponents/FrontEndCard";

const Skills = () => {
  return (
    <div className="mt-30" id="skills">
      <div className="text-center mt-4 ">
        <h2 className="font-bold text-4xl">Skills</h2>
        <h4 className="text-sm mt-2">My technical level</h4>
      </div>

      <div className="flex justify-around mt-10">
        <FrontEndCard />
        <BackEndCard />
      </div>
    </div>
  );
};

export default Skills;
