import React, { useState } from "react";
import { experience } from "./../../data";
function Experience() {
  const [{ currentId, isSeeMoreOpen }, setShowSeeMore] = useState({
    currentId: null,
    isSeeMoreOpen: false,
  });
  const [{ hover, id }, setHover] = useState(false);
  const handleHover = (event) => {
    // console.log(event.currentTarget.id, hover, id);
    setHover({
      hover: !hover,
      id: event.currentTarget.id,
    });
    const parent = event.currentTarget.parentElement;

    const highlightElement = event.currentTarget.firstChild;

    let firstLink = parent.firstChild;
    do {
      firstLink.firstChild.firstChild.classList.remove("experience-highlight");
    } while ((firstLink = firstLink.nextSibling));
    highlightElement.firstChild.classList.add("experience-highlight");
  };
  const handleSeeMore = (event) => {
    if (event.target.id == currentId) {
      setShowSeeMore({
        currentId: Number(event.target.id),
        isSeeMoreOpen: !isSeeMoreOpen,
      });
    } else {
      setShowSeeMore({
        currentId: Number(event.target.id),
        isSeeMoreOpen: true,
      });
    }
  };

  const formattedSkillDisplay = (skills) => {
    let list = skills.join(" • ");
    return list;
  };
  return (
    <div id="experience">
      <div className="experience-main container">
        <div className="experience-title-my heading-first">My</div>
        <div className="experience-title-skills heading-second">Experience</div>
        <div className="experience-main-text">{experience["main text"]}</div>
      </div>
      <div className="experience-main-detail container">
        {experience["experience-list"].map(
          ({ id, year, title, skill, contribution }) => (
            <div
              className="experience-main-detail-item"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <div className="highlight-section">
                <div className="experience-highlight-container"></div>
                <div>
                  <div className="experience-main-detail-item-year">{year}</div>
                  <div className="experience-main-detail-item-title">
                    {title}
                  </div>
                </div>
              </div>
              {(skill || contribution) && (
                <button
                  className="experience-main-detail-item-button"
                  onClick={handleSeeMore}
                  id={id}
                >
                  see more
                  {isSeeMoreOpen && currentId === id ? (
                    <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/10/FFFFFF/external-glyph-shapes-tanah-basah-glyph-tanah-basah-69.png" />
                  ) : (
                    <img src="https://img.icons8.com/material-rounded/10/FFFFFF/give-way.png" />
                  )}
                </button>
              )}
              {isSeeMoreOpen && currentId === id && (
                <div className="experience-main-detail-item-see-more">
                  <h5>Skills</h5>
                  <div className="experience-main-detail-item-skills">
                    {formattedSkillDisplay(skill)}
                  </div>
                  <h5>Contributions</h5>
                  <div className="experience-main-detail-item-contributions">
                    {contribution.map((pointer) => (
                      <li>{pointer}</li>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Experience;
