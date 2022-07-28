import React from "react";
import app1 from "../assets/img/app1.jpg";
import app2 from "../assets/img/app2.jpg";
import app3 from "../assets/img/app3.jpg";

const GetAppBody = () => {
  return (
    <div>
      <h1>Dictionary</h1>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <img
          src={app1}
          style={{
            height: "5%",
            width: "15%",
          }}
        ></img>
      </div>
      <h1>Lessons</h1>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <img
          src={app2}
          style={{
            height: "5%",
            width: "15%",
          }}
        ></img>
      </div>
      <h1>Chat</h1>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >        <img
          src={app3}
          style={{
            height: "5%",
            width: "15%",
          }}
        ></img>
      </div>
    </div>
  );
};

export default GetAppBody;
