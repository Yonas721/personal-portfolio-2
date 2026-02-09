import { MdOutlineDateRange } from "react-icons/md";

interface Props {
  title: string;
  institute: string;
  time: string;
}
const Education = ({ title, institute, time }: Props) => {
  return (
    <div className="text-gray-700">
      <p className="font-bold text-sm sm:text-base">{title}</p>
      <p className="font-medium text-gray-500 text-xs sm:text-base">{institute}</p>
      <p className="font-small flex items-center text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 gap-2">
        <MdOutlineDateRange />
        {time}
      </p>
    </div>
  );
};

export default Education;
