import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OutlineHeader = ({ text, style, id }) => {
  // useGSAP(() => {
  //   gsap.from(".outline-header", {
  //     opacity: 0.2,
  //     x: -100,
  //     duration: 2,
  //     scrollTrigger: {
  //       markers: true,
  //       trigger: ".outline-header",
  //       start: "top 80%",
  //       end: "bottom top",
  //       toggleActions: "play pause resume pause",
  //     },
  //   });
  // });

  return (
    <div className="outline-header" style={style} id={id}>
      {text || ""}
    </div>
  );
};

export default OutlineHeader;
