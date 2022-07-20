import React from "react";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4 ">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="https://edupass-frontend.netlify.app/">
                    <img
                      src={logo}
                      style={{
                        height: "30%",
                        width: "30%",
                      }}
                      alt=""
                    />
                  </a>
                </div>
                <p className="address_text">
                  A non-profit educational platform <br /> that embodies
                  adaptive learning to help <br /> Syrian refugees integrate in
                  Lebanese schools.
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="https://edupass-frontend.netlify.app/">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://edupass-frontend.netlify.app/">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://edupass-frontend.netlify.app/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://edupass-frontend.netlify.app/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Services</h3>
                <ul className="links">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/getapp"}>Get App</Link>
                  </li>
                  <li>
                    <Link to={"/volunteer"}>Volunteer</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={"/donate"}>Donate</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Contacts</h3>
                <div className="contacts">
                  <p>
                    +961 71 5789 832
                    <br />
                    +961 71 5789 832
                    <br />
                    edupass.support@gmail.com <br />
                    edupass.support@gmail.com <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Top News</h3>
                <ul className="news_links">
                  <li>
                    <div className="thumb">
                      <a href="https://edupass-frontend.netlify.app/">
                        <img src="img/news/news_1.png" alt="" />
                      </a>
                    </div>
                    <div className="info">
                      <a href="https://edupass-frontend.netlify.app/">
                        <h4>School for African Childrens</h4>
                      </a>
                      <span>Jun 12, 2019</span>
                    </div>
                  </li>
                  <li>
                    <div className="thumb">
                      <a href="https://edupass-frontend.netlify.app/">
                        <img src="img/news/news_2.png" alt="" />
                      </a>
                    </div>
                    <div className="info">
                      <a href="https://edupass-frontend.netlify.app/">
                        <h4>School for African Childrens</h4>
                      </a>
                      <span>Jun 12, 2019</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="row">
            <div className="bordered_1px " />
            <div className="col-xl-12">
              <p className="copy_right text-center"></p>
              <p>
                Copyright © All rights reserved | Edu Pass - Education is My
                PassPort
              </p>
              <p />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
