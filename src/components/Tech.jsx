import React from "react";
import "./Tech.css";
import { SectionWrapper } from "../hoc";
import Lottie from "lottie-react";
import animationData from "./desktop.json";
import useAOSInit from "../hooks/useAOSint";
const Tech = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useAOSInit()
  return (
    <div>
      <h1 data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="contact-head text-gray-400 text-center lg:text-left mb-4 uppercase">
        I have expertise
      </h1>
      <h1 data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="contact-head text-5xl text-center lg:text-left mb-16 font-semibold">
        My Skills
      </h1>
      <div className="skills grid grid-cols-1 lg:grid-cols-3 gap-y-5">
        <div data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
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
        <Lottie data-aos="fade-down"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" animationData={animationData} loop={true} />
</div>
        <div data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
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
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
