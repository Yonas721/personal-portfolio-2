import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  img: ReactNode | null;
  title: string;

  alt: string;
}
const Project = ({ img, title, id, alt }: Props) => {
  return (
    <div className="rounded-md bg-white border border-gray-200">
      <img className="w-full" src={img} alt={alt} />
      <p className="font-bold text-sm mt-2 ml-2">{title}</p>

      <Link to={`/projects/${id}`}>
        <p className="flex items-center gap-2 w-20  text-sm justify-center text-gray-400 mt-4">
          Demo
          <FaArrowRight />
        </p>
      </Link>
    </div>
  );
};

export default Project;
