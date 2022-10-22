import React from "react";
import { skills } from "../../data";

function Skill() {
  return (
    <div className="skill-main container" id="skill">
      <div className="skill-title">
        <div className="skill-title-my heading-first">My</div>
        <div className="skill-title-skills heading-second">Skills</div>
      </div>
      {skills.map(({ img, title, detail }) => (
        <div className="skill-main-item">
          <img src={img} className="skill-main-item-image" />
          <div className="skill-main-item-text">
            <div className="skill-main-item-title">{title}</div>
            <div className="skill-main-item-detail">{detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill;
