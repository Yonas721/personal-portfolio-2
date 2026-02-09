import Project from "./subcomponents/Project";
import Finance from "/public/projects/finance-A.jpg";
import Medi from "/public/projects/medi-1.jpg";
import Bel from "/public/projects/bel2.png";
import Game from "/public/projects/game1.png";
const Projects = () => {
  return (
    <div className="my-12 md:my-20 px-4" id="projects">
      <div className="text-center mt-4">
        <h2 className="font-bold text-xl">Portfolio</h2>
        <h4 className="text-sm mt-2">Recent Projects</h4>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-6 md:gap-20 justify-center p-3 mt-4">
        <a
          href=""
          className="text-gray-500 font-bold p-2 px-4 sm:px-6 text-sm sm:text-base border border-gray-300 rounded-md transition duration-1000 delay-150 hover:bg-gray-700 hover:text-white"
        >
          All
        </a>
        <a
          href=""
          className="text-gray-500 font-bold p-2 text-sm sm:text-base border border-gray-300 rounded-md transition duration-1000 delay-150 hover:bg-gray-700 hover:text-white"
        >
          Frontend
        </a>
        <a
          href=""
          className="text-gray-500 font-bold p-2 text-sm sm:text-base border border-gray-300 rounded-md transition duration-1000 delay-150 hover:bg-gray-700 hover:text-white"
        >
          Backend
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto py-4">
        <div className="p-2">
          <Project
            id={1}
            img={Finance}
            title="Fiance Management System"
            alt="finance-app"
          />
        </div>
        <div className="p-2">
          <Project
            img={Medi}
            alt="mediconnect web app"
            id={2}
            title="Mediconnect integrated Healthcare Solution"
          />
        </div>
        <div className="p-2">
          <Project
            img={Bel}
            title="Belhuman Hair Website"
            alt="bel human hair"
            id={3}
          />
        </div>
        <div className="p-2">
          <Project img={Game} title="Video Game Site" alt="finance-app" id={4} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
