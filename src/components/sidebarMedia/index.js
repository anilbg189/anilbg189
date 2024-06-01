import React from "react";
import Instagram from "../../static/instagram-small-side.svg";
import Github from "../../static/github-small-side.png";
import LinkedIn from "../../static/linkedin-small-side.png";

const SidebarMedia = () => {
  return (
    <div className="sidebar-media">
      <div className="sidebar-line">
        <div className="sidebar-media-link">
          <img src={LinkedIn} alt="linkedin" />
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="sidebar-array" />
      <div className="sidebar-circle" />
    </div>
  );
};

export default SidebarMedia;
