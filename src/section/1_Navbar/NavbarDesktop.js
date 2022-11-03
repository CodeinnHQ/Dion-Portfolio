import React from "react";
import { navbar } from "./../../data";
function NavbarDesktop() {
  const handleNavigation = (event) => {
    let link = event.target.parentElement;
    let firstLink = link.parentElement.firstChild;
    do {
      firstLink.classList.remove("navbar-item-active");
    } while ((firstLink = firstLink.nextSibling));

    link.classList.add("navbar-item-active");
  };
  return (
    <div className="navbar-main">
      <div className="navbar-items">
        <ul onClick={handleNavigation}>
          <li className="navbar-item-active">
            <a href="#introsection">Home</a>
          </li>
          <li>
            <a href="#publication">Publication</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
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
