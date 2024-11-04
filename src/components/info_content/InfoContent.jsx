import React from "react";
import "./InfoContent.css";
import { PREVIOUS } from "../../helpers/utility_icons";

function InfoContent() {
  return (
    <>
      <div className="info_content_container">
        <div className="previous_container">
          <img src={PREVIOUS} alt="img" />
        </div>
        <div className="info_display_medium">
          <span>NAME</span>
        </div>
        <div className="info_display_small_container">
          <div className="info_display_small">
            <span>RACE</span>
          </div>
          <div className="info_display_small">
            <span>SUBRACE</span>
          </div>
          <div className="info_display_small">
            <span>CLASS</span>
          </div>
        </div>
        <div className="info_display_number_container">
          <div className="info_number">
            <span className="info_number_text">AGE</span>
            <div className="info_number_number">
              <span>0</span>
            </div>
          </div>
          <div className="info_number">
            <span className="info_number_text">LEVEL</span>
            <div className="info_number_number">
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="info_display_medium">
          <span>FACTIONS</span>
        </div>
        <div className="info_display_medium">
          <span>PERSONALITY TRAITS</span>
        </div>
        <div className="info_display_medium">
          <span>IDEALS</span>
        </div>
        <div className="info_display_medium">
          <span>FLAWS</span>
        </div>
        <div className="info_display_medium">
          <span>BONDS</span>
        </div>
        <div className="info_display_medium">
          <span>BACKGROUND</span>
        </div>
        <div className="info_display_large">
          <span>BACKSTORY</span>
        </div>
      </div>
    </>
  );
}

export default InfoContent;
