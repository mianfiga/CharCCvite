import React from "react";
import "./MenuBarButton.css";

function MenuBarButton({ image, text, isSelected, path }) {
  return (
    <>
      <div className={`bar_button_container ${isSelected ? "selected" : ""}`}>
        <div className="bar_image_container">
          <a href={path}><img src={image} alt="add" /></a>
        </div>
        <span>{text}</span>
      </div>
    </>
  );
}

export default MenuBarButton;
