import React from "react";
import "./style.css";

const Footer: React.FC<{}> = () => {
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
