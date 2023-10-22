import React from 'react';
import './style.css';

export interface ExperimentsProps {}

const Experiments: React.FC<ExperimentsProps> = () => {
  return (
    <section className="work" id="experiments">
      <div className="heading">
        <h2 className="font-sans">some of my experiments</h2>
      </div>
      <div className="work-container container-spacing">
        <div className="feature-box">
          <div className="feature-box__icon--1"></div>
          <h3 className="heading-tertiary font-sans">cryptobase</h3>
          <p className="feature-box__text">
            cryptobase is a chrome extension made for getting crypto trading easier as than it is with a single
            notification. No need to visit every other site to keep tabs on the market.
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
          <h3 className="heading-tertiary font-sans">new yorker</h3>
          <p className="feature-box__text">
            new yorker is a web application developed with new york times behind the scenes to search through its
            content, see top stories, look for categories, with some cool charts.
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
          <h3 className="heading-tertiary font-sans">shopify</h3>
          <p className="feature-box__text">
            shopify is an e-commerce mobile app. built with react native at its core, you can make up your profile, shop
            through categories, favourite stuff for later or buy straight from the store.
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
  );
};

export default Experiments;
