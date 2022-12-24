import React, { useState } from "react";
import { publications } from "../../data";
function Publication() {
  const [{ hover, id }, setHover] = useState(false);
  const handleHover = (event) => {
    // console.log(event.currentTarget.id, hover, id);
    setHover({
      hover: !hover,
      id: event.currentTarget.id,
    });
    const highlightElement = event.currentTarget.firstChild;
    // console.log(highlightElement);
    const parent = event.currentTarget.parentElement;
    let firstLink = parent.firstChild;
    do {
      firstLink.firstChild.classList.remove("publication-highlight");
    } while ((firstLink = firstLink.nextSibling));
    highlightElement.classList.add("publication-highlight");
  };
  return (
    <div className="publication-main container" id="publication">
      <div className="publication-title">
        <div className="publication-title-my heading-first">My</div>
        <div className="publication-title-publications heading-second">
          Publications
        </div>
      </div>
      <div className="publication-content">
        {publications.map((paper) => (
          <div
            id={paper.id}
            className="publication-content-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <div className="publication-highlight-container"></div>
            <div>
              <div className="publication-content-name">
                <p>{paper.name}</p>
              </div>
              <button className="publication-content-button">
                <a href={paper.link} target="_blank">
                  Go To
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publication;
