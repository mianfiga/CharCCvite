import React from "react";
import "./MenuBar.css";
import {
  HOME,
  NEW,
  EXPLORE,
  LIBRARY,
  SETTINGS,
  TNEW,
  THOME,
  TEXPLORE,
  SELHOME,
  TLIBRARY,
  TSETTINGS,
  SELNEW,
  SELEXPLORE,
  SELLIBRARY,
  SELSETTINGS,
} from "../../helpers/menu_bar_icons";
import MenuBarButton from "../menu_bar_button/MenuBarButton";

function MenuBar({ selectedButton }) {
  return (
    <>
      <div className="bar_container">
        <MenuBarButton
          image={selectedButton === "NEW" ? SELNEW : NEW}
          text={TNEW}
          isSelected={selectedButton === "NEW"}
          path={"/new_1"}
        />
        <MenuBarButton
          image={selectedButton === "EXPLORE" ? SELEXPLORE : EXPLORE}
          text={TEXPLORE}
          isSelected={selectedButton === "EXPLORE"}
          path={"/explore"}
        />
        <MenuBarButton
          image={selectedButton === "HOME" ? SELHOME : HOME}
          text={THOME}
          isSelected={selectedButton === "HOME"}
          path={"/home"}
        />
        <MenuBarButton
          image={selectedButton === "LIBRARY" ? SELLIBRARY : LIBRARY}
          text={TLIBRARY}
          isSelected={selectedButton === "LIBRARY"}
          path={"/library"}
        />
        <MenuBarButton
          image={selectedButton === "SETTINGS" ? SELSETTINGS : SETTINGS}
          text={TSETTINGS}
          isSelected={selectedButton === "SETTINGS"}
          path={"/settings"}
        />
      </div>
    </>
  );
}

export default MenuBar;
