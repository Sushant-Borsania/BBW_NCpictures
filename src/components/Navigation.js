import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo_photography.svg";
// import { fab } from '@fortawesome/free-brands-svg-icons'

export default function Navigation() {
  useEffect(() => {
    const btn = document.getElementById("toggler");
    btn.addEventListener("click", toggler);

    function toggler() {
      document.getElementById("navs").classList.toggle("hidden");
    }
  }, []);
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav_left">
          <Logo />
          <h2 className="nav_left__brand-name">
            <a href="/">NC</a>
          </h2>
        </div>
        <div className="nav_middle">
          <ul className="nav_link">
            <NavLink to="/About" exact className="nav_link__item">
              <li>About</li>
            </NavLink>
            <NavLink to="/Service" className="nav_link__item">
              <li>Service</li>
            </NavLink>
            <NavLink to="/Project" className="nav_link__item">
              <li>Projects</li>
            </NavLink>
            <NavLink to="/Blog" className="nav_link__item">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/Contact" className="nav_link__item">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav_right">
          <FontAwesomeIcon className="nav_right__icon" icon={["fab", "facebook"]} />
          <FontAwesomeIcon className="nav_right__icon" icon={["fab", "twitter"]} />
          <FontAwesomeIcon className="nav_right__icon" icon={["fab", "instagram"]} />
        </div>
        <div className="container_small">
          <button className="toggler" id="toggler">
            Menu
          </button>
          <nav className="nav_small">
            <ul className="small-lists" id="navs">
              <NavLink to="/About" className="nav_link__item small-list">
                <li>About</li>
              </NavLink>
              <NavLink to="/Service" className="nav_link__item small-list">
                <li>Service</li>
              </NavLink>
              <NavLink to="/Project" className="nav_link__item small-list">
                <li>Projects</li>
              </NavLink>
              <NavLink to="/Blog" className="nav_link__item small-list">
                <li>Blog</li>
              </NavLink>
              <NavLink to="/Contact" className="nav_link__item small-list">
                <li>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}
