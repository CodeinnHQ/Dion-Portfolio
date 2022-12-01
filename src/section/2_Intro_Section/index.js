import React, { useState } from "react";
import ProfilePhoto from "./../../Assets/ProfilePhoto.png";
function IntroSection() {
  const [seeMore, setSeeMore] = useState(true);
  const handleSeeMore = () => {
    const about = document.getElementById("intro-section-about");

    if (seeMore) {
      about.classList.remove("intro-section-about-hidden");
    } else {
      about.classList.add("intro-section-about-hidden");
    }
    setSeeMore(!seeMore);
  };
  return (
    <div className="intro-section-container container" id="introsection">
      <div className="intro-section-main">
        <div className="intro-section-main-text">
          <div className="intro-section-hey">Hey It❜s </div>
          <div className="intro-section-dion">Dion C. Allen</div>
          <div className="intro-section-pharm">Pharmaceutical Science</div>
        </div>
        <img src={ProfilePhoto} alt="profile photo" />
      </div>
      <div
        id="intro-section-about"
        className="intro-section-about intro-section-about-hidden"
      >
        I was born and raised on the island of Jamaica where I completed a BSc.
        in Psychology from the University of the West Indies. In 2018 I came to
        the United States and completed an MSc. in Applied Psychology from Lynn
        University. I have now embarked on my journey as a doctoral student in
        Socio behavioral and Administrative Pharmacy. Being a member of several
        minority groups, I am most passionate about social justice for those who
        have been disenfranchised. My research interests include HIV and mental
        health. Both areas have been proven to disproportionately affect
        minority groups in terms of race/ethnicity, gender, social status,
        sexual identity, and other sociodemographic factors. My goal is to use
        my research findings to engage in evidence-based advocacy for
        underserved groups. Outside of academics and professional goals, I enjoy
        music, drawing, sewing, playing tennis, pickleball and other physical
        activities.
      </div>
      <button className="intro-section-button" onClick={handleSeeMore}>
        {seeMore ? "See More" : "See Less"}
      </button>
    </div>
  );
}

export default IntroSection;
