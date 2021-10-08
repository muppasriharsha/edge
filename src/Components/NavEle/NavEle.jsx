import React from "react";
import "./NavEle.modules.css";
import { Link } from "react-scroll";
import edgelogo from "../../Assets/Images/edge logo.png";
function NavEle() {
  return (
    <div className="nav-bar">
      <img src={edgelogo} alt="edge-log" className="edge-logo" />
      <ul className="link-items">
        <li>
          <Link activeClass="active" to="Home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" spy={true} smooth={true}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="Services" spy={true} smooth={true}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="Fortfolio" spy={true} smooth={true}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link to="Carrers" spy={true} smooth={true}>
            CARRERS
          </Link>
        </li>
        <li>
          <Link to="Contact" spy={true} smooth={true}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavEle;
