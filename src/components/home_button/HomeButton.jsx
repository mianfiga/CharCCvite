import React from "react";
import "./HomeButton.css";

function HomeButton({ image, text, children }) {
  return (
    <div className="button_container">
      <img src={image} alt="icon" />
      <span className="button_text">{text}</span>
      <div className="button_content">
        {children}
      </div>
    </div>
  );
}

export default HomeButton;
