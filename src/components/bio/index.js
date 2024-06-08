import React from "react";
import Pic from "../../static/Anil-Avatar.svg";
import ReactLogo from "../../static/reactjs-background.svg";
import Instagram from "../../static/instagram-small-side.svg";
import Github from "../../static/github-small-side.png";
import LinkedIn from "../../static/linkedin-small-side.png";

const Bio = () => {
  return (
    <div className="bio">
      <img
        src={ReactLogo}
        className="react-logo-background"
        alt="react-logo-background"
      />
      <div className="bio-text">
        <p className="bio-text-brief-text">
          Hey, Its <span className="bio-name">B&nbsp;G&nbsp;Anil</span>
          <br />
          <br />I build creative and responsive websites using React JS library.{" "}
          <br />
          <br />
          Looking for full stack developer ?<br />
        </p>
        <button className="app-button lets-talk">Let’s Talk</button>
        <div className="bio-media-link">
          <img src={LinkedIn} alt="linkedin" />
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="bio-pic">
        <img src={Pic} height="85%" alt="cartoom-me" />
      </div>
    </div>
  );
};

export default Bio;
