import React from "react";
import { Carousel } from "antd";
import "./HeadCarousel.css";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "black",
  lineHeight: "160px",
  textAlign: "center",
  width: "80vw",
};

function HeadCarousel() {
  return (
    <>
      <div className="head_carousel_container">
        <Carousel arrows dotPosition="top" infinite={false} dots={false}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HeadCarousel;
