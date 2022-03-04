import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import aar from "../public/partners/aar.png";
// import adventure from "../public/partners/adventure.png";
// import allen from "../public/partners/allen.png";
import cic from "../public/partners/cic.png";
// import concord from "../public/partners/concord.png";
import heritage from "../public/partners/heritage.png";
// import jcc from "../public/partners/jcc.png";
import madison from "../public/partners/madison.png";
import mic from "../public/partners/mic.png";
// import occidental from "../public/partners/occidental.png";
import pioneer from "../public/partners/pioneer.png";
// import reinit from "../public/partners/reinit.png";
// import rochem from "../public/partners/rochem.png";
// import savvy from "../public/partners/savvy.png";
import uap from "../public/partners/uap.png";

const imageLoader = ({ src }) => {
  return `${src}`;
};

export default function Partners() {
  const [nav2, setNav2] = useState();

  return (
    <div>
      <Slider
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
        slidesToScroll={1}
        autoplay={true}
        arrows={true}
      >
        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={aar}
            className="object-contain inline-block mx-auto w-auto"
            height={100}
          />
        </div>

        {/* <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={adventure}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}
        {/* 
        <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={allen}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={cic}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div>

        {/* <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={concord}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={heritage}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div>

        {/* <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={jcc}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={madison}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div>

        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={mic}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div>

        {/* <div>
          {" "}
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={occidental}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={pioneer}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div>

        {/* <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={reinit}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        {/* <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={rochem}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        {/* <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={savvy}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div> */}

        <div className="text-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={uap}
            className="object-contain inline-block mx-auto w-auto"
            width={100}
          />
        </div>
      </Slider>
    </div>
  );
}
