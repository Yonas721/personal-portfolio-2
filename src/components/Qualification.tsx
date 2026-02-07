import Education from "./subcomponents/Education";
import { FaGraduationCap } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

const Qualification = () => {
  return (
    <div id="qualifications">
      <div className="text-center mt-26">
        <h2 className="font-bold text-xl">Qualifications</h2>
        <h4 className="text-sm mt-2">My Personal Journey</h4>
      </div>

      <div className="px-4 py-6 ">
        <div className="flex  justify-center gap-40 py-4 text-gray-600">
          <div className="flex items-center gap-2 font-bold">
            <FaGraduationCap />
            Education
          </div>

          <div className="flex items-center gap-2 font-bold">
            <IoBagHandle />
            Experience
          </div>
        </div>

        <div className="flex gap-3  justify-center mt-4 ">
        
          <div className="flex flex-col gap-24 text-wrap">


            <Education
              institute="Lideta Catholic Cathedral School"
              title="High School Diploma"
              time="2017-2018"
            />

            <Education
              institute="Haramaya University"
              title="Bachelor of Science in Software Engineering"
              time="2019-2025"
            />

          </div>

          <div className="relative flex flex-col items-center px-3">
            <div className="bg-gray-600 rounded-full w-2 h-2"></div>

            <div className="bg-gray-600  w-0.5 h-20"></div>

            <div className="bg-gray-600 rounded-full w-2 h-2"></div>

            <div className="bg-gray-600  w-0.5 h-20"></div>

            <div className="bg-gray-600 rounded-full w-2 h-2"></div>

            <div className="bg-gray-600  w-0.5 h-20"></div>

            <div className="bg-gray-600 rounded-full w-2 h-2"></div>
            <div className="bg-gray-600  w-0.5 h-20"></div>

   
          </div>

          <div className="flex flex-col gap-12">
            <div className="mt-20">
              <Education
                institute="Kuraz Technologies"
                title="Laravel-Backend(Internship)"
                time="Feb 2024-Aug 2024"
              />
            </div>
            <div className="mt-12">
              <Education
                institute="Tikus P.L.C"
                title="Fullstack Developer(Full-time)"
                time="June 2025-Present"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
