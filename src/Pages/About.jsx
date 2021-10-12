import React from "react";
import "./About.modules.css";
import dgif from "../Assets/Images/dgif.png";
export default function About() {
  return (
    <div className="about"   id="About">
      <div className="abt">
        <p className="abt-frst">ABOUT</p>
        <h1>
          We are more than you <span>imagine</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs. The passage is
          attributed to an unknown typesetter in the 15th century who is thought
          to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
          use in a type specimen book. It usually begins with:
          <br />
          <br />
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
          purpose of lorem ipsum is to create a natural looking block of text
          (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy.
        </p>
      </div>
      <div className="mission-para">
        <h1 className="mission-img">
          Our
          <br /> Mission & Vision <br />
          <span id="blue-sucess">Successful Business</span>
        </h1>
        <p>
          Our mission is to provide expertise, efficiency, and excellence in
          service to enhance the digital and cloud ecosystems of our customers.
          With expert analysis, creative design and development, implementation,
          and support, the Eficens team will help clients to deliver
          market-defining, high quality solutions that create value and reliable
          competitive advantage to customers around the globe.
        </p>
      </div>
    </div>
  );
}
