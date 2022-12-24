import React, { useEffect, useState } from "react";
import { navbar } from "./../../data";
import Experience from "./../5_Experience/index";
import throttle from "lodash.throttle";
function NavbarDesktop() {
  const [clicked, setClicked] = useState(false);
  const callback = (event) => {
    if (clicked) return;
    const intro = document.getElementsByClassName("intro-section-container")[0]
      .clientHeight;
    const qual =
      intro +
      document.getElementsByClassName("qualification-main")[0].clientHeight;
    const publication =
      qual +
      document.getElementsByClassName("publication-main")[0].clientHeight;
    const skill =
      publication +
      document.getElementsByClassName("skill-main")[0].clientHeight;
    const experience =
      skill +
      document.getElementsByClassName("experience-main")[0].clientHeight;

    const connect =
      experience +
      document.getElementsByClassName("footer-main")[0].clientHeight +
      document.getElementById("grants").clientHeight;

    const curr = window.pageYOffset;
    if (curr <= intro) {
      const aElement = document.getElementById("Shome");
      handleNavigation(aElement, true);
      return;
    }
    if (curr <= publication) {
      const aElement = document.getElementById("Spublication");
      handleNavigation(aElement, true);
      return;
    }

    if (curr <= skill) {
      const aElement = document.getElementById("Sskill");
      handleNavigation(aElement, true);
      return;
    }
    if (curr <= experience) {
      const aElement = document.getElementById("Sexperience");
      handleNavigation(aElement, true);

      return;
    }
    if (curr <= connect) {
      const aElement = document.getElementById("Sconnect");
      handleNavigation(aElement, true);
      return;
    }
  };
  const handleScrollNavigation = () => {
    document.addEventListener("scroll", callback);
  };

  useEffect(() => {
    handleScrollNavigation();
    return () => {
      document.removeEventListener("scroll", () => {
        console.log(" ");
      });
    };
  }, []);
  const work = (firstLink, link) => {
    if (document.contains(document.getElementById("navbar-item-div"))) {
      document.getElementById("navbar-item-div").remove();
    }
    do {
      firstLink.classList.remove("navbar-item-active");
    } while ((firstLink = firstLink.nextSibling));

    let highlight = document.createElement("div");
    highlight.setAttribute("id", "navbar-item-div");
    link.appendChild(highlight);
    link.classList.add("navbar-item-active");
  };
  const handleNavigation = (event, isScrollPart = false) => {
    if (isScrollPart) {
      var link;
      if (event.tagName === "UL") return;
      if (event.tagName === "LI") {
        link = event;
      } else link = event.parentElement;
      var firstLink = link.parentElement.firstChild;

      work(firstLink, link);
    } else {
      var link;
      if (event.target.tagName === "UL") return;
      if (event.target.tagName === "LI") {
        link = event.target;
      } else link = event.target.parentElement;
      var firstLink = link.parentElement.firstChild;
      work(firstLink, link);
    }
  };

  return (
    <div className="navbar-main">
      <div className="navbar-items">
        <ul>
          <li className="navbar-item-active">
            <a href="#introsection" id="Shome">
              Home
            </a>
            <div id="navbar-item-div"></div>
          </li>
          <li>
            <div className="navbar-item-div"></div>

            <a href="#publication" id="Spublication">
              Publication
            </a>
          </li>
          <li>
            <div className="navbar-item-div"></div>
            <a href="#skill" id="Sskill">
              Skill
            </a>
          </li>
          <li>
            <div className="navbar-item-div"></div>
            <a href="#experience" id="Sexperience">
              Experience
            </a>
          </li>
          <li>
            <div className="navbar-item-div"></div>
            <a href="#connect" id="Sconnect">
              Connect
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-social">
        <ul>
          {navbar.map((links) => (
            <li>
              <a href={links.link} target="_blank">
                <img
                  src={links.img}
                  alt={links.name}
                  className="navbar-social-image"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavbarDesktop;
