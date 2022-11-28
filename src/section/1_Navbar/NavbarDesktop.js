import React from "react";
import { navbar } from "./../../data";
function NavbarDesktop() {
  const handleNavigation = (event) => {
    let link;
    if (event.target.tagName === "UL") return;
    if (event.target.tagName === "LI") {
      link = event.target;
    } else link = event.target.parentElement;
    let firstLink = link.parentElement.firstChild;
    console.log(event.target.tagName, link, firstLink);
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
  return (
    <div className="navbar-main">
      <div className="navbar-items">
        <ul onClick={handleNavigation}>
          <li className="navbar-item-active">
            <a href="#introsection">Home</a>
            <div id="navbar-item-div"></div>
          </li>
          <li>
            <div></div>
            <a href="#publication">Publication</a>
          </li>
          <li>
            <div className="navbar-item-div"></div>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <div className="navbar-item-div"></div>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <div className="navbar-item-div"></div>
            <a href="#connect">Connect</a>
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
