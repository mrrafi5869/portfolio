// Resume.js
import React from "react";
import "./PreviousWork.css";
import { SectionWrapper } from "../hoc";
import useAOSInit from "../hooks/useAOSint";

const PreviousWork = () => {
  useAOSInit();
  return (
    <div>
      <h3
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true" className="contact-head text-gray-400 text-center lg:text-left mb-4 uppercase">
        EXPERIENCE
      </h3>
      <h3 data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true" className="contact-head text-5xl text-center lg:text-left mb-16 font-semibold">
        Previously I Worked
      </h3>
      <div class="container">
        <main class="row">
          <section class="col">
            <div class="contentsTwo">
              <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
                class="box"
                style={{
                  background:
                    "linear-gradient(to right, rgba(43, 151, 235, 0.6), rgba(96, 104, 240, 0.5))",
                }}
              >
                <h4>17 February 2024 - Running</h4>
                <h6>Pristren</h6>
                <h3>MERN Stack Developer</h3>
                <p>
                As a MERN Stack Developer at Pristren, I played an integral role within a dynamic team of developers, collectively striving for excellence in every project we undertook. Collaborating closely with two other developers, I contributed my expertise in React.js, along with proficiency in MongoDB, Express.js, and Node.js, Mongoose, Redux, to deliver robust and scalable web applications. By working closely with my teammates, I ensured that our projects were completed efficiently and to the highest standards of quality. My dedication to code quality, problem-solving abilities, and effective communication skills were instrumental in our team's success and the timely delivery of projects.
                </p>
                <ul className="ml-5 mt-3">
                  <li className="list-disc">
                    
Crafted two robust web applications and a comprehensive portfolio, leading the design and development process with a focus on UI and Performance. Proficiently analyzed and processed data to meet the diverse requirements of clients.
                  </li>
                  <li className="list-disc">
                    
While primarily focused on frontend development, I also contributed to backend tasks and utilized Redux for efficient state management.
                  </li>
                  <li className="list-disc">
                  Implemented an intriguing feature during my tenure by enabling users to seamlessly upload pictures, videos, and documents onto Cloudinary, enhancing the functionality and user experience of the applications.
                  </li>
                </ul>
              </div>
              <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
                class="box"
                style={{
                  background:
                    "linear-gradient(to right, rgba(43, 151, 235, 0.6), rgba(96, 104, 240, 0.5))",
                }}
              >
                <h4>28 Nov 2023 - 29 February 2024</h4>
                <h6>Rework AI</h6>
                <h3>React JS Developer</h3>
                <p>
                  As a React.js Developer at Rework AI, played a key role in the
                  development and leadership of a highperforming team,
                  successfully delivering four projects with a focus on UI and
                  unit testing. Contributed significantly to the growth of this
                  Indian-based company while actively managing and coordinating
                  the team for efficient project execution.
                </p>
                <ul className="ml-5 mt-3">
                  <li className="list-disc">
                    Crafted 4 sophisticated web applications and a comprehensive
                    portfolio with UI and Unit Testing, adept at analyzing and
                    processing data for diverse clients.
                  </li>
                  <li className="list-disc">
                    Conducted unit and load testing for high-profile
                    customer-facing applications, which reduced system failure
                    by 70%
                  </li>
                  <li className="list-disc">
                    Maintained and developed new features on existing apps,
                    including an option to upload pictures and respond to users'
                    comments
                  </li>
                </ul>
              </div>

              <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
                class="box"
                style={{
                  background:
                    "linear-gradient(to right, rgba(43, 151, 235, 0.6), rgba(96, 104, 240, 0.5))", // sky to purple gradient
                }}
              >
                <h4>01 Oct 2023 - 30 Nov 2023</h4>
                <h6>ZettaByte Plus</h6>
                <h3>Full-Stack Developer</h3>
                <p>
                  As a Full Stack Developer at ZettaBytePlus, I seamlessly
                  blended technical expertise with effective team collaboration,
                  successfully building more than 6 functional projects. My
                  active knowledge-sharing with the UI/UX team contributed
                  significantly to project success, fostering a collaborative
                  and innovative work environment
                </p>

                <ul className="ml-5 mt-3">
                  <li className="list-disc">
                    Spearheaded diverse projects as a Full Stack Developer,
                    demonstrating proficiency in both Front-End and Back-End
                    development.
                  </li>
                  <li className="list-disc">
                    Developed full-stack applications across various platforms
                    using the latest industry-adopted technologies and
                    frameworks
                  </li>
                  <li className="list-disc">
                    Developed more than 6 highly functional web applications to
                    analyze and process data for various clients
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SectionWrapper(PreviousWork, "experience");
