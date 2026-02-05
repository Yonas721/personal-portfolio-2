import type { ReactNode } from "react";


interface Props{
    icon:ReactNode;
    title:string;
    count:string;
}
const AboutCards = ({icon,title,count}:Props) => {
  return (
    <div className="flex flex-col items-center  gap-1.5 p-2 border border-gray-200 rounded-md">
        {icon}
        <p className='text-sm'>{title}</p>
        <p className="text-xs">{count}</p>

    </div>
  )
}

export default AboutCards