import React from "react";
import { publications } from "../../data";
function Publication() {
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
          <div id={paper.id}>
            <div className="publication-content-name">
              <p>{paper.name}</p>
            </div>
            <button className="publication-content-button">
              <a href={paper.link} target="_blank">
                Go To
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publication;
