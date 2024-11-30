import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "antd";
import "./BodyCarousel.css";
import bodies from "../../helpers/bodies";

function BodyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const appearance = JSON.parse(localStorage.getItem("character_appearance")) || {};
    const savedBody = appearance.body ? parseInt(appearance.body.split(".")[0], 10) : 0;
    setCurrentSlide(savedBody);
    if (carouselRef.current) {
      carouselRef.current.goTo(savedBody, false);
    }
  }, []);
  const handleAfterChange = (current) => {
    setCurrentSlide(current);
    const appearance = JSON.parse(localStorage.getItem("character_appearance")) || {};
    appearance.body = `${current}.svg`;
    localStorage.setItem("character_appearance", JSON.stringify(appearance));
  };

  return (
    <div className="body_carousel_container">
      <Carousel
        ref={carouselRef}
        arrows
        dotPosition="top"
        infinite={false}
        dots={false}
        afterChange={handleAfterChange}
      >
        {bodies.map((b, index) => (
          <div key={index} className="body_container">
            <img src={b.src} alt={`body ${index}`} className="body" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BodyCarousel;
