import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import aar from "../public/partners/aar.png";
import adventure from "../public/partners/adventure.png";
import allen from "../public/partners/allen.png";
import cic from "../public/partners/cic.png";
import concord from "../public/partners/concord.png";
import heritage from "../public/partners/heritage.png";
import jcc from "../public/partners/jcc.png";
import madison from "../public/partners/madison.png";
import mic from "../public/partners/mic.png";
import occidental from "../public/partners/occidental.png";
import pioneer from "../public/partners/pioneer.png";
import reinit from "../public/partners/reinit.png";
import rochem from "../public/partners/rochem.png";
import savvy from "../public/partners/savvy.png";
import uap from "../public/partners/uap.png";

export default function Logos() {
  const [nav2, setNav2] = useState();

  return (
    <div>
      <Slider
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        slidesToScroll={1}
        autoplay={true}
        arrows={true}
      >
        <div>
          <Image src={aar} className="object-contain h-48 w-96" width={150} />
        </div>

        <div>
          <Image
            src={adventure}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image src={allen} className="object-contain h-48 w-96" width={150} />
        </div>

        <div>
          <Image src={cic} className="object-contain h-48 w-96" width={150} />
        </div>

        <div>
          <Image
            src={concord}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image
            src={heritage}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image src={jcc} className="object-contain h-48 w-96" width={150} />
        </div>

        <div>
          <Image
            src={madison}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image src={mic} className="object-contain h-48 w-96" width={150} />
        </div>

        <div>
          {" "}
          <Image
            src={occidental}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image
            src={pioneer}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image
            src={reinit}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image
            src={rochem}
            className="object-contain h-48 w-96"
            width={150}
          />
        </div>

        <div>
          <Image src={savvy} className="object-contain h-48 w-96" width={150} />
        </div>

        <div>
          <Image src={uap} className="object-contain h-48 w-96" width={150} />
        </div>
      </Slider>
    </div>
  );
}
