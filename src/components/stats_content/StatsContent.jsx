import React, { useEffect, useState } from "react";
import "./StatsContent.css";
import StatInfo from "../stat_info/StatInfo";
import { AC, HP, XP } from "../../helpers/stats_icons";
import { Progress } from "antd";
import stats from "../../helpers/stats";

function StatsContent() {
  // Estado para almacenar las estadísticas recuperadas de localStorage
  const [characterStats, setCharacterStats] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    hp: 0,
    xp: 0,
    ac: 0,
  });

  useEffect(() => {
    // Recuperamos las estadísticas de localStorage
    const storedCharacterStats = localStorage.getItem("character_stats");

    if (storedCharacterStats) {
      const parsedCharacterStats = JSON.parse(storedCharacterStats);
      setCharacterStats(parsedCharacterStats); // Establecemos los datos en el estado
    }
  }, []);

  return (
    <>
      <div className="stats_content_container">
        <div className="stats_info_grid">
          {stats.map((s) => (
            <StatInfo
              key={s.name}
              statImage={s.icon}
              statValue={characterStats[s.name.toLowerCase()] || 0} // Usamos los datos de localStorage
            />
          ))}
        </div>
        <div className="hp_xp_container">
          <div className="hp_container">
            <img src={HP} alt="hp" />
            <Progress
              percent={50}
              percentPosition={{ align: "center", type: "outer" }}
              showInfo={false}
              size={[400, 10]}
              strokeColor="#D82596"
            />
            <span>8/16 HP</span>
          </div>
          <div className="xp_container">
            <img src={XP} alt="xp" />
            <Progress
              percent={50}
              percentPosition={{ align: "center", type: "outer" }}
              showInfo={false}
              size={[400, 10]}
              strokeColor="#D82596"
            />
            <span>50/100 EXP</span>
          </div>
        </div>
        <StatInfo statImage={AC} statValue={10} />
      </div>
    </>
  );
}

export default StatsContent;
