import React, { useEffect, useState } from "react";
import "./InfoContent.css";

function InfoContent() {
  // Estado para almacenar la información del personaje
  const [characterInfo, setCharacterInfo] = useState({
    name: "",
    race: "",
    class: "",
    age: 0,
    level: 0,
    factions: "",
    personality: "",
    ideals: "",
    flaws: "",
    bonds: "",
    backstory: "",
  });

  useEffect(() => {
    // Recuperamos los datos del personaje de localStorage
    const storedCharacterInfo = localStorage.getItem("character_info");
    
    if (storedCharacterInfo) {
      const parsedCharacterInfo = JSON.parse(storedCharacterInfo);
      setCharacterInfo(parsedCharacterInfo); // Establecemos los datos en el estado
    }
  }, []);

  return (
    <>
      <div className="info_content_container">
        <div className="info_display_medium">
          <span>{characterInfo.name || "NAME"}</span>
        </div>
        <div className="info_display_small_container">
          <div className="info_display_small">
            <span>{characterInfo.race || "RACE"}</span>
          </div>
          <div className="info_display_small">
            <span>{characterInfo.class || "CLASS"}</span>
          </div>
        </div>
        <div className="info_display_number_container">
          <div className="info_number">
            <span className="info_number_text">AGE</span>
            <div className="info_number_number">
              <span>{characterInfo.age || 0}</span>
            </div>
          </div>
          <div className="info_number">
            <span className="info_number_text">LEVEL</span>
            <div className="info_number_number">
              <span>{characterInfo.level || 0}</span>
            </div>
          </div>
        </div>
        <div className="info_display_medium">
          <span>{characterInfo.factions || "FACTIONS"}</span>
        </div>
        <div className="info_display_medium">
          <span>{characterInfo.personality || "PERSONALITY TRAITS"}</span>
        </div>
        <div className="info_display_medium">
          <span>{characterInfo.ideals || "IDEALS"}</span>
        </div>
        <div className="info_display_medium">
          <span>{characterInfo.flaws || "FLAWS"}</span>
        </div>
        <div className="info_display_medium">
          <span>{characterInfo.bonds || "BONDS"}</span>
        </div>
        <div className="info_display_large">
          <span>{characterInfo.backstory || "BACKSTORY"}</span>
        </div>
      </div>
    </>
  );
}

export default InfoContent;
