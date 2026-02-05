import { MdOutlineDateRange } from "react-icons/md";

interface Props {
  title: string;
  institute: string;
  time: string;
}
const Education = ({ title, institute, time }: Props) => {
  return (
    <div className="text-gray-700">
      <p className="font-bold">{title}</p>
      <p className="font-medium text-gray-500 ">{institute}</p>
      <p className="font-small flex items-center text-sm mt-3 text-gray-500 gap-2">
        <MdOutlineDateRange />
        {time}
      </p>
    </div>
  );
};

export default Education;
