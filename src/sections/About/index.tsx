import React from 'react';
import './style.css';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2 className="font-sans">about me</h2>
      </div>
      <div className="about-container container-spacing">
        <div className="about-text">
          <p>
            i am a software developer based out of bengaluru, india. i try to build delightful experiences on the web
            and mobile with my craft. today, i am working as a developer at
            <a id="about-jupiter-link" href="https://jupiter.money/" target="_blank" rel="noopener noreferrer">
              <strong>jupiter</strong>
            </a>
            -- one of the leading neobanks in the country. i am buildi ng for our mobile app and internal platforms.
          </p>
          <div className="information">
            <div className="info-box">
              <img
                src="https://ik.imagekit.io/3dv5nkw89t3/mail_oO3ONrK8w.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672250138746"
                alt="mail"
              />
              <p className="font-sans">mailfornischal@gmail.com</p>
            </div>
          </div>
          <div className="cv">
            <a
              id="about-cv-download-clicked"
              href="https://drive.google.com/file/d/1PAflSM4BbIAgWupyXEgoiixmvHGMU0KS/view?usp=sharing"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
