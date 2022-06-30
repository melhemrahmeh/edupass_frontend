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
            class="navbar navbar-expand-lg navbar navbar-light"
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
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="nav navbar-nav navbar-right" id="navigation">
              <li class="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/"} class="nav-link">
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
                <li class="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/about"} class="nav-link">
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
                <li class="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/getapp"} class="nav-link">
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
                <li class="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/volunteer"} class="nav-link">
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
                <li class="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/contact"} class="nav-link">
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
                <li class="nav-item my-2 my-lg-0" style={{marginLeft : '10px'}}>
                  <Link to={"/donate"} class="nav-link">
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
