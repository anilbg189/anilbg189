import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OutlineHeader from "../common/OutlineHeader";
import TechList from "./tech-list";

import JSLogo from "../../static/skills/core/js.png";
import HTMLLogo from "../../static/skills/core/html.png";
import CSSLogo from "../../static/skills/core/css.png";
import PythonLogo from "../../static/skills/core/python.png";
import MysqlLogo from "../../static/skills/core/mysql.png";
import MongoDBLogo from "../../static/skills/core/mongodb.png";

import ReactLogo from "../../static/skills/libraries_framworks/react.png";
import RedisLogo from "../../static/skills/libraries_framworks/redis.png";
import NodeJSLogo from "../../static/skills/libraries_framworks/nodejs.png";
import ExpressLogo from "../../static/skills/libraries_framworks/express.png";
import GsapLogo from "../../static/skills/libraries_framworks/gsap-removebg.png";
import ReduxLogo from "../../static/skills/libraries_framworks/redux.png";
import ReactFlowLogo from "../../static/skills/libraries_framworks/react-flow.png";

import DSLogo from "../../static/skills/others/DS.png";
import AlgorithmsLogo from "../../static/skills/others/algorithms-removebg.png";
import DesignAndArchitectLogo from "../../static/skills/others/designAndArchitect.png";

const skills = {
  core: [
    {
      name: "JavaScript",
      logo: JSLogo,
    },
    {
      name: "HTML",
      logo: HTMLLogo,
    },
    {
      name: "CSS",
      logo: CSSLogo,
    },
    {
      name: "Python",
      logo: PythonLogo,
    },
    {
      name: "MySQL",
      logo: MysqlLogo,
    },
    {
      name: "MongoDB",
      logo: MongoDBLogo,
    },
  ],
  libraries: [
    {
      name: "React",
      logo: ReactLogo,
    },
    {
      name: "NodeJS",
      logo: NodeJSLogo,
    },
    {
      name: "Express",
      logo: ExpressLogo,
    },
    {
      name: "GSAP",
      logo: GsapLogo,
    },
    {
      name: "Redux",
      logo: ReduxLogo,
    },
    {
      name: "React Flow",
      logo: ReactFlowLogo,
    },
    {
      name: "Redis",
      logo: RedisLogo,
    },
  ],
  others: [
    {
      name: "Data Structures",
      logo: DSLogo,
    },
    {
      name: "Algorithms",
      logo: AlgorithmsLogo,
    },
    {
      name: "Design and Architect",
      logo: DesignAndArchitectLogo,
    },
  ],
};

const Skills = () => {
  const [skillsState, setskillsState] = useState([]);
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("#skills-header", {
        opacity: 0,
        duration: 0.5,
        x: -100,
        scrollTrigger: {
          trigger: "#skills-header",
          // markers: true,
          start: "top 70%",
          // pin: true,
        },
      });

      gsap.from(".tech-skill", {
        opacity: 0,
        scale: 1.5,
        stagger: 0.2,
        ease: "none",

        scrollTrigger: {
          trigger: ".skills",
          start: "top top",
          endTrigger: ".skills",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });
    },
    { scope: container, dependencies: [skillsState], revertOnUpdate: true }
  );

  useEffect(() => {
    const temp = [];

    for (const key in skills) {
      if (Object.hasOwnProperty.call(skills, key)) {
        const skillsList = skills[key];
        temp.push(...skillsList);
      }
    }
    setskillsState(temp);
  }, []);

  return (
    <div ref={container} className="skills-wrapper">
      <div className="skills" id="skills-header">
        <OutlineHeader
          text="<Skills />"
          style={{ width: "100%", textAlign: "right" }}
        />
        <div className="skills-list">
          <TechList skills={skillsState} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
