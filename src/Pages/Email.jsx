import React from "react";
import "./email.Modules.css";

const Email = () => {
  return (
    <div className="mess">
      <div className="mail1">
        <img src="./Logos/Email/Group@2x.png" alt="" className="img" />
        <div style={{ paddingTop: "80px",marginRight:"70px" }}>
          <form>
            <div className="ename">Your Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="enter"
            />
            <div className="ename">Your Email</div>
            <input
              type="email"
              name="email"
              placeholder="Enter your mail id"
              className="enter"
            />
            <div className="ename">Your Message</div>
            <textarea
              type="textarea"
              name="text"
              placeholder="Enter your message"
              className="textarea"
            />
            <br />
            <br />
            <button className="submit">
              <span className="emailsubmit">submit</span></button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Email;
