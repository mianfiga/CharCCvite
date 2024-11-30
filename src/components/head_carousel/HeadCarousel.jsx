import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "antd";
import "./HeadCarousel.css";
import faces from "../../helpers/faces";

function HeadCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const appearance = JSON.parse(localStorage.getItem("character_appearance")) || {};
    const savedHead = appearance.head ? parseInt(appearance.head.split(".")[0], 10) : 0;
    setCurrentSlide(savedHead);
    if (carouselRef.current) {
      carouselRef.current.goTo(savedHead, false);
    }
  }, []);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
    const appearance = JSON.parse(localStorage.getItem("character_appearance")) || {};
    appearance.head = `${current}.svg`;
    localStorage.setItem("character_appearance", JSON.stringify(appearance));
  };

  return (
    <div className="head_carousel_container">
      <Carousel
        ref={carouselRef}
        arrows
        dotPosition="top"
        infinite={false}
        dots={false}
        afterChange={handleAfterChange}
      >
        {faces.map((f, index) => (
          <div key={index}>
            <div className="head_container">
              <img src={f.src} alt={`face ${index}`} className="head" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HeadCarousel;
