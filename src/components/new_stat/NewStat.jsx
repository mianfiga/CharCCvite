import React, { useState, useEffect } from "react";
import "./NewStat.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";

function NewStat({ statIcon, statName, statValue, onChange }) {
  const [changedValue, setChangedValue] = useState(statValue);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDebouncedClick = (callback) => {
    if (isUpdating) return;
    setIsUpdating(true);
    callback();
    setTimeout(() => setIsUpdating(false), 100);
  };

  const minusStat = () => {
    handleDebouncedClick(() => {
      if (changedValue > 0) {
        setChangedValue((prevValue) => prevValue - 1);
      }
    });
  };

  const plusStat = () => {
    handleDebouncedClick(() => {
      if (changedValue < 20) {
        setChangedValue((prevValue) => prevValue + 1);
      }
    });
  };

  useEffect(() => {
    onChange(statName, changedValue);
  }, [changedValue, statName, onChange]);

  return (
    <div className="new_stat_container">
      <img src={statIcon} alt="icon" />
      <span className="new_stat_name">{statName}</span>
      <div className="new_stat_value">
        <img src={MINUS} alt="minus" onClick={minusStat} />
        <span>{changedValue}</span>
        <img src={PLUS} alt="plus" onClick={plusStat} />
      </div>
    </div>
  );
}

export default NewStat;
