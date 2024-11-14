import React from "react";
import "./WeaponSelect.css";
import { D20, D6 } from "../../helpers/dice";
import { SLASH } from "../../helpers/damage_types";
import weapons from "../../helpers/weapons";

function WeaponSelect() {
  return (
    <>
      {weapons.map((w) => (
        <div className="weapon_container">
          <span className="name_container">{w.name}</span>
          <div className="attack_container">
            <span>{w.attackQDice}</span>
            <img src={w.attackDice} alt="" className="select_image" />
            <span>+{w.attackSum}</span>
          </div>
          <div className="damage_container">
            <span>{w.damageQDice} </span>
            <img src={w.damageDice} alt="" className="select_image" />
            <span>+{w.damageSum}</span>
          </div>

          <span className="damage_type">
            <img src={SLASH} alt="" />
          </span>
        </div>
      ))}
      {/* <div className="weapon_container">
        <span>Battleaxe</span>
        <span>
          1 <img src={D20} alt="" className="select_image" />
          +5
        </span>
        <span>
          1 <img src={D6} alt="" className="select_image" />
          +3
        </span>
        <img src={SLASH} alt="" className="select_image" />
      </div> */}
    </>
  );
}

export default WeaponSelect;
