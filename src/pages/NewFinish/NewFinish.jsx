import React, { useEffect, useState } from "react";
import "./NewFinish.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import { CONFIRM, PREVIOUS } from "../../helpers/utility_icons";
import stats from "../../helpers/stats"; // Este es el array que contiene las estadísticas con sus iconos
import StatInfo from "../../components/stat_info/StatInfo";

function NewFinish() {
  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    race: '',
    class: '',
    stats: {},
  });

  useEffect(() => {
    // Recuperamos los datos del personaje y sus estadísticas de localStorage
    const storedCharacterInfo = localStorage.getItem("character_info");
    const storedCharacterStats = localStorage.getItem("character_stats");

    if (storedCharacterInfo) {
      const parsedCharacterInfo = JSON.parse(storedCharacterInfo);
      setCharacterInfo((prevInfo) => ({
        ...prevInfo,
        name: parsedCharacterInfo.name || '',
        race: parsedCharacterInfo.race || '',
        class: parsedCharacterInfo.class || '',
      }));
    }

    if (storedCharacterStats) {
      const parsedCharacterStats = JSON.parse(storedCharacterStats);
      setCharacterInfo((prevInfo) => ({
        ...prevInfo,
        stats: parsedCharacterStats || {}, // Asignamos las estadísticas
      }));
    }
  }, []);

  return (
    <>
      <div className="new_finish_container">
        <div className="new_finish_title">
          <span>FINISH</span>
        </div>
        <div className="new_finish_stats">
          {stats.map((stat) => (
            <StatInfo
              key={stat.name} // Usamos el nombre de la estadística como clave
              statImage={stat.icon} // Icono correspondiente de la estadística
              statValue={characterInfo.stats[stat.name.toLowerCase()]} // Valor de la estadística de character_stats
            />
          ))}
        </div>
        <div className="new_finish_info">
          <div className="new_finish_label">
            <span>{characterInfo.name || "NAME"}</span>
          </div>
          <div className="new_finish_label">
            <span>{characterInfo.race || "RACE"}</span>
          </div>
          <div className="new_finish_label">
            <span>{characterInfo.class || "CLASS"}</span>
          </div>
          <img
            className="new_finish_img"
            src="/icons/Character/character.svg"
            alt="Character"
          />
          <a href="/home">
            <div className="new_confirm_button">
              <img src={CONFIRM} alt="Confirm" />
              <span>CREATE CHARACTER</span>
            </div>
          </a>
        </div>

        <a href="/new_4" className="previous_new">
          <img src={PREVIOUS} alt="Previous" />
        </a>
        <NewGoTo />
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewFinish;
