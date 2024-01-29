import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import useAOSInit from "../hooks/useAOSint";
const Tech = () => {
  useAOSInit();
  return (
    <div>
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
        className="contact-head text-5xl text-center lg:text-left mb-16 font-semibold"
      >
        My Skills
      </h1>
      <div data-aos="fade-bottom"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-5">
        {skills.map((skill) => (
          <div
            className="bg-[#1D1836] md:w-[190px] lg:w-[210px] xl:w-[235px] h-[127px] flex flex-col justify-center items-center gap-y-3 transition-all duration-300 hover:border-green-700 hover:shadow-md hover:shadow-teal-400 hover:scale-105 cursor-pointer"
          >
            <img data-aos="fade-bottom"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true" src={skill.img} className="w-14 h-14" alt="" />
            <p data-aos="fade-bottom"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
