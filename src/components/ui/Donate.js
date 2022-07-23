import React from "react";

const Donate = () => {
  return (
    <div data-scroll-index={1} className="make_donation_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h1>
              <strong>"Happiness doesn't result from what we get, but from what we give." <br /> <br /> Ben Carson</strong>
              </h1>
            </div>
            <div className="section_title text-center mb-55">
              <h3>
                <span>Make a Donation</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="donate_now_btn text-center">
              <a href="#" className="boxed-btn4">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
