import React from "react";

const TeamMember = (props) => {
  const { img, memberName } = props;

  return (
    <div className="col-lg-3 col-md-6">
      <div className="single_volenteer">
        <div className="volenteer_thumb">
          <img src={img} alt="" />
        </div>
        <div className="voolenteer_info d-flex align-items-end">
          <div className="social_links">
            <ul>
              <li>
                <button href="#">
                  {" "}
                  <i className="fa fa-facebook" />{" "}
                </button>
              </li>
              <li>
                <button href="#">
                  {" "}
                  <i className="fa fa-linkedin" />{" "}
                </button>
              </li>
              <li>
                <button href="#">
                  {" "}
                  <i className="fa fa-twitter" />{" "}
                </button>
              </li>
            </ul>
          </div>
          <div className="info_inner">
            <h5>{memberName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamMember;
