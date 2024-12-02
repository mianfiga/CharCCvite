import React, { useEffect, useState } from "react";
import MenuBar from "../../components/menu_bar/MenuBar";
import "./Home.css";
import HomeButton from "../../components/home_button/HomeButton";
import {
  THROWS,
  STATS,
  INFO,
  ACTIONS,
  LEVELUP,
  EQUIPMENT,
  TTEXT,
  STEXT,
  ITEXT,
  ATEXT,
  LTEXT,
  ETEXT,
  DELETE,
} from "../../helpers/home_icons";
import ThrowsContent from "../../components/throws_content/ThrowsContent";
import InfoContent from "../../components/info_content/InfoContent";
import StatsContent from "../../components/stats_content/StatsContent";
import ActionsContent from "../../components/actions_content/ActionsContent";
import LevelUpContent from "../../components/levelup_content/LevelUpContent";
import EquipmentContent from "../../components/equipment_content/EquipmentContent";

function Home() {
  const [charName, setCharName] = useState("CREATE A CHARACTER");
  const [characterAppearance, setCharacterAppearance] = useState({
    head: "",
    body: "",
  });

  useEffect(() => {
    const storedCharacterInfo = localStorage.getItem("character_info");
    if (storedCharacterInfo) {
      const parsedCharacterInfo = JSON.parse(storedCharacterInfo);
      setCharName(parsedCharacterInfo.name || "CREATE A CHARACTER");
    }

    const storedCharacterAppearance = localStorage.getItem(
      "character_appearance"
    );
    if (storedCharacterAppearance) {
      const parsedAppearance = JSON.parse(storedCharacterAppearance);
      setCharacterAppearance({
        head: parsedAppearance.head || "",
        body: parsedAppearance.body || "",
      });
    }
  }, []);

  const handleDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <div className="char_name">
            <span>{charName}</span>
          </div>
          <div className="character_img">
            {characterAppearance.head && (
              <img
                src={`/icons/Character/heads/${characterAppearance.head}`}
                alt="Head"
                className="character_head"
              />
            )}
            {characterAppearance.body && (
              <img
                src={`/icons/Character/bodies/${characterAppearance.body}`}
                alt="Body"
                className="character_body"
              />
            )}
          </div>
          <HomeButton image={THROWS} text={TTEXT} className="throws_button">
            <ThrowsContent />
          </HomeButton>
          <HomeButton image={INFO} text={ITEXT} className="info_button">
            <InfoContent />
          </HomeButton>
          <HomeButton image={LEVELUP} text={LTEXT} className="level_button">
            <LevelUpContent expCount={0} />
          </HomeButton>
          <HomeButton image={STATS} text={STEXT} className="stats_button">
            <StatsContent />
          </HomeButton>
          <HomeButton image={ACTIONS} text={ATEXT} className="actions_button">
            <ActionsContent />
          </HomeButton>
          <div className="delete_button" onClick={handleDelete}>
            <img src={DELETE} alt="" />
            <span>DELETE</span>
          </div>
        </div>
        <MenuBar selectedButton={"HOME"} />
      </div>
    </>
  );
}

export default Home;
