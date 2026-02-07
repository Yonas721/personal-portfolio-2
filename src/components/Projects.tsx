import Project from "./subcomponents/Project"
import Finance from "../assets/projects/finance-A.jpg"
import Medi from "../assets/projects/medi-1.jpg"
const Projects = () => {
  return (
    <div className="my-20" id="projects">
      <div className="text-center mt-4">
        <h2 className="font-bold text-xl">Portfolio</h2>
        <h4 className="text-sm mt-2">Recent Projects</h4>
      </div>

      <div className="flex gap-20 justify-center p-3 mt-4 ">
        <a
          href=""
          className=" text-gray-500 font-bold p-2 px-6   border border-gray-300 rounded-md transition duration-1000 delay-150 hover:bg-gray-700 hover:text-white "
        >
          All
        </a>
        <a
          href=""
          className="text-gray-500 font-bold p-2  border border-gray-300 rounded-md transition duration-1000 delay-150 hover:bg-gray-700 hover:text-white"
        >
          Frontend
        </a>
        <a
          href=""
          className="text-gray-500 font-bold p-2  border border-gray-300 rounded-md transition duration-1000 delay-150 hover:bg-gray-700 hover:text-white"
        >
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