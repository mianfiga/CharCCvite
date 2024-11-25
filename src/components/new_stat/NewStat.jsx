import React from "react";
import "./NewStat.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";

function NewStat({ statIcon, statName, statValue }) {
  return (
    <>
      <div className="new_stat_container">
        <img src={statIcon} alt="icon" />
        <span className="new_stat_name">{statName}</span>
        <div className="new_stat_value">
          <img src={MINUS} alt="minus" />
          <span>{statValue}</span>
          <img src={PLUS} alt="plus" />
        </div>
      </div>
    </>
  );
}

export default NewStat;
