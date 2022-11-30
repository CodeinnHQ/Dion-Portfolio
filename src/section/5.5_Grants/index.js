import React from "react";
import { grants } from "./../../data";
function GrantsSection() {
  return (
    <div className="qualification-main container">
      <div className="qualification-title">Grants</div>
      <ul className="qualification-pointers">
        {grants.map((point) => (
          <li className="qualification-point">{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default GrantsSection;
