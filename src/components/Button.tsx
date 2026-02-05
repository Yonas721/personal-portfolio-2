import type { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Button = ({ text, icon }: Props) => {
  return (
    <button className="flex text-white items-center gap-2 border-2 px-4 py-2 bg-black rounded-xl">
      {text}
      {icon}
    </button>
  );
};

export default Button;
