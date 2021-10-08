import React from "react";
import "./Servfeatures.modules.css";
import build from "../Assets/Images/edgeworks/build.png";
import cld from "../Assets/Images/edgeworks/cld.png";

import gp from "../Assets/Images/edgeworks/gp.png";

import gp3 from "../Assets/Images/edgeworks/gp2.png";

import mec from "../Assets/Images/edgeworks/mec.png";

export default function Servfeatures() {
  return (
    <div className="serv-features">
      <div>
        <div>
          <img src={gp3} />
          <h1>Staff Augmentation</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have.
          </p>
          <button className="bttns servbtn">read more</button>
        </div>
        <div>
          <img src={gp} />
          <h1>Staff Augmentation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have.
          </p>
          <button className="bttns servbtn">read more</button>
        </div>
        <div>
          <img src={cld} />
          <h1>Staff Augmentation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have.
          </p>
          <button className="bttns servbtn">read more</button>
        </div>
      </div>
      <div>
        <div>
          <img src={build} />
          <h1>Staff Augmentation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have.
          </p>
          <button className="bttns servbtn">read more</button>
        </div>
        <div>
          <img src={mec} />
          <h1>Staff Augmentation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have.
          </p>
          <button className="bttns servbtn">read more</button>
        </div>
        <div>
          <img src={gp3} />
          <h1>Staff Augmentation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tLorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage
            is attributed to an unknown typesetter in the 15th century who is
            thought to have.
          </p>
          <button className="bttns servbtn">read more</button>
        </div>
      </div>
    </div>
  );
}
