import React from "react";
import logo from "./Integrify.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="socialNetwork">
        <div className="icon addStudent">
          <Link to="/integrify/students/new">
            <i className="fas fa-user-plus fa-2x" />
          </Link>
        </div>
        <div className="icon">
          <a
            href="https://www.facebook.com/integrify.fi/?ref=br_rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://twitter.com/integrify_fi?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/integrify.fi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
