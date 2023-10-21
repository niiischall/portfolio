import React from "react";
import "./App.css";

import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Experiments from "./sections/Experiments";
import Writings from "./sections/Writings";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App: React.FC<{}> = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Experiments />
      <Writings />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
