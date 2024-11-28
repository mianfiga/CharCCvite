import React, { useState } from "react";
import "./StatButton.css";
import { MINUS, PLUS, SELMINUS, SELPLUS } from "../../helpers/utility_icons";

function StatButton({ statIcon, statValue }) {
  const [minusIcon, setMinusIcon] = useState(MINUS);
  const [plusIcon, setPlusIcon] = useState(PLUS);

  const handleMinusClick = () => {
    if (minusIcon === SELMINUS) {
      setMinusIcon(MINUS);
    } else {
      setMinusIcon(SELMINUS);
      setPlusIcon(PLUS);
    }
  };

  const handlePlusClick = () => {
    if (plusIcon === SELPLUS) {
      setPlusIcon(PLUS);
    } else {
      setPlusIcon(SELPLUS);
      setMinusIcon(MINUS);
    }
  };

  return (
    <div className="stat_button_container">
      <img src={statIcon} alt="icon" />
      <div className="advantage_container">
        <img src={minusIcon} alt="minus" onClick={handleMinusClick} />
        <span>{statValue}</span>
        <img src={plusIcon} alt="plus" onClick={handlePlusClick} />
      </div>
    </div>
  );
}

export default StatButton;
