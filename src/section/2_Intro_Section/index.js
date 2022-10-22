import React from "react";
import ProfilePhoto from "./../../Assets/ProfilePhoto.png";
function IntroSection() {
  return (
    <div className="intro-section-container container" id="introsection">
      <div className="intro-section-main">
        <div className="intro-section-main-text">
          <div className="intro-section-hey">Hey Its </div>
          <div className="intro-section-dion">Dion C. Allen</div>
          <div className="intro-section-pharm">Pharmaceutical Science</div>
        </div>
        <img
          src={ProfilePhoto}
          //TODO : ASPECT RATIO
          width="425px"
          height="450px"
          alt="profile photo"
        />
      </div>
      <div className="intro-section-about">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal It is a long
        established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal
      </div>
    </div>
  );
}

export default IntroSection;
