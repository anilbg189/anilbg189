import React from "react";
import Landing from "../components/landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <div className="homepage">
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Homepage;
