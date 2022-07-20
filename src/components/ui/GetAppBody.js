import React from "react";
import app1 from "../assets/img/app1.jpg";
import app2 from "../assets/img/app2.jpg";
import app3 from "../assets/img/app3.jpg";

const GetAppBody = () => {
  return (
    <div>
      <div>
        <h1>DICTIONARY</h1>
        <img
          src={app1}
          style={{
            height: "20%",
            width: "35%",
          }}
        ></img>
      </div>
      <div>
        <h1>LESSONS</h1>
        <img
          src={app2}
          style={{
            height: "20%",
            width: "35%",
          }}
        ></img>
      </div>
      <div>
        <h1>CHAT</h1>
        <img
          src={app3}
          style={{
            height: "20%",
            width: "35%",
          }}
        ></img>
      </div>
    </div>
  );
};

export default GetAppBody;
