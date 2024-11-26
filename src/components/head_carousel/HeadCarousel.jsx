import React from "react";
import { Carousel } from "antd";
import "./HeadCarousel.css";
import faces from "../../helpers/faces";

function HeadCarousel() {
  return (
    <>
      <div className="head_carousel_container">
        <Carousel arrows dotPosition="top" infinite={false} dots={false}>
          {faces.map((f) => (
            <div>
              <div className="head_container">
                <img src={f.src} alt="" className="head" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default HeadCarousel;
