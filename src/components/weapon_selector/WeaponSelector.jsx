import React, { useState } from "react";
import { Select } from "antd";
import weapons from "../../helpers/weapons";
import "./WeaponSelector.css";

function WeaponSelector({ onWeaponChange }) {
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const handleWeaponChange = (value) => {
    const weapon = weapons.find((w) => w.name === value);
    setSelectedWeapon(weapon);
    if (onWeaponChange) {
      onWeaponChange(weapon);
    }
  };

  return (
    <>
      <Select
        style={{ width: "80vw" }}
        dropdownStyle={{
          width: "88vw",
          backgroundColor: "#515151",
          border: "1px solid black",
          borderRadius: "20px",
        }}
        placement="bottomRight"
        defaultValue="Select your weapon"
        onChange={handleWeaponChange}
        labelRender={(value) => value.value}
        dropdownRender={(menu) => {
          return (
            <>
              <div className="weapon_container_header">
                <span className="name_header">Weapon</span>
                <span className="attack_header">Attack</span>
                <span className="damage_header">Damage</span>
                <span className="type_header">Type</span>
              </div>
              {menu}
            </>
          );
        }}
        options={weapons.map((w) => {
          return {
            value: w.name,
            label: (
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
                  <img src={w.damageType} alt="" />
                </span>
              </div>
            ),
          };
        })}
      />
    </>
  );
}

export default WeaponSelector;
