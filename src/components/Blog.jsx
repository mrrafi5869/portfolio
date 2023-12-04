import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Typewriter } from "react-simple-typewriter";
import useAOSInit from "../hooks/useAOSint";

const Blog = () => {
  useAOSInit();
  return (
    <div data-aos="fade-down"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] text-center`}
      >
        <div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText}`}>Blog</h1>
        <p className="text-2xl text-gray-400 mt-10">
          <Typewriter
            words={[
              "Coming Soon...",
              "Coming Soon...",
              "Coming Soon...",
              "Coming Soon...",
            ]}
            loop={5}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "blog");
