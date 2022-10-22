import React from "react";

function Qualification() {
  const qual = [
    " It is a long established fact that a reader will be distracted by the",
    " It is a long established fact that a reader will be distracted by the",
    " It is a long established fact that a reader will be distracted by the",
    " It is a long established fact that a reader will be distracted by the",
  ];
  return (
    <div className="qualification-main container">
      <div className="qualification-title">Qualifications</div>
      <ul className="qualification-pointers">
        {qual.map((point) => (
          <li className="qualification-point">{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default Qualification;
