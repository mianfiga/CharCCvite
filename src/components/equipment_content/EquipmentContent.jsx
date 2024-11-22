import React from "react";
import "./EquipmentContent.css";
import { ADDEQUIPMENT, ARMORS, TREASURES, WEAPONS } from "../../helpers/equipment_icons";
import WeaponSelector from "../weapon_selector/WeaponSelector";

function EquipmentContent() {
  return (
    <>
      <div className="equipment_content_container">
        <div className="weapons_header">
          <img src={WEAPONS} alt="" />
          <span>WEAPONS</span>
        </div>
        <table className="weapons_table">
          <tr>
            <th></th>
            <th>Quantity</th>
            <th>Carried?</th>
          </tr>
          <tr><WeaponSelector selectorWidth={"100vw"}/></tr>
        </table>
        <img className="add_weapon" src={ADDEQUIPMENT} alt="" />
        <div className="armors_header">
          <img src={ARMORS} alt="" />
          <span>ARMORS</span>
        </div>
        <table className="armors_table">
          <tr>
            <th></th>
            <th>Quantity</th>
            <th>Carried?</th>
          </tr>
          <tr><WeaponSelector selectorWidth={"100vw"}/></tr>
        </table>
        <img className="add_armor" src={ADDEQUIPMENT} alt="" />
        <div className="treasures_header">
          <img src={TREASURES} alt="" />
          <span>TREASURES</span>
        </div>
        <table className="treasures_table">
          <tr>
            <th></th>
            <th>Quantity</th>
            <th>Carried?</th>
          </tr>
          <tr><WeaponSelector selectorWidth={"100vw"}/></tr>
        </table>
        <img className="add_treasure" src={ADDEQUIPMENT} alt="" />
      </div>
    </>
  );
}

export default EquipmentContent;
