import React from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-area ">
        <div className="header-top_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-lg-8">
                <div className="short_contact_list">
                  <ul>
                    <li>
                      <a href="https://edupass-frontend.netlify.app/">
                        {" "}
                        <i className="fa fa-phone" /> +1 (454) 556-5656
                      </a>
                    </li>
                    <li>
                      <a href="https://edupass-frontend.netlify.app/">
                        {" "}
                        <i className="fa fa-envelope" />
                        Yourmail@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-lg-4">
                <div className="social_media_links d-none d-lg-block">
                  <a href="https://edupass-frontend.netlify.app/">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://edupass-frontend.netlify.app/">
                    <i className="fa fa-pinterest-p" />
                  </a>
                  <a href="https://edupass-frontend.netlify.app/">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="https://edupass-frontend.netlify.app/">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu">
          <nav
            className="navbar navbar-expand-lg navbar navbar-light"
            style={{ backgroundColor: "#87CEEB", minHeight: "110px" }}
          >
            <a className="navbar-brand">
              <Link to={"/"}>
                {" "}
                <img
                  src={logo}
                  alt="Responsive image"
                  style={{
                    height: "450%",
                    width: "110%",
                    marginBottom: "40px",
                    marginTop: "-30px",
                  }}
                />
              </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="nav navbar-nav navbar-right" id="navigation">
              <li className="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/"} className="nav-link">
                    {" "}
                    <h4>
                      <strong
                        style={{
                          color: "white",
                        }}
                      >
                        Home
                      </strong>
                    </h4>
                  </Link>
                </li>
                <li className="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/about"} className="nav-link">
                    {" "}
                    <h4>
                      <strong
                        style={{
                          color: "white",
                        }}
                      >
                        About
                      </strong>
                    </h4>
                  </Link>
                </li>
                <li className="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/getapp"} className="nav-link">
                    {" "}
                    <h4>
                      <strong
                        style={{
                          color: "white",
                        }}
                      >
                        Get App
                      </strong>
                    </h4>
                  </Link>
                </li>
                <li className="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/volunteer"} className="nav-link">
                    {" "}
                    <h4>
                      <strong
                        style={{
                          color: "white",
                        }}
                      >
                        Volunteer
                      </strong>
                    </h4>
                  </Link>
                </li>
                <li className="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/contact"} className="nav-link">
                    {" "}
                    <h4>
                      <strong
                        style={{
                          color: "white",
                        }}
                      >
                        Contact
                      </strong>
                    </h4>
                  </Link>
                </li>
                <li className="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/donate"} className="nav-link">
                    {" "}
                    <h4>
                      <strong
                        style={{
                          color: "white",
                        }}
                      >
                        Donate
                      </strong>
                    </h4>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
