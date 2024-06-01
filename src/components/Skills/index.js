import React from "react";
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
  return (
    <div className="skills">
      <OutlineHeader
        text="<Skills />"
        style={{ width: "100%", textAlign: "right" }}
      />
      <div className="skills-list">
        <TechList title="Core" skills={skills.core} />
        <TechList title="Libraries / Frameworks" skills={skills.libraries} />
        <TechList title="Others" skills={skills.others} />
      </div>
    </div>
  );
};

export default Skills;
