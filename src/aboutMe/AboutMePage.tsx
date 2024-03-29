import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Border, Container } from "../components";

import "./AboutMe.css";
import { CVTemplate } from "./CVTemplate";
import { Header } from "./Header";
import { FallDuck } from "./FallDuck";

export const AboutMePage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Container header gutterBottom>
              <Header />
            </Container>
            <Container>
              <Outlet />
            </Container>
          </main>
        }
      >
        <Route
          path="summary"
          element={
            <Border className="summaryBorder">
              <p className="summaryAboutMe">
                I'm a passionate Front-End Web Developer currently based in
                France. I am contributing to the web application development
                with Typescript and React for a SaaS solution managing
                Data-Science Teams. I constantly delivered each feature on time
                and according to the design for each sprint:
                <br />
                <ul>
                  <li>
                    Integrated an LLM-Prompt feature to automatically generate
                    documentation from user projects, eliminating white page
                    frustrations.
                  </li>
                  <li>
                    Created custom components from HTML components, leveraging
                    React and custom hooks to manage the logical state of the
                    components.
                  </li>
                  <li>
                    Developed a stand-alone graphic library to generate generic
                    graphs that matched the design requirements for the web
                    application. The library was created using the low level
                    graphic library Visx.
                  </li>
                  <li>
                    Championed UX principles by participating in discussions to
                    simplify user experience and reduce cognitive load.
                  </li>
                  <li>
                    Developed Google-like comments with mentions, editing,
                    highlighted text management, and status tracking
                    (Resolved/Unresolved) using Lexical library.
                  </li>
                  <li>
                    Increased overall test coverage from 40% to 80% using Unit
                    and Integration Test. I mainly wrote Integration Tests
                    following the Trophy Testing strategy.
                  </li>
                  <li>
                    Optimized cache management using graphQL methods and custom
                    object ID, displaying changes before backend response, which
                    has a strong impact on users with low internet connection.
                  </li>
                  <li>
                    Interact with the design and product team to provide
                    technical feedback. This helps keep each component coherent
                    with the application and keep the code as simple and
                    maintainable as possible.
                  </li>
                  <li>
                    Create stories using Storybook for relevant custom
                    components. This enhances team collaboration at the design
                    stage, reducing the engineering time spent on each feature.
                  </li>
                </ul>
                Each of my professional experiences helped me develop specific
                skills. My international background made me more resourceful and
                adaptable to any situation. I learned to thrive and be effective
                in a diverse group. I am also used to working both in a team or
                independently. I quickly understand where to find key
                information and when to dive into an issue on my own before
                reaching out to my teams.
                <br />
                My experience working in Germany for a company specialized in
                Industrial Measurement helped me be accurate and precise. In
                Belgium, I honed my interaction skills by working with both
                engineers, customers and field teams. The communication had to
                be tailored between each team to collect their needs. In the US,
                I switched to a startup mindset, wearing multiple hats and
                learning the latest tech best practises. I learned a lot working
                in the Silicon Valley.
                <br />
              </p>
            </Border>
          }
        />
        <Route path="resume" element={<CVTemplate />} />
        <Route path="fallDuck" element={<FallDuck />} />
      </Route>
    </Routes>
  );
};
