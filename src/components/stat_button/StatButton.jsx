import React, { useState } from "react";
import "./StatButton.css";
import {
  MINUS,
  PLUS,
  PREVIOUS,
  SELMINUS,
  SELPLUS,
} from "../../helpers/utility_icons";

function StatButton({ statIcon, statValue }) {
  const [minusIcon, setMinusIcon] = useState(MINUS);
  const [plusIcon, setPlusIcon] = useState(PLUS);
  const [expanded, setExpanded] = useState(false);
  const [firstDiceResult, setFirstDiceResult] = useState(null);
  const [secondDiceResult, setSecondDiceResult] = useState(null);
  const [isAnyButtonSelected, setIsAnyButtonSelected] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function shrink(e) {
    e.stopPropagation();
    setExpanded(false);
  }

  const handleMinusClick = () => {
    if (minusIcon === SELMINUS) {
      setMinusIcon(MINUS);
      setIsAnyButtonSelected(false);
    } else {
      setMinusIcon(SELMINUS);
      setPlusIcon(PLUS);
      setIsAnyButtonSelected(true);
    }
  };

  const handlePlusClick = () => {
    if (plusIcon === SELPLUS) {
      setPlusIcon(PLUS);
      setIsAnyButtonSelected(false);
    } else {
      setPlusIcon(SELPLUS);
      setMinusIcon(MINUS);
      setIsAnyButtonSelected(true);
    }
  };

  const handleThrowClick = () => {
    const randomFirstDice = Math.floor(Math.random() * 20) + 1;
    const randomSecondDice = Math.floor(Math.random() * 20) + 1;
    setFirstDiceResult(randomFirstDice);
    setSecondDiceResult(randomSecondDice);
  };

  const getDiceResult = () => {
    if (firstDiceResult !== null && secondDiceResult !== null) {
      if (plusIcon === SELPLUS) {
        return Math.max(firstDiceResult, secondDiceResult);
      } else if (minusIcon === SELMINUS) {
        return Math.min(firstDiceResult, secondDiceResult);
      }
    }
    return firstDiceResult || "1";
  };

  return (
    <div
      className={`stat_button_container ${
        expanded ? "stat_button_expanded" : ""
      }`}
      onClick={expand}
    >
      <img src={statIcon} alt="icon" />
      <div className="advantage_container">
        <img src={minusIcon} alt="minus" onClick={handleMinusClick} />
        <span>{statValue}</span>
        <img src={plusIcon} alt="plus" onClick={handlePlusClick} />
      </div>
      <div
        className={`stat_button_content ${
          expanded ? "" : "stat_button_content_hidden"
        }`}
      >
        <div className="stat_previous_container" onClick={shrink}>
          <img src={PREVIOUS} alt="img" />
        </div>
        <div className="stat_button_throw">
          <div className="stat_button_throw_dice">
            <div className="first_dice">
              <div className="dice_result">{firstDiceResult || "1"}</div>
            </div>
            {isAnyButtonSelected && (
              <div className="second_dice">
                <div className="dice_result">{secondDiceResult || "1"}</div>
              </div>
            )}
          </div>
          <button
            className="stat_button_throw_button"
            onClick={handleThrowClick}
          >
            THROW
          </button>
          <div className="throw_result">
            THE RESULT IS <br />
            {getDiceResult()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatButton;
