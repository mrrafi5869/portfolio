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
