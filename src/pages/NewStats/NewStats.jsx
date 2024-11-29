import React, { useState, useCallback } from "react";
import "./NewStats.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import { NEXT, PREVIOUS } from "../../helpers/utility_icons";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import NewStat from "../../components/new_stat/NewStat";
import stats from "../../helpers/stats";

function NewStats() {

  const loadInitialStats = () => {
    const savedStats = JSON.parse(localStorage.getItem("character_stats"));
    if (savedStats) {
      return savedStats;
    } else {
      return stats.reduce((acc, s) => {
        acc[s.name.toLowerCase()] = 10;
        return acc;
      }, {});
    }
  };

  const [statValues, setStatValues] = useState(loadInitialStats);

  const handleStatChange = useCallback((statName, value) => {
    setStatValues((prevValues) => ({
      ...prevValues,
      [statName.toLowerCase()]: value,
    }));
  }, []);

  const handleSaveStats = () => {
    localStorage.setItem("character_stats", JSON.stringify(statValues));
  };

  const mostrarCosas = () => {
    console.log(localStorage.getItem("character_stats"));
  }

  return (
    <>
      <div className="new_stats_container">
        <div className="new_stats_title" onClick={mostrarCosas}>
          <span>STATS</span>
        </div>
        <div className="new_stats_containers">
          {stats.map((s) => (
            <NewStat
              key={s.name}
              statIcon={s.icon}
              statName={s.name}
              statValue={statValues[s.name.toLowerCase()]}
              onChange={handleStatChange}
            />
          ))}
        </div>
        <a href="/new_1" className="previous_new" onClick={handleSaveStats}>
          <img src={PREVIOUS} alt="" />
        </a>
        <a
          href="/new_3"
          className="next_new"
          onClick={handleSaveStats}
        >
          <img src={NEXT} alt="" />
        </a>
        <NewGoTo />
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewStats;
