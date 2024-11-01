import React from "react";
import "./StatButton.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";

function StatButton({ statIcon, statValue }) {
  return (
    <>
      <div className="stat_button_container">
        <img src={statIcon} alt="icon" />
        <div className="advantage_container">
          <img src={MINUS} alt="minus" />
          <span>{statValue}</span>
          <img src={PLUS} alt="plus" />
        </div>
      </div>
    </>
  );
}

export default StatButton;
