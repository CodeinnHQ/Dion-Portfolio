import React from "react";
import { navbar } from "./../../data";
function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-items">
        <ul>
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

export default Navbar;
