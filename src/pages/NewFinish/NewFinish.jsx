import React, { useEffect, useState } from "react";
import "./NewFinish.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import { CONFIRM, PREVIOUS } from "../../helpers/utility_icons";
import stats from "../../helpers/stats";
import StatInfo from "../../components/stat_info/StatInfo";

function NewFinish() {
  const [characterInfo, setCharacterInfo] = useState({
    name: "",
    race: "",
    class: "",
    stats: {},
  });

  const [characterAppearance, setCharacterAppearance] = useState({
    head: "",
    body: "",
  });

  useEffect(() => {
    const storedCharacterInfo = localStorage.getItem("character_info");
    const storedCharacterStats = localStorage.getItem("character_stats");
    const storedCharacterAppearance = localStorage.getItem(
      "character_appearance"
    );

    if (storedCharacterInfo) {
      const parsedCharacterInfo = JSON.parse(storedCharacterInfo);
      setCharacterInfo((prevInfo) => ({
        ...prevInfo,
        name: parsedCharacterInfo.name || "",
        race: parsedCharacterInfo.race || "",
        class: parsedCharacterInfo.class || "",
      }));
    }

    if (storedCharacterStats) {
      const parsedCharacterStats = JSON.parse(storedCharacterStats);
      setCharacterInfo((prevInfo) => ({
        ...prevInfo,
        stats: parsedCharacterStats || {},
      }));
    }

    if (storedCharacterAppearance) {
      const parsedCharacterAppearance = JSON.parse(storedCharacterAppearance);
      setCharacterAppearance({
        head: parsedCharacterAppearance.head || "",
        body: parsedCharacterAppearance.body || "",
      });
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
              key={stat.name}
              statImage={stat.icon}
              statValue={characterInfo.stats[stat.name.toLowerCase()]}
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
          <div className="character_icon">
            {characterAppearance.head && (
              <img
                src={`/icons/Character/heads/${characterAppearance.head}`}
                alt="Head"
                className="new_finish_head"
              />
            )}
            {characterAppearance.body && (
              <img
                src={`/icons/Character/bodies/${characterAppearance.body}`}
                alt="Body"
                className="new_finish_body"
              />
            )}
          </div>
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
