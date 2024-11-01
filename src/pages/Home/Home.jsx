import React from "react";
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
} from "../../helpers/home_icons";

function Home() {
  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <div className="char_name">
            <span>PEPE VIYUELA</span>
          </div>
          <img
            src="/icons/Character/character.svg"
            alt="character"
            className="char_image"
          />
          <div className="left_buttons_container">
            <HomeButton image={THROWS} text={TTEXT}>
              hola
            </HomeButton>
            <div className="upper_buttons_container">
              <HomeButton image={INFO} text={ITEXT} />
            </div>
            <div className="lower_buttons_container">
              <HomeButton image={LEVELUP} text={LTEXT} />
            </div>
          </div>
          <div className="right_buttons_container">
            <div className="upper_buttons_container">
              <HomeButton image={STATS} text={STEXT} />
              <HomeButton image={ACTIONS} text={ATEXT} />
            </div>
            <div className="lower_buttons_container">
              <HomeButton image={EQUIPMENT} text={ETEXT} />
            </div>
          </div>
        </div>
        <MenuBar selectedButton={"HOME"} />
      </div>
    </>
  );
}

export default Home;
