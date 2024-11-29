import React, { useEffect, useState } from "react";
import "./ThrowsContent.css";
import StatButton from "../stat_button/StatButton";
import stats from "../../helpers/stats";

function ThrowsContent() {
  const [characterStats, setCharacterStats] = useState({});

  useEffect(() => {
    // Cargar estadísticas desde localStorage al montar el componente
    const storedStats = localStorage.getItem("character_stats");
    if (storedStats) {
      setCharacterStats(JSON.parse(storedStats));
    }
  }, []);

  const handleStatChange = (statName, change) => {
    // Actualizar estadística en el estado y localStorage
    setCharacterStats((prevStats) => {
      const updatedStats = {
        ...prevStats,
        [statName]: Math.max(0, (prevStats[statName] || 0) + change), // Evitar valores negativos
      };
      localStorage.setItem("character_stats", JSON.stringify(updatedStats));
      return updatedStats;
    });
  };

  return (
    <div className="throws_content_container">
      <span className="stats_based_text">STATS BASED THROWS</span>
      <div className="stats_based_throws">
        {stats.map((s) => (
          <StatButton
            key={s.name}
            statIcon={s.icon}
            statValue={characterStats[s.name.toLowerCase()] || 0}
            onStatChange={(change) =>
              handleStatChange(s.name.toLowerCase(), change)
            }
          />
        ))}
      </div>
      <span className="death_throw_text">DEATH SAVING THROW</span>
      <div className="death_throw_button">THROW</div>
    </div>
  );
}

export default ThrowsContent;
