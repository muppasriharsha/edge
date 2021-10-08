import React from "react";
import "./footer.Modules.css";

const Footer = () => {
  return (
    <>
      <div className="maindiv">
        <img src="./Logos/Footer/LOGO/LOGO@2x.PNG" alt="" className="footerimage1" />
        <div className="headings">
          <div className="box1">
            <hr className="line" /> <span className="foot">HEADQUATER</span>
            <br />
            <br />
            <img
              src="./Logos/Footer/Location/Location@2x.png"
              alt="muppa"
              className="footerlocationicon"
            />
            <div className="details">
              {" "}
              5055 Keller Springs Rd Suite 150 Addison, TX 75001
            </div>
            <br />
            <img
              src="./Logos/Footer/phone call/phone call@2x.png"
              alt="muppa"
              className="phone_call"
            />
            <div className="numbers">
              USA + 1 855 585 7344 <br />
              India + 91 40 4286 5599 <br />
              UAE + 971 4 3132770
            </div>
            <br />
            <img
              src="./Logos/Footer/Email/Email@2x.png"
              alt="muppa"
              className="footerEmail"
            />
            <span className="mail"> info@appstekcorp.com</span>
          </div>

          <div className="box2">
            <hr className="line" /> <span className="foot"> OUR LOCATION</span>
            <br />
            <br />
            <img
              src="./Logos/Footer/maps/maps@2x.png"
              alt="muppa"
              className="map"
            />
            <span className="footerlocation">
              <img
                src="./Logos/Footer/Location/Location@2x.png"
                alt="muppa"
                className="footerlocationicon"
              />
             <span className="footernum"> USA: + 1 855 585 7344</span>
              <br />
              <br />
              <img
                src="./Logos/Footer/Location/Location@2x.png"
                alt="muppa"
                className="footerlocationicon"
              />
              <span className="footernum">India: + 91 40 4286 5599</span>
              <br />
              <br />
              <img
                src="./Logos/Footer/Location/Location@2x.png"
                alt="muppa"
                className="footerlocationicon"
              />
             <span className="footernum"> UAE: + 971 4 3132770</span>
            </span>
            <br />
            <br />
          </div>

          <div className="box3">
            <hr className="line" /> <span className="foot">LINKS</span>
            <br />
            <br />
            <span className="footeraboutus">
              
              About
              
              Services
              
              Portfolio
              
              Careers
              
              Contact
            </span>
          </div>

          <div className="box4">
            <hr className="line" /> <span className="foot">GET IN TOUCH</span>
            <br />
            <br />
            <span className="contact">
              {" "}
              Connect with us
              <br />
              <br />
            </span>
            <div  className="footericons">
              <img
                src="./Logos/Footer/facebook/facebook@2x.png"
                alt="muppa"
                
              />
              <img
                src="./Logos/Footer/google/google@2x.png"
                alt="muppa"
                
              />
              <img
                src="./Logos/Footer/instagram/instagram@2x.png"
                alt="muppa"
                
              />
              <img
                src="./Logos/Footer/linkedin/linkedin@2x.png"
                alt="muppa"
            
              />
              <img
                src="./Logos/Footer/twitter/twitter@2x.png"
                alt="muppa"
               
              />
              <img
                src="./Logos/Footer/youtube/youtube@2x.png"
                alt="muppa"
                
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footercopy">
        <div className="footercopyright" style={{backgroundColor:"#212121"}}>
          Copyright 2021. Edge Works. All Rights Reserved.
        </div>{" "}
      </div>
    </>
  );
};
export default Footer;
