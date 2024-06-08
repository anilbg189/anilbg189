import React from "react";
import OutlineHeader from "../common/OutlineHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

const About = () => {
  useGSAP(() => {
    let aboutTimeline = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: "#about-header",
        start: "top 80%",
        end: "top top",
        toggleActions: "play pause resume pause",
        // onEnter: () => {
        //   console.log("entered");
        //   Flip.fit(".sidebar-current-section", "#about-sidebar-nav", {
        //     absolute: true,
        //     scale: false,
        //     simple: false,
        //     duration: 0.2,
        //   });
        // },
        // onEnterBack: () => {
        //   console.log("entered back");
        //   Flip.fit(".sidebar-current-section", "#about-sidebar-nav", {
        //     absolute: true,
        //     scale: true,
        //     duration: 0.2,
        //   });
        // },
      },
    });

    aboutTimeline.from("#about-header", {
      opacity: 0,
      x: -100,
      duration: 0.4,
    });

    aboutTimeline.from(".about-text", {
      opacity: 0,
      x: -100,
      duration: 0.4,
    });
  });

  return (
    <div className="about" id="about">
      <OutlineHeader text="<About/>" id="about-header" />
      <p className="about-text">
        I also do freelancing for mobile app development, desktop apps and
        ofcourse web developement.
        <br />
        All my clients were happy with my work
        <br />
        <br />
        Being passionate about coding, I have won couple of hackothons, coding
        contests and also thought basics of problem solving technique for some
        of my friends.
        <br />
        <br />
        Currently staying in Bangalore, being a proud kannadiga, but ready to
        locate anywhere in the world.
        <br />
        <br />
        Started developing websites for my college mini projects and tech fests,
        now made my professional career. Its been a great journey till now and
        hope the same in future.
      </p>
    </div>
  );
};

export default About;
