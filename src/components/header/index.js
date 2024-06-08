import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  useGSAP(() => {
    var headerTimeline = gsap.timeline({ defaults: { opacity: 0, scale: 0 } });

    headerTimeline
      .from("li", {
        duration: 0.5,
        stagger: 0.1,
      })
      .from("#header-resume", {
        duration: 0.1,
      });
  });

  return (
    <header>
      <ul>
        <li className="selected-link">Homepage</li>
        <li>Achivements</li>
        <li>Badminton</li>
      </ul>
      <button id="header-resume" className="app-button">
        Resume
      </button>
    </header>
  );
};

export default Header;
