import { MdVerified } from "react-icons/md";

interface Props {
  title: string;
  level: string;
}
const SingleSkill = ({ title, level }: Props) => {
  return (
    <div className="flex flex-col p-3">
      <div className="flex  items-center gap-2">
        <MdVerified />
        <p className="font-medium ">{title}</p>
      </div>

      <p className="text-sm text-center text-gray-400">{level}</p>
    </div>
  );
};

export default SingleSkill;
