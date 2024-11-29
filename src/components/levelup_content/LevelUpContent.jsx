import React, { useEffect, useState } from "react";
import { Flex, Progress } from "antd";
import "./LevelUpContent.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";
import LevelUpStat from "../levelup_stat/LevelUpStat";
import stats from "../../helpers/stats";

function LevelUpContent() {
  const [characterStats, setCharacterStats] = useState({});
  const [characterInfo, setCharacterInfo] = useState({});
  const [availablePoints, setAvailablePoints] = useState(0);
  const [expCount, setExpCount] = useState(0); // Experiencia inicial

  useEffect(() => {
    // Cargar estadísticas y nivel desde localStorage
    const storedStats = localStorage.getItem("character_stats");
    if (storedStats) {
      setCharacterStats(JSON.parse(storedStats));
    }

    const storedInfo = localStorage.getItem("character_info");
    if (storedInfo) {
      const info = JSON.parse(storedInfo);
      setCharacterInfo(info);
      setAvailablePoints(info.availablePoints || 0);
    }
  }, []);

  const updateStat = (statName, change) => {
    setCharacterStats((prevStats) => {
      const currentStat = prevStats[statName] || 0;

      if (change > 0 && availablePoints > 0) {
        const updatedStats = { ...prevStats, [statName]: currentStat + 1 };
        setAvailablePoints(availablePoints - 1);
        localStorage.setItem("character_stats", JSON.stringify(updatedStats));
        return updatedStats;
      } else if (change < 0 && currentStat > 0) {
        const updatedStats = { ...prevStats, [statName]: currentStat - 1 };
        setAvailablePoints(availablePoints + 1);
        localStorage.setItem("character_stats", JSON.stringify(updatedStats));
        return updatedStats;
      }
      return prevStats;
    });
  };

  const handleExperienceChange = (amount) => {
    setExpCount((prevExp) => Math.max(0, prevExp + amount));
  };

  const applyExperience = () => {
    if (expCount >= 100) {
      const updatedLevel = characterInfo.level + 1 || 1;
      const updatedInfo = { ...characterInfo, level: updatedLevel };
      setCharacterInfo(updatedInfo);
      setExpCount(expCount - 100);
      setAvailablePoints(availablePoints + 2);
      localStorage.setItem("character_info", JSON.stringify(updatedInfo));
    }
  };

  return (
    <div className="levelup_content_container">
      <span>LEVEL {characterInfo.level || 1}</span>
      <Flex gap="small" vertical>
        <Progress
          percent={(expCount / 100) * 100}
          showInfo={false}
          size={[350, 15]}
          strokeColor="#D82596"
        />
      </Flex>
      <div className="levelup_column">
        <span>{expCount}/100 EXP</span>
        <div className="add_experience">
          <img
            src={MINUS}
            alt="minus"
            onClick={() => handleExperienceChange(-10)}
          />
          <span>{expCount}</span>
          <img
            src={PLUS}
            alt="plus"
            onClick={() => handleExperienceChange(10)}
          />
        </div>
        <div className="add_experience_button" onClick={applyExperience}>
          ADD EXPERIENCE
        </div>
        <div className="available_popup">
          YOU HAVE {availablePoints} ABILITY POINTS AVAILABLE
        </div>
        <div className="stats_grid">
          {stats.map((s) => (
            <LevelUpStat
              key={s.name}
              statImage={s.icon}
              statValue={characterStats[s.name.toLowerCase()] || 0}
              onIncrease={() => updateStat(s.name.toLowerCase(), 1)}
              onDecrease={() => updateStat(s.name.toLowerCase(), -1)}
            />
          ))}
        </div>
        <div className="spells_unlocked_button">NEW SPELLS UNLOCKED</div>
      </div>
    </div>
  );
}

export default LevelUpContent;
