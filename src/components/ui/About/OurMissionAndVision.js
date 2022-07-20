import React from "react";
import logo from "../..//assets/img/logo.jpg";

const OurMissionAndVision = () => {
  return (
    <>
      {/* latest_activites_area_start  */}
      <div className="latest_activites_area">
        <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
          <a
            className="popup-video"
          >
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <div className="activites_info">
                <div className="section_title">
                  <h3>
                    {" "}
                    <span>Watch Our Latest</span>
                    <br />
                    Activities
                  </h3>
                </div>
                <p className="para_1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                  enim minim veniam, quis nostrud exercitation.
                </p>
                <p className="para_2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                  enim minim veniam, quis nostrud exercitation. tempor
                  incididunt ut labore dolore magna aliqua. enim minim veniam,
                  quis nostrud exercitation.
                </p>
                <a href="#" data-scroll-nav={1} className="boxed-btn4">
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMissionAndVision;
