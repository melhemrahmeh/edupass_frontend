import React from "react";
import app1 from "../assets/img/app1.jpg";
import app2 from "../assets/img/app2.jpg";
import app3 from "../assets/img/app3.jpg";

const GetAppBody = () => {
  return (
    <div>
      <div>
      <h1
         style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
      >Dictionary</h1>
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
            height: "300px",
            width: "300px",
          }}
        ></img>
      </div>
      <h3
         style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>this is the dictionary screen</h3>

      <h1
         style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
      >Lessons</h1>
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
            height: "300px",
            width: "300px",
          }}
        ></img>
      </div>
      <h3
         style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>this is the lessons screen</h3>

      <h1
         style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
      > Chat</h1>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >   <img
          src={app3}
          style={{
            height: "300px",
            width: "300px",
          }}
        ></img>
              <h3
         style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>this is the chatting screen</h3>
      </div>
      </div>
    </div>
  );
};

export default GetAppBody;
