import React from "react";

const TechList = ({ title, skills }) => {
  return (
    <div className="tech-list-mobile">
      <p className="tech-list-title">{title}</p>
      <div className="tech-skills">
        {skills.map((skill) => (
          <div className="tech-skill">
            <img src={skill.logo} alt="" className="tech-skill-image" />
            <p className="tech-skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechList;
