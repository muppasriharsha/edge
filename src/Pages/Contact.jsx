import React from "react";
import "./contact.Modules.css";

const Contact = () => {
  return (
    <div className="contact3">
      <div className="contacthead">
        <hr className="line" />
         <span className="abc">CONTACT</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <div className="touch">Get in Touch</div>
          <br />
          <div className="touchdes">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
            <br />
            <br />
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
            purpose of lorem ipsum is to create a natural looking block of text
            (sentence, paragraph, page, etc.) that doesn't distract from the
            layout. A practice not without controversy. , laying out pages with
            meaningless filler text can be very useful when the focus is meant
            to be on design, not content. The passage experienced a surge in
            popularity during the 1960s when Letraset used it on their
            dry-transfer sheets, and again during the 90s as desktop publishers
            bundled the text with their software. Today it's seen all around the
            web; on templates, websites, and stock designs. Use our generator to
            get your own, or read on for the authoritative history of lorem
            ipsum.empor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className="contactlocation">
          <img
            src="./Logos/Footer/Location/Location@2x.png"
            alt="muppa"
            className="contactimage"
          ></img>

          <div className="contactour">Our Location</div>
          <div className="contactaddress">
            
            5055 Keller Springs Rd <br />
            Suite 150 Addison, TX 75001
          </div>
        </div>

        <div className="contactemail">
          <img
            src="./Logos/Footer/Email/Email@2x.png"
            alt="muppa"
            className="contactimg"
          />

          <div className="contactus"> Email us</div>
          <div className="contactmail"> info@appstekcorp.com</div>
        </div>

        <div className="contactnumber">
          <img
            src="./Logos/Footer/phone call/phone call@2x.png"
            alt="muppa"
            className="contactphone"
          />
          <div className="contactcall">Call us</div>
          <div className="contactnum">
            USA + 1 855 585 7344 India + 91 40 4286 5599 UAE + 971 4 3132770
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
