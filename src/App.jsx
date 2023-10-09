import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/*Header*/}
      <header>
        <a href="#" className="logo">
          nischal
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li>
            <a id="nav-about" href="#about">
              about
            </a>
          </li>
          <li>
            <a id="nav-work" href="#work">
              work
            </a>
          </li>
          <li>
            <a id="nav-experiments" href="#experiments">
              experiments
            </a>
          </li>
          <li>
            <a id="nav-writings" href="#writings">
              writings
            </a>
          </li>
          <li>
            <a id="nav-contact" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </header>
      {/*Home*/}
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
          <h1>nischal nikit</h1>
          <p>
            i build things that live on the web. i also talk & write about
            <br className="home-text-break" />
            some of those things. this is my corner of the internet.
            <span className="home-text-welcome">welcome :)</span>
          </p>
          <a id="home-contact" href="#contact" className="btn">
            get in touch
          </a>
        </div>
      </section>
      {/* About */}
      <section className="about" id="about">
        <div className="heading">
          <h2>about me</h2>
        </div>
        <div className="about-container container-spacing">
          <div className="about-text">
            <p>
              i am a software developer based out of bengaluru, india. i try to
              build delightful experiences on the web and mobile with my craft.
              today, i am working as a developer at
              <a
                id="about-jupiter-link"
                href="https://jupiter.money/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>jupiter</strong>
              </a>
              -- one of the leading neobanks in the country. i am building for
              our mobile app and internal platforms.
            </p>
            <div className="information">
              <div className="info-box">
                <img
                  src="https://ik.imagekit.io/3dv5nkw89t3/mail_oO3ONrK8w.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672250138746"
                  alt="mail"
                />
                <p>mailfornischal@gmail.com</p>
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
      {/*Work*/}
      <section className="timeline" id="work">
        <div className="heading">
          <h2>work experience</h2>
        </div>
        <div className="timeline-container container-spacing">
          <div className="timeline-box">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>SDE-I</h3>
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
                  product solutions to a user&apos;s pain points in their
                  journey on the platform. developed products by collaborating
                  with the product team, leading releases for the vertical on
                  multiple sprint cycles while being a major part of the
                  development of internal platform tooling called as oneview.
                </p>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
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
                  worked with an offshore client based in north america in
                  leading development for their existing product and new
                  initiatives. developed the chrome extension to supplement the
                  exisiting web app and also worked in developing a similar app
                  on blockchain.
                </p>
              </div>
            </div>
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Software Engineering Intern</h3>
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
                  clients related to onboarding on the platform. majorly
                  involved in front end for a new candidate screening product
                  using react.js, redux and carried out improvement of technical
                  debt in frontend platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Experiments*/}
      <section className="work" id="experiments">
        <div className="heading">
          <h2>some of my experiments</h2>
        </div>
        <div className="work-container container-spacing">
          <div className="feature-box">
            <div className="feature-box__icon--1"></div>
            <h3 className="heading-tertiary">cryptobase</h3>
            <p className="feature-box__text">
              cryptobase is a chrome extension made for getting crypto trading
              easier as than it is with a single notification. No need to visit
              every other site to keep tabs on the market.
            </p>
            <a
              id="work-cryptobase-link"
              href="https://crypto-base-landing-page.vercel.app/"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              check it out
            </a>
          </div>
          <div className="feature-box">
            <div className="feature-box__icon--2"></div>
            <h3 className="heading-tertiary">new yorker</h3>
            <p className="feature-box__text">
              new yorker is a web application developed with new york times
              behind the scenes to search through its content, see top stories,
              look for categories, with some cool charts.
            </p>
            <a
              id="work-newyorker-link"
              href="https://thenewyorker.netlify.app/"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              check it out
            </a>
          </div>
          <div className="feature-box">
            <div className="feature-box__icon--3"></div>
            <h3 className="heading-tertiary">shopify</h3>
            <p className="feature-box__text">
              shopify is an e-commerce mobile app. built with react native at
              its core, you can make up your profile, shop through categories,
              favourite stuff for later or buy straight from the store.
            </p>
            <a
              id="work-shopify-link"
              href="https://github.com/niiischall/Shopify"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              check it out
            </a>
          </div>
        </div>
      </section>

      {/*Writings*/}
      <section className="writings" id="writings">
        <div className="heading">
          <h2>things i wrote recently</h2>
        </div>
        <div className="writings-container container-spacing">
          <a
            id="writings-websocket-link"
            href="https://blog.nischalnikit.com/inside-websockets-building-a-chat-application"
            target="_blank"
            className="story"
            rel="noopener noreferrer"
          >
            <figure className="story-shape">
              <img
                className="story-image"
                src="https://ik.imagekit.io/3dv5nkw89t3/Onboarding_Plan__1__UkCDOi14p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675591573129"
                alt="Article 1"
              />
            </figure>
            <div className="story-text">
              <h2>Inside WebSockets: Building a Chat Application.</h2>
              <p>
                &quot;A deep dive into how a network protocol makes it possible
                for real-time communication to happen on the internet and
                leveraging it through a mini-app.&quot;
              </p>
            </div>
          </a>
          <a
            id="writings-blockchainapp-link"
            href="https://web3.hashnode.com/how-to-build-and-deploy-a-modern-web3-blockchain-app-tutorial"
            target="_blank"
            className="story"
            rel="noopener noreferrer"
          >
            <figure className="story-shape">
              <img
                className="story-image"
                src="https://ik.imagekit.io/3dv5nkw89t3/writing-3_OLSPPDvle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672250138987"
                alt="Article 2"
              />
            </figure>
            <div className="story-text">
              <h2>
                build and deploy a fun, modern web3 blockchain app - step by
                step tutorial
              </h2>
              <p>
                &quot;in this web3 tutorial, we&apos;ll be building a
                fully-functional blockchain, web3 app. We&apos;ll be starting
                with the basics of building a blockchain app and at the end,
                we&apos;ll get our web3 app live for everyone to use...&quot;
              </p>
            </div>
          </a>
          <a
            id="writings-chromeextension-link"
            href="https://techblog.geekyants.com/building-a-chrome-extension-in-2021"
            target="_blank"
            className="story"
            rel="noopener noreferrer"
          >
            <figure className="story-shape">
              <img
                className="story-image"
                src="https://ik.imagekit.io/3dv5nkw89t3/writing-1_K2nF9uGC6o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672250138325"
                alt="Article 3"
              />
            </figure>
            <div className="story-text">
              <h2>building a chrome extension in 2021</h2>
              <p>
                &quot;a huge part of what makes chrome such a widely-used
                product is how expandable it is and chrome extensions have had a
                huge role to play in this expansion. there&apos;s a chrome
                extension for anything and everything in this world and
                what&apos;s great is that it&apos;s remarkably easy to build one
                by yourself...&quot;
              </p>
            </div>
          </a>
        </div>
      </section>

      {/*Contact*/}
      <section className="contact" id="contact">
        <div className="heading">
          <h2>get in touch with me</h2>
        </div>
        <div className="contact-container container-spacing">
          <p>
            If you want to work together or just say hi, my DMs are open. 😊
          </p>
        </div>
      </section>

      {/*Footer*/}
      <footer className="footer">
        <p>
          &#xA9; designed and built by
          <span className="footer-name">nischal nikit</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
