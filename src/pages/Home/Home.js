import MenuBar from "../../components/menu_bar/MenuBar.js";
import "./Home.css";
import HomeButton from "../../components/home_button/HomeButton.js";
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
} from "../../helpers/home_icons.js";

function Home() {
  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <div className="char_name">
            <span>PEPE VIYUELA</span>
          </div>
          <img src="/icons/Character/character.svg" alt="character" className="char_image" />
          <div className="upper_buttons_container">
            <HomeButton image={THROWS} text={TTEXT} />
            <HomeButton image={STATS} text={STEXT} />
            <HomeButton image={INFO} text={ITEXT} />
            <HomeButton image={ACTIONS} text={ATEXT} />
          </div>
          <div className="lower_buttons_container">
            <HomeButton image={LEVELUP} text={LTEXT} />
            <HomeButton image={EQUIPMENT} text={ETEXT} />
          </div>
        </div>

        <MenuBar />
      </div>
    </>
  );
}

export default Home;
