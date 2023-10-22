import React from 'react';
import './style.css';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p>
        &#xA9; designed and built by
        <span className="footer-name">nischal nikit</span>
      </p>
    </footer>
  );
};

export default Footer;
