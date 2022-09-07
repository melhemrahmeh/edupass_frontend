import React from "react";

const OurSponsors = () => {
  return (
    <section className="blog_area single-post-area section-padding">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section_title text-center mb-55">
            <h3>
              <span>Our Sponsors</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <div className="single-post">
              <div className="feature-img">
                <img
                  className="img-fluid"
                  src={require("../..//assets/img/sponsor.png")}
                  alt=""
                />
              </div>
              <div className="blog_details">
                <h2>The Resolution Project</h2>
                <p className="excert">
                  The Resolution Project is dedicated to fostering youth
                  leadership <br />
                  development around the world through collaborative social
                  entrepreneurship.
                  <br />
                  They inspire young changemakers through their proven model of
                  Social Venture
                  <br />
                  Challenges and Resolution Fellowships!
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
