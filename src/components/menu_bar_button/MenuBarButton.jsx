import React from "react";
import "./MenuBarButton.css";

function MenuBarButton({ image, text, isSelected }) {
  return (
    <>
      <div className={`bar_button_container ${isSelected ? "selected" : ""}`}>
        <div className="bar_image_container">
          <img src={image} alt="add" />
        </div>
        <span>{text}</span>
      </div>
    </>
  );
}

export default MenuBarButton;
