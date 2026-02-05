import Project from "./subcomponents/Project"
import Finance from "../assets/projects/finance-A.jpg"
import Medi from "../assets/projects/medi-1.jpg"
const Projects = () => {
  return (
    <div className="my-20">
      <div className="text-center mt-4">
        <h2 className="font-bold text-xl">Portfolio</h2>
        <h4 className="text-sm mt-2">Recent Projects</h4>
      </div>

      <div className="flex justify-around p-3 mt-4">
        <a href="" className=" text-gray-500 font-bold p-2 rounded-md">
          All
        </a>
        <a href="" className="text-gray-500 font-bold p-2 rounded-md">
          Frontend
        </a>
        <a href="" className="text-gray-500 font-bold p-2 rounded-md">
          Backend
        </a>
      </div>

      <div className=" flex gap-26 justify-center py-4 ">
       
        <div className="flex flex-col gap-10">
          
          <div className="p-2">
            <Project img={Finance} title="Finance App" />
          </div>
          <div className="p-2">
            <Project img={Finance} title="hi" />
          </div>
        </div>

        <div className=" flex flex-col gap-10">
          <div className="p-2">
            <Project img={Medi} title="Medi App" />
          </div>
          <div className="p-2">
            <Project img={Medi} title="hi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects