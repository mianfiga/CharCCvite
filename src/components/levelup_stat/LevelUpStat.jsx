import React from "react";
import "./LevelUpStat.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";

function LevelUpStat({ statImage, statValue, onIncrease, onDecrease }) {
  return (
    <div className="levelup_stat_container">
      <img src={statImage} alt="img" />
      <div className="stat_up_container">
        <img
          src={MINUS}
          alt="minus"
          onClick={onDecrease}
          disabled={statValue <= 0}
        />
        <span>{statValue}</span>
        <img
          src={PLUS}
          alt="plus"
          onClick={onIncrease}
          disabled={statValue > 30}
        />
      </div>
    </div>
  );
}

export default LevelUpStat;
