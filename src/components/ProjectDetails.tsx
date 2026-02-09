 import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects.ts";

const ProjectDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");

  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return "project not found!";
  return (
    <div className="flex flex-col">
      <div className="flex gap-20  px-4 py-8 mx-6 my-8">
        <img
          src={selectedImage ? selectedImage : project.img}
          alt=""
          className="max-w-150 border border-gray-200 rounded-md"
        />
        <div>
          <h3 className="font-bold text-gray-500">{project.title}</h3>
          <p className="mt-3">{project.description}</p>
          <ul className="flex mt-5  justify-around py-2">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="border border-gray-200 rounded-md px-2 py-1 text-gray-500 text-sm "
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex  justify-between gap-10 mx-10 mt-5">
        {project?.images?.map((p) => (
          <li key={p} onClick={() => setSelectedImage(p)}>
            <img src={p} alt="image" className="w-60" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
