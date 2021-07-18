import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css";
const Header = () => {

  const toggle = () => {
      const nav = document.querySelector("nav");
      nav.style.transition="0.7s";
      if (nav.style.display === "block") {
        nav.style.display = "none";
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";
      } else {
        nav.style.display = "block";
        // nav.style.transform="translateX(50%)"
        nav.addEventListener("click", () => {
          nav.style.display = "none";
          document.querySelector(".open").style.display = "none";
          document.querySelector(".close").style.display = "block";
        });
        document.querySelector(".open").style.display = "block";
        document.querySelector(".close").style.display = "none";
      }

  };

  return (
    <>
      <div className="main-header">
        <header>
          <Link to="/" className="logo">
            <span className="logo-txt">R</span>eadMe{" "}
            <span className="logo-txt">G</span>enerator
          </Link>
          <div className="burger" id="burger" onClick={toggle}>
            <i className="fas fa-bars close"></i>
            <i className="fas fa-times open"></i>
          </div>
        </header>
        <nav>
          <ul>
            <NavLink exact activeClassName="active_class" to="/">
              <li>
                Home <i class="fas fa-home"></i>
              </li>
            </NavLink>
            <NavLink to="/about" activeClassName="active_class" exact>
              <li>About</li>
            </NavLink>
            <a
              href="https://github.com/abidadhikari/github-readme-generator-profile"
              target="_blank"
            >
              <li>
                View Repo <i class="fas fa-external-link-alt"></i>
              </li>
            </a>
            <a href="https://github.com/abidadhikari/" target="_blank">
              <li>
                View Github <i class="fas fa-external-link-alt"></i>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
