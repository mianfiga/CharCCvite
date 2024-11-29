import React, { useState } from "react";
import { Carousel } from "antd";
import "./HeadCarousel.css";
import faces from "../../helpers/faces";

function HeadCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (current) => {
    setCurrentSlide(current); // Actualiza el estado con el índice de la diapositiva seleccionada
    console.log("Slide actual:", current);
  };
  return (
    <>
      <div className="head_carousel_container">
        <Carousel arrows dotPosition="top" infinite={false} dots={false} afterChange={handleAfterChange}>
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
