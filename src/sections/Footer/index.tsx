import React from 'react';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="pt-16 pb-32 px-[6%] md:px-0 bg-light">
      <div className="flex flex-col space-y-16 max-w-4xl mx-auto justify-between items-start md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-left p-0">
            <a href="/#" className="text-2xl font-sans font-bold text-secondary">
              Nischal Nikit
            </a>
            <p className="text-sm font-poppins text-primary">mailfornischal@gmail.com</p>
            <p className="text-sm font-poppins text-primary">&copy; Nischal Nikit, 2024</p>
          </div>
          <div className="flex space-x-3 mt-4">
            <a target="_blank" href="https://www.linkedin.com/in/niiischall" rel="noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a target="_blank" href="https://github.com/niiischall" rel="noreferrer">
              <img src="/icons/github.svg" alt="Github" />
            </a>
            <a target="_blank" href="https://twitter.com/niiischall" rel="noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 text-left md:text-right">
          <a href="#about" className="text-lg font-bold font-sans  text-primary">
            About
          </a>
          <a href="#work" className="text-lg font-bold font-sans  text-primary">
            Work
          </a>
          <a href="#experiments" className="text-lg font-bold font-sans  text-primary">
            Experiments
          </a>
          <a href="#writings" className="text-lg font-bold font-sans  text-primary">
            Writings
          </a>
          <a href="#contact" className="text-lg font-bold font-sans  text-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
