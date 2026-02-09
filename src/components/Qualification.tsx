import Education from "./subcomponents/Education";
import { FaGraduationCap } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

const Qualification = () => {
  return (
    <div id="qualifications" className="px-4">
      <div className="text-center mt-16 md:mt-26">
        <h2 className="font-bold text-xl">Qualifications</h2>
        <h4 className="text-sm mt-2">My Personal Journey</h4>
      </div>

      <div className="px-2 md:px-4 py-6">
        <div className="flex justify-center gap-10 sm:gap-20 md:gap-40 py-4 text-gray-600">
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
            <FaGraduationCap />
            Education
          </div>

          <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
            <IoBagHandle />
            Experience
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3 justify-center mt-4">

          <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 text-wrap max-w-[35%] sm:max-w-none">

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

          <div className="relative flex flex-col items-center px-1 sm:px-3">
            <div className="bg-gray-600 rounded-full w-2 h-2"></div>
            <div className="bg-gray-600  w-0.5 h-14 sm:h-20"></div>
            <div className="bg-gray-600 rounded-full w-2 h-2"></div>
            <div className="bg-gray-600  w-0.5 h-14 sm:h-20"></div>
            <div className="bg-gray-600 rounded-full w-2 h-2"></div>
            <div className="bg-gray-600  w-0.5 h-14 sm:h-20"></div>
            <div className="bg-gray-600 rounded-full w-2 h-2"></div>
            <div className="bg-gray-600  w-0.5 h-14 sm:h-20"></div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-12 max-w-[35%] sm:max-w-none">
            <div className="mt-12 sm:mt-20">
              <Education
                institute="Kuraz Technologies"
                title="Laravel-Backend(Internship)"
                time="Feb 2024-Aug 2024"
              />
            </div>
            <div className="mt-6 sm:mt-12">
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
