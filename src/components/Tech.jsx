import React from "react";
import "./Tech.css";
import { SectionWrapper } from "../hoc";
import Lottie from "react-lottie";
import animationData from "./desktop.json";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Tech = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div
    variants={fadeIn("", "spring", 0.5, 0.75)}>
      <h1 className="contact-head text-gray-400 text-center lg:text-left mb-4 uppercase">
        I have expertise
      </h1>
      <h1 className="contact-head text-5xl text-center lg:text-left mb-16 font-semibold">
        My Skills
      </h1>
      <div className="skills grid grid-cols-1 lg:grid-cols-3 gap-y-5">
        <div>
          <p className="contact-head text-3xl text-center mt-5 text-blue-500">
            Front End
          </p>
          <div className="skill">
            <div className="skill-name">HTML</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="100%"
                style={{ maxWidth: "100%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">CSS</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="100%"
                style={{ maxWidth: "100%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Bootstrap</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Tailwind CSS</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">JavaScript</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="85%"
                style={{ maxWidth: "85%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-name">React.js</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', maxWidth: '500px' }}>
  <Lottie options={defaultOptions} style={{ width: '100%' }} />
</div>
        <div>
          <p className="contact-head text-3xl text-center mt-5">Back End</p>
          <div className="skill">
            <div className="skill-name">JavaScript</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Vercel</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="95%"
                style={{ maxWidth: "95%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Node.js</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="70%"
                style={{ maxWidth: "70%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Express.js</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="70%"
                style={{ maxWidth: "70%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">MongoDB</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="70%"
                style={{ maxWidth: "70%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">JWT</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="75%"
                style={{ maxWidth: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "skills");
