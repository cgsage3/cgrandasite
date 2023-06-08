import React from "react";

const skillsContent = [
  {
    name: "PHP",
    skillPercent: "95",
  },
  {
    name: "JavaScript",
    skillPercent: "95",
  },
  {
    name: "HTML5, CSS3, SCSS",
    skillPercent: "99",
  },
  {
    name: "SQL",
    skillPercent: "85",
  },
  {
    name: "Node.js, React",
    skillPercent: "85",
  },
  {
    name: "Oracle, MySQL and MariaDB",
    skillPercent: "80",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
