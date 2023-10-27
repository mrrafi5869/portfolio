import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { FaBeer, FaDownload } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="text-secondary text-[17px] leading-[30px] mx-auto"
        id="about"
      >
        <h2
          className={`uppercase font-semibold mb-8 text-center lg:text-left text-2xl lg:text-xl lg:-mb-20`}
        >
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-x-40">
          <div>
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
                  <Link to="https://www.linkedin.com/in/mohammad--rafi/" className="text-[#48a3ff]"><FaLinkedin></FaLinkedin></Link>
                  <Link to="https://github.com/mrrafi5869" className="text-[#43BD55]"><FaGithub></FaGithub></Link>
                  <Link to="https://www.instagram.com/mohammad_____rafi/" className="text-[#D61AA8]"><FaInstagram></FaInstagram></Link>
                  <span className="flex items-center gap-2 text-lg border border-[#925EFF] px-3 py-2 rounded-full cursor-pointer text-white hover:bg-[#925eff] transition-all duration-200">Resume <FaDownload></FaDownload></span>
            </motion.div>
          </div>
          <img src={profile} className="rounded-full" alt="" />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
