import React from 'react';
import './style.css';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="home" id="home">
      <div className="social">
        <a
          id="twitter-logo"
          href="https://twitter.com/niiischall"
          target="_blank"
          title="twitter"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          id="github-logo"
          href="https://github.com/niiischall"
          target="_blank"
          title="github"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          id="hashnode-logo"
          href="https://blog.nischalnikit.com"
          target="_blank"
          title="hashnode"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-hashnode"></i>
        </a>
        <a
          id="linkedin-logo"
          href="https://www.linkedin.com/in/niiischall"
          target="_blank"
          title="linkedin"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="home-img">
        <img
          src="https://ik.imagekit.io/3dv5nkw89t3/profile-pic_wG_TcuOV3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672250138287"
          alt="Profile"
        />
      </div>
      <div className="home-text">
        <span>hey 👋, i&apos;m</span>
        <h1 className="font-sans">nischal nikit</h1>
        <p>
          i build things that live on the web. i also talk & write about
          <br className="home-text-break" />
          some of those things. this is my corner of the internet.
          <span className="home-text-welcome font-sans">welcome :)</span>
        </p>
        <a id="home-contact" href="#contact" className="btn">
          get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
