import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import SocialMedia from "./subcomponents/SocialMedia";
import { FiSend } from "react-icons/fi";
import { CiCircleChevUp } from "react-icons/ci";
const Contact = () => {
  return (
    <div className="mt-30 px-4" id="contact">
      <div className="text-center mt-26">
        <h2 className="font-bold text-xl">Contact</h2>
        <h4 className="text-sm mt-2">Get in Touch</h4>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-40 ml-40  mt-10">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-8">
          <p className="text-lg font-medium">Talk to me</p>
          <SocialMedia
            icon={<MdMarkEmailRead />}
            title="Email"
            address="mailto:jemberuyonas01@gmail.com"
          />
          <SocialMedia
            icon={<FaLinkedin />}
            title="Linkedin"
            address="https://www.linkedin.com/in/yonas-jemberu-856b352b8/"
          />
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2">
          <p className="text-lg font-medium mb-6">
            Write me about your project
          </p>

          <form className="flex flex-col gap-6 mt-5 rounded-lg px-6 py-8 md:px-10 md:py-12 shadow-sm">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all max-w-80"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-200 pointer-events-none"
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all max-w-80"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-200 pointer-events-none"
              >
                Email
              </label>
            </div>

            {/* Project Field */}
            <div className="relative">
              <textarea
                name="project"
                id="project"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent transition-all resize-y min-h-[120px] max-w-80"
                placeholder=" "
              />
              <label
                htmlFor="project"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all duration-200 pointer-events-none"
              >
                Project Details
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex gap-1 items-center justify-center mt-4 px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-colors duration-200"
            >
              <p>Send Message </p>
              <FiSend />
            </button>
          </form>
        </div>

        <div className="self-end mb-15">
          <a href="#home" className="font-bold text-3xl ">
            <CiCircleChevUp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
