import React from "react";
import "./BodyCarousel.css";
import { Carousel } from "antd";
import bodies from "../../helpers/bodies";

function BodyCarousel() {
  return (
    <>
      <div className="body_carousel_container">
        <Carousel
          arrows
          dotPosition="top"
          infinite={false}
          dots={false}
          style={{ height: "100%" }}
        >
          {bodies.map((b) => (
            <div className="body_container">
              <img src={b.src} alt="body" className="body" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default BodyCarousel;
