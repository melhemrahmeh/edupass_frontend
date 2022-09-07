import React from "react";
import teachers from "../../assets/members.json";
import TeamMember from "../../assets/TeamMember";
const OurTeachers = () => {
  return (
    <div className="our_volunteer_area section_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-55">
              <h3>
                <span>Our teachers</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teachers
            .filter((teacher) => teacher.role === "teacher")
            .map((teacher) => {
              return (
                <TeamMember
                  memberName={teacher.name}
                  img={require("../..//assets/img/teacher/" +
                    teacher.id +
                    ".png")}
                  key={teacher.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
