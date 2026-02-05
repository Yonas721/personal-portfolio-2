import type { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Button = ({ text, icon }: Props) => {
  return (
    <button className="flex text-white items-center gap-2 border border-2 px-2 py-1 bg-black rounded-lg">
      {text}
      {icon}
    </button>
  );
};

export default Button;
