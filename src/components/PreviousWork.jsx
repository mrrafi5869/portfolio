// Resume.js
import React from "react";
import "./PreviousWork.css";
import { SectionWrapper } from "../hoc";

const PreviousWork = () => {
  return (
    <div>
      <h3 className="contact-head text-gray-400 text-center lg:text-left mb-4 uppercase">
        EXPERIENCE
      </h3>
      <h3 className="contact-head text-5xl text-center lg:text-left mb-16 font-semibold">
        Previously I Worked
      </h3>
      <div class="container">
        <main class="row">
          <section class="col">
            <div class="contentsTwo">
              <div
                class="box"
                style={{
                  background:
                    "linear-gradient(to right, rgba(43, 151, 235, 0.6), rgba(96, 104, 240, 0.5))",
                }}
              >
                <h4>28 Nov 2023 - Running</h4>
                <h6>Rework AI</h6>
                <h3>React JS Developer</h3>
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

              <div
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
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SectionWrapper(PreviousWork, "experience");
