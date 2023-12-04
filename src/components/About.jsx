import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { GrMail } from "react-icons/gr";
import { FaInstagram, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import useAOSInit from "../hooks/useAOSint";

const About = () => {
  useAOSInit();
  return (
    <>
      <div
        className="text-secondary text-[17px] leading-[30px] mx-auto"
        id="about"
      >
        <h2
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className={`uppercase font-semibold mb-8 text-center lg:text-left text-2xl lg:text-xl lg:-mb-20`}
        >
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-40">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h1 className="text-2xl lg:text-3xl">
              <span className="text-4xl">I'm </span>
              <span className="text-3xl lg:text-5xl text-amber-300 font-semibold">
                Mohammad Rafi
              </span>
            </h1>
            <h3 className="text-3xl my-3">
              A{" "}
              <span className="text-[#925EFF] font-bold">
                <Typewriter
                  words={[
                    "Front End Developer",
                    "MERN Stack Developer",
                    "Web Designer",
                    "Web Developer",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-justify p-2 text-lg rounded-lg"
            >
              Accepting the challenge of today's fastest developing industry by
              utilizing all the knowledge, skill, and experience. I'm an expert
              with{" "}
              <span className="technology text-[#925EFF] font-semibold">
                React Js, JavaScript, MongoDB, Node Js, Express JS, REST API,
                HTML5, CSS, Tailwind CSS, Bootstrap, Git, Github, React
                Bootstrap, React Query, npm, Firebase, Daisy UI, Stripe Payment
                Integration
              </span>
              , and Headless UI to create various features for client websites.
              Combine this with my ability to thrive in a collaborative
              environment, and I think that makes me a perfect fit for Frontend
              React Developer.
            </motion.p>
            <motion.div className="flex items-center gap-7 text-4xl mt-5">
              <Link
                to="https://www.linkedin.com/in/mohammad--rafi/"
                className="text-[#48a3ff]"
              >
                <FaLinkedin></FaLinkedin>
              </Link>
              <Link
                to="https://github.com/mrrafi5869"
                className="text-[#43BD55]"
              >
                <FaGithub></FaGithub>
              </Link>
              <Link
                to="https://www.instagram.com/mohammad_____rafi/"
                className="text-[#D61AA8]"
              >
                <FaInstagram></FaInstagram>
              </Link>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mrrafi5869@gmail.com"
                target="blank"
                className="text-[#456AD1]"
              >
                <GrMail></GrMail>
              </a>

              <a
                href="Mohammad-Rafi_MERN-Stack Developer.pdf"
                download="Mohammad-Rafi_MERN-Stack Developer.pdf"
                className="flex items-center gap-2 text-lg border border-[#925EFF] px-[10px] py-[6px] rounded-full cursor-pointer text-white hover:bg-[#925eff] transition-all duration-200"
              >
                Resume <FaDownload></FaDownload>
              </a>
            </motion.div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            src={profile}
            className="rounded-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
