import React from "react";

const skillsContent = [
  {
    name: "WordPress",
    skillPercent: "95",
  },
  {
    name: "Photoshop and Illustrator",
    skillPercent: "95",
  },
  {
    name: "PHP",
    skillPercent: "95",
  },
  {
    name: "Node.js, React",
    skillPercent: "85",
  },
  {
    name: "HTML5, CSS3, SCSS",
    skillPercent: "99",
  },
  {
    name: "Linux Server",
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
