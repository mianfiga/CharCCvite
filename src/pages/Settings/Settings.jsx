import React from "react";
import "./Settings.css";
import MenuBar from "../../components/menu_bar/MenuBar";

function Settings() {
  return (
    <>
      <div className="settings_container">
        <div className="settings_title">
            <span>SETTINGS</span>
        </div>
        <MenuBar selectedButton={"SETTINGS"} />
      </div>
    </>
  );
}

export default Settings;
