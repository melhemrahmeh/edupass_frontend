import React from "react";
import app1 from "../assets/img/app/app1.jpg";
import app2 from "../assets/img/app/app2.jpg";
import app3 from "../assets/img/app/app3.jpg";
import app4 from "../assets/img/app/app4.jpg";

const GetAppBody = () => {
  return (
    <div style={{ padding: "70px", margin: "auto" }}>
      <div style={{ margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Lecture and summaries</h1>
        <img
          src={app1}
          style={{
            textAlign: "center",
            height: "20%",
            width: "50%",
          }}
          alt=""
        ></img>
        <div>
          <h3 style={{ paddingBottom: "50px", paddingTop: "30px" }}>
            Short explanatory videos explaining key concepts of each lesson
            <br />
            in addition to a pdf summary to further explanation
          </h3>
        </div>
      </div>
      <div>
        <h1>Virtual assistantship</h1>
        <img
          src={app2}
          style={{
            height: "20%",
            width: "50%",
          }}
          alt=""
        ></img>
        <div>
          <h3 style={{ paddingBottom: "50px", paddingTop: "30px" }}>
            Students can submit questions and have a discussion with our
            <br />
            virtual assistants through the chat feature on our application
          </h3>
        </div>
      </div>
      <div>
        <h1>Dictionary</h1>
        <img
          src={app3}
          style={{
            height: "20%",
            width: "50%",
          }}
          alt=""
        ></img>
        <div>
          <h3 style={{ paddingBottom: "50px", paddingTop: "30px" }}>
            Students will have a list of keywords for each lesson with Arabic
            translation
          </h3>
        </div>
      </div>
      <div>
        <h1>Assessment</h1>
        <img
          src={app4}
          style={{
            height: "20%",
            width: "50%",
          }}
          alt=""
        ></img>
        <div>
          <h3 style={{ paddingBottom: "50px", paddingTop: "30px" }}>
            Assessments and quizzes are available for students to assess their
            level
            <br />
            where they receive a report after each assessment.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GetAppBody;
