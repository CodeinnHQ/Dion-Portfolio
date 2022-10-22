import React from "react";
import { experience } from "./../../data";
function Experience() {
  return (
    <div id="experience">
      <div className="experience-main container">
        <div className="experience-title-my heading-first">My</div>
        <div className="experience-title-skills heading-second">Experience</div>
        <div className="experience-main-text">{experience["main text"]}</div>
      </div>
      <div className="experience-main-detail container">
        {experience["experience-list"].map(({ year, title }) => (
          <div className="experience-main-detail-item">
            <div className="experience-main-detail-item-year">{year}</div>
            <div className="experience-main-detail-item-title">{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
