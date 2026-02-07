import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
interface Props {
  icon: ReactNode;
  title: string;
  address: string;
}

const SocialMedia = ({ icon, address, title }: Props) => {
  const addressModified = address.startsWith("mailto")
    ? `mailto:${address}`
    : address;

  return (
    <a
      href={addressModified}
      target="_blank"
      className="bg-white border border-gray-200 flex flex-col items-center p-6 max-w-50 rounded-md "
    >
      <div>{icon}</div>
      <div className="font-bold text-base">{title}</div>
      {addressModified.startsWith("mailto") ? (
               <p className="font-base text-xs mb-4 text-gray-400">jemberuyonas01@gmail.com</p>
      ) : (
""
      )}
      <div className="text=gray-500 text-sm mt-2 f">
        <div className="flex items-center gap-1  text-gray-500">
          Write me
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </a>
  );
};

export default SocialMedia;
