import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import ProfileIcon from "../assets/profile.jpg";
import { Button } from "../ui";
import { Link } from "react-router-dom";
import { useToastContext } from "../context";

export const CVTemplate = () => {
  const { infoMessage } = useToastContext();
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img src={ProfileIcon} alt="profile_pic" />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">Sylvain Derory</p>
              <p className="regular">Front End Engineer</p>
            </div>
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                <div className="data">Nantes France</div>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <div className="data">
                  <a href="mailto: career.sylvain@gmail.com">
                    career.sylvain@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">profile</p>
            </div>
            <ul>
              <li>FrontEnd Web Engineer, 5 years of experience,</li>
              <li>
                Master in Sciences, Major in Electronic and Industrial Software
                Engineering
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                <div className="data">
                  <a
                    href="https://linkedin.com/in/sylvain-derory-0398a1184"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/sylvain-derory
                  </a>
                </div>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faGithub} />
                <div className="data">
                  <a
                    href="https://github.com/JeanPec"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/JeanPec
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Work Experience</p>
            <Link
              to={"/files/CV_Sylvain_Derory_Online.pdf"}
              target="_blank"
              download
            >
              <Button
                className="downloadButton"
                onClick={() =>
                  infoMessage("Thank you for downloading my Resume")
                }
              >
                Download Resume
              </Button>
            </Link>
          </div>
          <ul>
            <li>
              <div className="date">Sep 2024</div>
              <div className="info">
                <p className="semi-bold">
                  Frontend Web Engineer at VECTICE : Nantes, France
                </p>
                <ul>
                  <li>
                    Created Google-like Comments, with mention feature on our
                    Documentation using Lexical library
                  </li>
                  <li>
                    Added LLM-Prompt feature to generate automatically
                    documentation from Users Projects
                  </li>
                  <li>
                    Created Lightbox component to showcase previews from
                    documents, notebook, CSV and Images
                  </li>
                  <li>
                    Adopted UX Principles, participated in discussion to provide
                    the best solution to reduce cognitive load, simplify the
                    User Experience
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="date">Feb 2022 - Sep 2023</div>
              <div className="info">
                <p className="semi-bold">
                  Frontend Web Engineer at VECTICE : San Francisco, United
                  States
                </p>
                <ul>
                  <li>
                    Web application development with Typescript React on a Saas
                    solution to manage Data-Science Team.
                  </li>
                  <li>
                    Conducted unit testing to deliver optimal browser
                    functionality using Jest, Apollo client testing
                  </li>
                  <li>Created our own component from HTML elements</li>
                  <li>
                    Development of a stand-alone graphical library for graph
                    generation with Visx
                  </li>
                  <li>
                    Optimize cache management with GraphQL to provide the best
                    UX.
                  </li>
                  <li>
                    Collaborated with in-house web designers to create sleek and
                    innovative UI design. (Figma, Jira)
                  </li>
                  <li>
                    Created an attachment preview galleries with a full-screen
                    preview for each of the attachment similar to tools like
                    Slack or Jira
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="date">Sep 2021 - Feb 2022</div>
              <div className="info">
                <p className="semi-bold">
                  FrontEnd HMI Consulting Engineer SEREL through MCA: Belgium,
                  Liege
                </p>
                <ul>
                  <li>
                    Developed Supervision Software for sensors on a textile
                    production line.
                  </li>
                  <li>
                    Ran debugging tools to eliminate flaws and glitches prior to
                    publishing.
                  </li>
                  <li>
                    Translated UX and business requirements into elegant code
                    solutions.
                  </li>
                  <li>
                    Coded using Qt Quick, QML to develop features for both
                    mobile and desktop platforms.
                  </li>
                  <li>Use of Pcan protocol to exchange with the sensors</li>
                  <li>Implementation of DevOps tools (doxygen, GitHub …)</li>
                  <li>
                    Development of detail documentation of the UI and the
                    codebase.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="date">2018 - 2021</div>
              <div className="info">
                <p className="semi-bold">
                  Electronic Apprentice Student Engineer ADDI-DATA Gmbh :
                  Germany
                </p>
                <ul>
                  <li>
                    Refactored web application for a smart Ethernet data logger
                    from Lua script to Angular 11 in TypeScript using Bootstrap
                    4.
                  </li>
                  <ul>
                    <li>Redesign the application with new Company Branding.</li>
                    <li>
                      Developed Middleware to communicate with the device using
                      HTTP requests.
                    </li>
                  </ul>
                  <li>Smoke Test of the smart Ethernet data logger.</li>
                  <li>
                    Automated logs process between embedded system and a car on
                    GNU Octave.
                  </li>
                  <li>
                    Developed in C# a Motor Visualisation System. Developed Test
                    for the HMI integration.
                  </li>
                  <li>
                    Prepared standard reports and documentation to communicate
                    results to senior management.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            <li>
              <div className="date">2018 - 2021</div>
              <div className="info">
                <p className="semi-bold">
                  Engineering School Télécom Physique (Strasbourg, France){" "}
                  <br /> Master of Sciences, Major in Electronic and Industrial
                  Software Engineering{" "}
                </p>
                <ul>
                  <li>
                    Relevant Coursework: Software Development, Agile
                    Methodologies, Programming Courses in C, C++, C#, Kotlin,
                    Typescript,Angular, Java, Linux, network systems
                  </li>
                  <li>Ranked in Top 15% of class</li>
                  <li>Rugby Club Member</li>
                  <li>Interniship Abroad: Baden-Baden, Germany</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="date">2016 - 2018</div>
              <div className="info">
                <p className="semi-bold">
                  INSA Strasbourg (Strasbourg, France)
                </p>
                <ul>
                  <li>
                    Relevant Coursework: Computer Science, Electricity, Math,
                    Physics
                  </li>
                  <li>
                    Professional Development: Practical Electricity courses
                    Tri-phase motor starter system, assembly electrical grid for
                    farming warehouse.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_skills">
          <div className="title">
            <p className="bold">Linguistic Skills</p>
          </div>
          <ul>
            <li>
              English: CECRL C1 Professional working proficiency, TOEIC
              certification 990/990
            </li>
            <li>French: Native</li>
            <li>German: CECRL B2 Professional working proficiency</li>
          </ul>
        </div>
        <div className="resume_item resume_skills">
          <div className="title">
            <p className="bold">Technical Skills</p>
          </div>
          <ul>
            <li>
              Programming: TypeScript, Javascript, HTML, CSS, SCSS, Apollo
              GraphQL, Jest test, React, Qt, QML, C, C++, Python, Java, MATHLAB,
              Octave, C #, OpenCV
            </li>
            <li>Operating System: Windows 10,Windows 7, Linux, QNX, MacOS</li>
            <li>Soft Skills: Teamwork, Independency, UX mindset</li>
            <li>
              Office Tools: Jira, Doxygen, Figma, Slack, GitHub, SVN, Microsoft
              Word, Excel, Powerpoint, Page
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
