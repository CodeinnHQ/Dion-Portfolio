import React from "react";
import { qualification } from "../../data";
function Qualification() {
  const highLight = (sentence) => {
    const words = sentence.split(",", 3);
    return (
      <>
        <span>{words[0]}</span>
        {words[1]}
        {words[2]}
      </>
    );
  };
  return (
    <div className="qualification-main container">
      <div className="qualification-title">Qualifications</div>
      <ul className="qualification-pointers">
        {qualification.map((point) => (
          <li className="qualification-point">{highLight(point)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Qualification;
