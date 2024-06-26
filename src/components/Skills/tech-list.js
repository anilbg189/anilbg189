import React from "react";

const TechList = ({ title, skills }) => {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div className="tech-list">
      <p className="tech-list-title">{title}</p>
      <div className="tech-skills">
        {skills.map((skill, i) => (
          <div
            id={`tech-skill-${i}`}
            className="tech-skill"
            style={{ transform: `rotateZ(${getRandomArbitrary(-15, 15)}deg)` }}
          >
            <img src={skill.logo} alt="" className="tech-skill-image" />
            <p className="tech-skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechList;
