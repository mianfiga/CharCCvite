import React from "react";
import { Carousel } from "antd";
import "./HeadCarousel.css";

function HeadCarousel() {
  return (
    <>
      <div className="head_carousel_container">
        <Carousel arrows dotPosition="top" infinite={false} dots={false}>
          <div>
            <div className="head_container"><img className="head" src="/icons/Character/faceTest.svg" alt="hola" /></div>
          </div>
          <div>
          <div className="head_container"><img className="head" src="/icons/Character/faceBeard.svg" alt="hola" /></div>
          </div>
          <div>
          <div className="head_container"><img className="head" src="/icons/Character/faceSilly.svg" alt="hola" /></div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HeadCarousel;
