import React from "react";
import "./ActionsContent.css";
import WeaponSelector from "../weapon_selector/WeaponSelector";
import { D20black, D6black } from "../../helpers/dice";

function ActionsContent() {
  return (
    <>
      <div className="actions_content_container">
        <div className="actions_header">ATTACK</div>
        <div className="weapon_selector_container">
          <WeaponSelector />
        </div>
        <div className="attack_throws">
          <div className="attack_throw">
            <img className="black_dice" src={D20black} alt="" />
            <div className="attack_throw_button">ATTACK THROW</div>
          </div>
          <div className="damage_throw">
            <img className="black_dice" src={D6black} alt="" />
            <div className="damage_throw_button">DAMAGE THROW</div>
          </div>
        </div>

        <div className="actions_header">SPELLS</div>
        <div className="spells_selector_container">
          <WeaponSelector />
        </div>
        <div className="attack_throws">
          <div className="attack_throw">
            <img className="black_dice" src={D20black} alt="" />
            <div className="attack_throw_button">ATTACK THROW</div>
          </div>
          <div className="damage_throw">
            <img className="black_dice" src={D6black} alt="" />
            <div className="damage_throw_button">DAMAGE THROW</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionsContent;
