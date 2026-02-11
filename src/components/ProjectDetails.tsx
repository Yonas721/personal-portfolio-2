import { motion } from "framer-motion";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { projects } from "../data/projects.ts";

const ProjectDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");

  const project = projects.find((p) => p.id === parseInt(id ?? ""));
  if (!project) return "project not found!";
  return (
    <div className="flex flex-col px-4 sm:px-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 px-2 md:px-4 py-6 md:py-8 mx-2 md:mx-6 my-4 md:my-8">
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-500 mb-3 mx-2 md:mx-4 text-lg">
            {project.title}
          </h3>
          <img
            src={selectedImage ? selectedImage : project.img}
            alt=""
            className="w-full md:max-w-400 border border-gray-200 rounded-md"
          />
        </div>

        <div>
          <h3 className="font-bold text-gray-500">My Role</h3>
          <p className="mt-3 text-gray-500 text-sm/7">{project.description}</p>

          <ul className="flex flex-wrap mt-5 gap-2 justify-start md:justify-around py-2">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="border border-gray-200 rounded-md px-2 py-1 text-gray-500 text-sm "
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2 mt-5">
              <p className="font-bold text-gray-500">Github Repo:</p>
              <a
                href={project.github}
                target="_blank"
                className="border border-gray-200 px-2 py-1 text-gray-500 w-30 rounded-md flex gap-2"
              >
                <p>Click here</p>
                <span className="self-center mt-1"><IoEyeOutline /></span>
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              {project.view ? (
                <>
                  <p className="font-bold text-gray-500">Live Demo:</p>
                  <a
                    href={project.view}
                    target="_blank"
                    className="border border-gray-200 px-2 py-1 text-gray-500 w-30 rounded-md flex gap-2"
                  >
                    <p>Click here</p>
                    <span className="self-center mt-1"><IoEyeOutline /></span>
                  </a>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between gap-4 md:gap-10 mx-4 md:mx-10 mt-2 overflow-hidden">
        {project?.images?.map((p, index) => (
          <motion.li
            key={p}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            onClick={() => setSelectedImage(p)}
            className="cursor-pointer"
          >
            <img src={p} alt="image" className="w-full md:w-60" />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
