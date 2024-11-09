import React from "react";
import "./LevelUpStat.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";

function LevelUpStat({ statImage, statValue }) {
  return (
    <>
      <div className="levelup_stat_container">
        <img src={statImage} alt="img" />
        <div className="advantage_container">
          <img src={MINUS} alt="minus" />
          <span>{statValue}</span>
          <img src={PLUS} alt="plus" />
        </div>
      </div>
    </>
  );
}

export default LevelUpStat;
