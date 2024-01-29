import { skills, tools } from "../constants";
import { SectionWrapper } from "../hoc";
import useAOSInit from "../hooks/useAOSint";
const Tech = () => {
  useAOSInit();
  return (
    <div id="skills">
      <div className="mb-20">
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="contact-head text-gray-400 text-center lg:text-left mb-4 uppercase"
        >
          I have expertise
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="contact-head text-5xl text-center lg:text-left mb-6 font-semibold"
        >
          My Skills
        </h1>
        <div
          data-aos="fade-bottom"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5"
        >
          {skills.map((skill) => (
            <div
              className="w-[180px] md:w-[190px] lg:w-[210px] xl:w-[235px] h-[105px] flex flex-col justify-center items-center gap-y-3 transition-all duration-300 hover:border-green-700 hover:shadow-md hover:shadow-teal-400 hover:scale-105 cursor-pointer rounded-tl-[2rem] rounded-br-[2rem]"
              style={{
                background:
                  "linear-gradient(to right, rgba(43, 151, 235, 0.6), rgba(96, 104, 240, 0.5))", // sky to purple gradient
              }}
            >
              <img
                data-aos="fade-bottom"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                src={skill.img}
                className="w-14 h-12"
                alt=""
              />
              <p
                data-aos="fade-bottom"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="contact-head text-gray-400 text-center lg:text-left mb-4 uppercase"
        >
          Tools I Use
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="contact-head text-5xl text-center lg:text-left mb-6 font-semibold"
        >
          Tools
        </h1>
        <div
          data-aos="fade-bottom"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5"
        >
          {tools.map((tool) => (
            <div
              className="w-[180px] md:w-[190px] lg:w-[210px] xl:w-[235px] h-[105px] flex flex-col justify-center items-center gap-y-3 transition-all duration-300 hover:border-green-700 hover:shadow-md hover:shadow-teal-400 hover:scale-105 cursor-pointer rounded-tl-[2rem] rounded-br-[2rem]"
              style={{
                background:
                  "linear-gradient(to right, rgba(43, 151, 235, 0.6), rgba(96, 104, 240, 0.5))", // sky to purple gradient
              }}
            >
              <img
                data-aos="fade-bottom"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                src={tool.img}
                className="w-14 h-12"
                alt=""
              />
              <p
                data-aos="fade-bottom"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
