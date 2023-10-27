import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Typewriter } from "react-simple-typewriter";

const Blog = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] text-center`}
      >
        <motion.div variants={textVariant()}>
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
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "blog");
