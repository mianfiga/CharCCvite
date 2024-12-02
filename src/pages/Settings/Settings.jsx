import React from "react";
import "./Settings.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import {
  CONTACT,
  LOGIN,
  RATE,
  SIGNIN,
  USER,
} from "../../helpers/utility_icons";

function Settings() {
  return (
    <>
      <div className="settings_container">
        <div className="settings_title">
          <span>SETTINGS</span>
        </div>
        <div className="settings_content">
          <img src={USER} alt="" />
          <div className="user_buttons">
            <div className="log_in_button">
              <img src={LOGIN} alt="" />
              <span>LOG IN</span>
            </div>
            <div className="sign_in_button">
              <img src={SIGNIN} alt="" />
              <span>SIGN IN</span>
            </div>
          </div>
          <div className="line" />
          <div className="more_options">
            <div className="option_container">
              <img src={RATE} alt="" className="option_img" />
              <a href="https://github.com/victorgomezfernandez/CharCC">
                <div className="option_button">Rate the app</div>
              </a>
            </div>
            <div className="option_container">
              <img src={CONTACT} alt="" className="option_img" />
              <a href="https://github.com/victorgomezfernandez/CharCC">
                <div className="option_button">Contact us</div>
              </a>
            </div>
          </div>
          <div className="line" />
        </div>
        <MenuBar selectedButton={"SETTINGS"} />
      </div>
    </>
  );
}

export default Settings;
