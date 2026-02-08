import { useParams } from "react-router-dom";
import { projects } from "../data/projects.ts";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return "project not found!";
  return (
    <div className="flex flex-col">
      <div className="flex gap-20 border border-red-500 px-4 py-8 mx-6 my-8">
        <img
          src={project.img}
          alt=""
          className="max-w-150 border border-gray-200 rounded-md"
        />
        <div>
          <h3 className="font-bold text-gray-500">{project.title}</h3>
          <p  className="mt-3">{project.description}</p>
          <ul className="flex mt-5 border border-red-500 justify-around py-2">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="border border-gray-300 rounded-md px-2 py-1 text-gray-500 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
