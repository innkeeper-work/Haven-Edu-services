// External import
import React from "react";
import { Link } from "react-router-dom";

// Components
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";
import { NavbarSec } from "../components/styles/stylcomponents";
import { Buttons } from "../components/styles/stylcomponents";

// Images
import haven120 from "../images/haven120.png";

export const NavbarSection = () => {
  return (
    <NavbarSec className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={haven120}
            alt=""
            className="d-inline-block align-text-top"
          />
        </a>
        {/* <Link to="/" className="navbar-brand ms-2 ">
          {" "}
          <img src={havenfavico} className="w-200 h-200" alt="" />
        </Link> */}
        <NavbarSec
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </NavbarSec>

        <div
          className="collapse navbar-collapse justify-content-center d-flex "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <Buttons
              // style={{
              //   borderColor: "#724598",
              //   borderWidth: "3px",
              //   borderStyle: "solid",
              //   width: "200px",
              //   borderRadius: "6px",
              // }}
              className="d-flex justify-content-center my-2"
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  style={{ color: "#000" }}
                  aria-current="page"
                >
                  <b>Home</b>
                </Link>
              </li>
            </Buttons>
            <Buttons
              // style={{
              //   borderColor: "#724598",
              //   borderWidth: "3px",
              //   borderStyle: "solid",
              //   width: "200px",
              //   borderRadius: "6px",
              // }}
              className="d-flex justify-content-center my-2"
            >
              <li className="nav-item mx-3">
                <Link
                  to="/about"
                  style={{ color: "#000" }}
                  className="nav-link"
                >
                  <b>About</b>
                </Link>
              </li>
            </Buttons>
            {/* <li className="nav-item mx-3">
              <Link
                to="/games"
                className="nav-link"
                style={{ color: "#000000" }}
              >
                <b>Games</b>
              </Link>
            </li> */}
            <Buttons
              // style={{
              //   borderColor: "#724598",
              //   borderWidth: "3px",
              //   borderStyle: "solid",
              //   width: "200px",
              //   borderRadius: "6px",
              // }}
              className="d-flex justify-content-center my-2"
            >
              <li className="nav-item mx-3">
                <Link
                  to="/gallery"
                  style={{ color: "#000" }}
                  className="nav-link"
                >
                  <b>Gallery</b>
                </Link>
              </li>
            </Buttons>
            {/* <li className="nav-item mx-3">
              <Link
                to="/blog"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <b>Blog</b>
              </Link>
            </li> */}
            <Buttons
              // style={{
              //   borderColor: "#724598",
              //   borderWidth: "3px",
              //   borderStyle: "solid",
              //   width: "200px",
              //   borderRadius: "6px",
              // }}
              className="d-flex justify-content-center my-2"
            >
              <li className="nav-item mx-3">
                <Link
                  to="/contact"
                  style={{ color: "#000" }}
                  className="nav-link"
                >
                  <b>Contact</b>
                </Link>
              </li>
            </Buttons>
            <div className="d-flex justify-content-center my-2">
              {" "}
              <Link
                to="https://m.facebook.com/haveneduservices/"
                className="mx-2"
                style={{ color: "#2D25E1" }}
              >
                <FacebookIcon />
              </Link>
              <Link
                to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
                className="mx-2"
                style={{ color: "#E1116C" }}
              >
                <InstagramIcon />
              </Link>
              <Link to="/about" className="mx-2" style={{ color: "#37A7CF" }}>
                <LinkedInIcon />
              </Link>
            </div>
          </ul>
        </div>
        {/* <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link
                to="/"
                className="nav-link active"
                style={{ color: "#000000" }}
                aria-current="page"
              >
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/about"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <b>About</b>
              </Link>
            </li>
            
            <li className="nav-item mx-3">
              <Link
                to="/gallery"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <b>Gallery</b>
              </Link>
            </li>
           
            <li className="nav-item mx-3">
              <Link
                to="/contact"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <b>Contact</b>
              </Link>

              <Link
                to="https://m.facebook.com/haveneduservices/"
                className="mx-2"
                style={{ color: "#2D25E1" }}
              >
                <FacebookIcon />
              </Link>
              <Link
                to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
                className="mx-2"
                style={{ color: "#E1116C" }}
              >
                <InstagramIcon />
              </Link>
              <Link to="/about" className="mx-2" style={{ color: "#37A7CF" }}>
                <LinkedInIcon />
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </NavbarSec>
  );
};
