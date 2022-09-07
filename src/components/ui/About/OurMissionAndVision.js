import React from "react";
import logo from "../..//assets/img/logo.jpg";

const OurMissionAndVision = () => {
  return (
    <>
      {/* latest_activites_area_start  */}
      <div className="latest_activites_area">
        <div className="row">
          <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
            <a
              className="popup-video"
              href="https://edupass-frontend.netlify.app/"
            >
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="activites_info">
                  <div className="section_title">
                    <h3>
                      {" "}
                      <span>Our mission and vision: </span>
                    </h3>
                  </div>
                  <p className="para_1">
                    Our vision is to assist displaced students by providing them
                    with access to high quality education.
                  </p>
                  <p className="para_2">
                    Our mission is to collect and create visual resources to
                    ease the academic journey of displaced students using high
                    tech-based solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMissionAndVision;
