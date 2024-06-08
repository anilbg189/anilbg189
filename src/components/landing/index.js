import React from "react";
import SidebarMedia from "../sidebarMedia";
import Bio from "../bio";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Landing = () => {
  useGSAP(() => {
    var sidebarTimeline = gsap.timeline({
      defaults: { duration: 0.35 },
      // Todo : uncomment and attach scroll trigger
      // scrollTrigger: {
      //   trigger: ".App",
      //   toggleActions: "play pause resume pause",
      // },
    });

    sidebarTimeline.from(".sidebar-line", {
      height: 0,
    });

    sidebarTimeline.from(".sidebar-circle", {
      opacity: 0,
    });

    sidebarTimeline.from(".bio-text p", {
      opacity: 0,
    });

    sidebarTimeline.from(".bio-text .lets-talk", {
      opacity: 0,
    });

    sidebarTimeline.from(".bio-media-link img", {
      opacity: 0,
      stagger: 0.05,
      scale: 1.5,
    });

    sidebarTimeline.from(".bio-pic", {
      opacity: 0,
      scale: 2,
    });
  });

  return (
    <>
      <div className="landing" id="landing">
        <div id="landing-start"></div>
        {/* <SidebarMedia /> */}
        <Bio />
      </div>
    </>
  );
};

export default Landing;
