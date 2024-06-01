import React from "react";
import Pic from "../../static/Anil-Avatar.svg";
import ReactLogo from "../../static/reactjs-background.svg";

const Bio = () => {
  return (
    <div className="bio">
      <img
        src={ReactLogo}
        className="react-logo-background"
        alt="react-logo-background"
      />
      <div className="bio-text">
        <p>
          Hey, Its <span className="bio-name">B&nbsp;G&nbsp;Anil</span>
          <br />
          <br />I build creative and responsive websites using React JS library.{" "}
          <br />
          <br />
          Looking for full stack developer ?<br />
        </p>
        <button className="app-button lets-talk">Let’s Talk</button>
      </div>
      <div className="bio-pic">
        <img src={Pic} height="85%" alt="cartoom-me" />
      </div>
    </div>
  );
};

export default Bio;
