import React from "react";
import "./HomeContent.modules.css";
import buld from "../Assets/Images/buld.png";
import meter from "../Assets/Images/meter.png";
import handset from "../Assets/Images/handset.png";
function HomeContent() {
  return (
    <div className="home-content">
      <div className="bgimg"></div>
      <div className="heading">
        We bring the right people together to challenge established thinking and
        drive <span>transformation.</span>
      </div>
      <div className="us-features">
        <div className="feat">
          <img src={buld}></img>
          <h2>We Innovate</h2>
          <p>We innovate systematically, continuously and successfully.</p>
          <a>Read more</a>
        </div>
        <div className="feat">
          <img src={meter}></img>
          <h2>Performance</h2>
          <p>Performance is about solving problems and building business.</p>
          <a>Read more</a>
        </div>
        <div className="feat">
          <img src={handset}></img>
          <h2>A Full Service</h2>
          <p>We are a full service business solutions provider.</p>
          <a>Read more</a>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
