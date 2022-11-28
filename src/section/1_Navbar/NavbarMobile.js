import React from "react";
import { navbar } from "./../../data";

function NavbarMobile() {
  const handleHamburger = () => {
    const list = document.getElementsByClassName("navbarM-items")[0];
    if (list.style.display === "block") {
      list.style.display = "none";
    } else list.style.display = "block";
  };
  return (
    <div className="navbarM-main">
      <div className="navbarM-items">
        <ul onClick={handleHamburger}>
          <li className="navbarM-item-active">
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
      <button class="icon" onClick={handleHamburger}>
        <img src="https://img.icons8.com/sf-black/64/000000/menu.png" />
      </button>
      <div className="navbarM-social">
        <ul>
          {navbar.map((links) => (
            <li>
              <a href={links.link} target="_blank">
                <img
                  src={links.img}
                  alt={links.name}
                  className="navbarM-social-image"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavbarMobile;
