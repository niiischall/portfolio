import React, { useCallback, useState } from 'react';
import './style.css';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleSidebarToggle = useCallback(() => {
    setShowSidebar((showSidebar) => !showSidebar);
  }, []);

  return (
    <header>
      <nav>
        <a href="/" className="logo">
          nischal
        </a>
        <button className="bx bx-menu" id="menu-icon" onClick={handleSidebarToggle}></button>
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
        {showSidebar ? (
          <ul className="sidebar">
            <li>
              <a id="sidebar-about" href="#about">
                about
              </a>
            </li>
            <li>
              <a id="sidebar-work" href="#work">
                work
              </a>
            </li>
            <li>
              <a id="sidebar-experiments" href="#experiments">
                experiments
              </a>
            </li>
            <li>
              <a id="sidebar-writings" href="#writings">
                writings
              </a>
            </li>
            <li>
              <a id="sidebar-contact" href="#contact">
                contact
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Navigation;
