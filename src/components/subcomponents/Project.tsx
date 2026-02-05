import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  img: ReactNode | null;
  title: string;
}
const Project = ({ img, title }: Props) => {
  return (
    <div className="rounded-md bg-white border border-gray-200">
      <img className="w-85" src={img} alt="image" />
      <p className="font-bold text-sm mt-2 ml-2">{title}</p>

      <a href="#">
        <p className="flex items-center gap-2 w-20  text-sm justify-center text-gray-400 mt-4">
          Demo
          <FaArrowRight />
        </p>
      </a>
    </div>
  );
};

export default Project;
