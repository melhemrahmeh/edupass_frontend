import React from "react";
import teamMembers from "../../assets/members.json";
import TeamMember from "../../assets/TeamMember";
const OurTeam = () => {
  return (
    <div className="our_volunteer_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Our Team</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers
            .filter((member) => member.role === "TeamMember")
            .map((member) => {
              return (
                <TeamMember
                  memberName={member.name}
                  img={require("../..//assets/img/team/" + member.id + ".png")}
                  key={member.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
