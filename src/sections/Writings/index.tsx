import React from "react";
import "./style.css";

const Writings: React.FC<{}> = () => {
  return (
    <section className="writings" id="writings">
      <div className="heading">
        <h2 className="font-sans">things i wrote recently</h2>
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
            <h2 className="font-sans">
              Inside WebSockets: Building a Chat Application.
            </h2>
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
            <h2 className="font-sans">
              build and deploy a fun, modern web3 blockchain app - step by step
              tutorial
            </h2>
            <p>
              &quot;in this web3 tutorial, we&apos;ll be building a
              fully-functional blockchain, web3 app. We&apos;ll be starting with
              the basics of building a blockchain app and at the end, we&apos;ll
              get our web3 app live for everyone to use...&quot;
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
            <h2 className="font-sans">building a chrome extension in 2021</h2>
            <p>
              &quot;a huge part of what makes chrome such a widely-used product
              is how expandable it is and chrome extensions have had a huge role
              to play in this expansion. there&apos;s a chrome extension for
              anything and everything in this world and what&apos;s great is
              that it&apos;s remarkably easy to build one by yourself...&quot;
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Writings;
