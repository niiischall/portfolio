import React from "react";
import "./style.css";

const Work: React.FC<{}> = () => {
  return (
    <section className="timeline" id="work">
      <div className="heading">
        <h2 className="font-sans">work experience</h2>
      </div>
      <div className="timeline-container container-spacing">
        <div className="timeline-box">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="font-sans">SDE-I</h3>
              <h4>
                <i className="ph-buildings"></i>
                <a
                  id="experience-jupiter-link"
                  href="https://jupiter.money/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jupiter Money
                </a>
              </h4>
              <span>
                <i className="ph-clock"></i> Jul 2022 - Present
              </span>
              <p>
                working in customer success engineering vertical to build
                product solutions to a user&apos;s pain points in their journey
                on the platform. developed products by collaborating with the
                product team, leading releases for the vertical on multiple
                sprint cycles while being a major part of the development of
                internal platform tooling called as oneview.
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="font-sans">Software Engineer</h3>
              <h4>
                <i className="ph-buildings"></i>
                <a
                  id="experience-geekyants-link"
                  href="https://www.geekyants.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GeekyAnts India
                </a>
              </h4>
              <span>
                <i className="ph-clock"></i> Jul 2021 - Jun 2022
              </span>
              <p>
                worked with an offshore client based in north america in leading
                development for their existing product and new initiatives.
                developed the chrome extension to supplement the exisiting web
                app and also worked in developing a similar app on blockchain.
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="font-sans">Software Engineering Intern</h3>
              <h4>
                <i className="ph-buildings"></i>
                <a
                  id="experience-litmusblox-link"
                  href="https://litmusblox.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Litmusblox
                </a>
              </h4>
              <span>
                <i className="ph-clock"></i>Jul 2020 - Jun 2021
              </span>
              <p>
                worked collaboratively and closely with a team of fellow
                developers and designers to solve challenges for multiple
                clients related to onboarding on the platform. majorly involved
                in front end for a new candidate screening product using
                react.js, redux and carried out improvement of technical debt in
                frontend platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
