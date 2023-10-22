import React from 'react';
import './style.css';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <header>
      <nav>
        <a href="/" className="logo">
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
      </nav>
    </header>
  );
};

export default Navigation;
