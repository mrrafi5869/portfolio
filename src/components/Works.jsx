import React, { useState } from "react";
import "./Works.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import useAOSInit from "../hooks/useAOSint";
import { FaGithub, FaLink  } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  stack,
  technologies,
  liveLink,
  clientLink,
  serverLink,
}) => {
  useAOSInit();

  return (
    <div
      id="projects"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      className="bg-[#30285e] p-5 rounded-2xl w-[370px] md:w-[400px] 2xl:w-[460px] mx-auto relative"
    >
      <div className="h-[550px] text-center">
        <h4 className="text-3xl font-semibold">{name}</h4>
        <p className="text-xl font-semibold">({stack})</p>
        <div className="h-[120px] flex justify-center items-center my-4">
          <div className="flex flex-wrap justify-center items-center gap-2 bg-black border border-blue-800 p-2 rounded-md">
            {technologies.map((technology) => (
              <p className="border border-sky-500 px-2 rounded-md">
                {technology}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`box w-full h-[200px] rounded-lg box${index + 1}`}
        ></div>
        <div className="flex justify-center items-center gap-4 mt-14">
          <Link to={clientLink}
            className="w-[110px] px-2 py-2 rounded-md uppercase hover:scale-110 transition-all duration-200 flex justify-center items-center gap-x-2"
            style={{
              background:
                "linear-gradient(to right, #2B97EB, rgb(96, 104, 240))", // sky to purple gradient
            }}
          >
            <FaGithub></FaGithub>
            Client
          </Link>
          <Link to={liveLink}
            className="w-[110px] px-2 py-2 rounded-md uppercase hover:scale-110 transition-all duration-200 flex justify-center items-center gap-x-2"
            style={{
              background:
                "linear-gradient(to right, #F6779B, #E15BE7)", // sky to purple gradient
            }}
          >
            <FaLink></FaLink>
            Live
          </Link>
          {
            serverLink && <Link to={serverLink}
            className="w-[110px] px-2 py-2 rounded-md uppercase hover:scale-110 transition-all duration-200 flex justify-center items-center gap-x-2"
            style={{
              background:
                "linear-gradient(to right, #2B97EB, rgb(96, 104, 240))", // sky to purple gradient
            }}
          >
            <FaGithub></FaGithub>
            Server
          </Link>
          }
          {/* <Link
            to={clientLink}
            class="relative inline-flex items-center justify-start py-2 pl-1 pr-8 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-7 hover:pr-2 bg-gray-50 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-1 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-normal">
              Client Site
            </span>
          </Link>
          <Link
            to={liveLink}
            class="relative inline-flex items-center justify-center px-3 py-1 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease font-normal">
              live Site
            </span>
            <span class="relative invisible">live Site</span>
          </Link>
          {serverLink && (
            <Link
              to={serverLink}
              class="relative inline-flex items-center justify-start py-2 pl-1 pr-8 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-7 hover:pr-2 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-1 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-normal">
                Server Site
              </span>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  const toggleShowAllProjects = () => {
    setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects);
  };
  return (
    <>
      <div data-aos="fade-right">
        <p className={`${styles.sectionSubText}  text-center lg:text-left`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center lg:text-left`}>
          Projects
        </h2>
      </div>

      <div className="w-full flex">
        <div
          data-aos="fade-right"
          className="mt-3 text-secondary text-[17px] lg:text-left text-justify max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-7">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-5 text-center">
        <button
          className="bg-[#4F46E5] hover:bg-[#30285E] text-white font-bold py-2 px-4 rounded hover:scale-110  transition-all duration-200"
          onClick={toggleShowAllProjects}
        >
          {showAllProjects ? "Show Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
