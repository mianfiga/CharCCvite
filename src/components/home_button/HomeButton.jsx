import React, { useState } from "react";
import "./HomeButton.css";
import { PREVIOUS } from "../../helpers/utility_icons";

function HomeButton({ image, text, children, className }) {
  const [expanded, setExpanded] = useState(false);

  function expand(){
    setExpanded(true);
  }

  function shrink(e){
    e.stopPropagation();
    setExpanded(false);
  }

  return (
    <div className={`button_container ${className} ${expanded ? 'button_expanded' : ""}`} onClick={expand}>
      <div className={`previous_container ${expanded ? "" : 'previous_hidden'}`} onClick={shrink}>
          <img src={PREVIOUS} alt="img" />
      </div>
      <img src={image} alt="icon" />
      <span className="button_text">{text}</span>
      {expanded ? (
        <div className="button_content">
        {children}
      </div>
      ) : null }
    </div>
  );
}

export default HomeButton;
