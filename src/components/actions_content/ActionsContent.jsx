import React, { useState } from "react";
import "./ActionsContent.css";
import WeaponSelector from "../weapon_selector/WeaponSelector";
import { D20black, D6black } from "../../helpers/dice";

function ActionsContent() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [attackResult, setAttackResult] = useState(null);
  const [damageResult, setDamageResult] = useState(null);

  const handleWeaponChange = (weapon) => {
    setSelectedWeapon(weapon);
    setAttackResult(null);
    setDamageResult(null);
  };

  const rollDice = (faces) => {
    return Math.floor(Math.random() * faces) + 1;
  };

  const handleAttackThrow = () => {
    if (selectedWeapon) {
      const roll = rollDice(selectedWeapon.attackDiceFaces); 
      const attackSum = parseInt(selectedWeapon.attackSum, 10) || 0;
      const result = roll + attackSum;
      setAttackResult(result);
    }
  };

  const handleDamageThrow = () => {
    if (selectedWeapon) {
      const roll = rollDice(selectedWeapon.damageDiceFaces);
      const damageSum = parseInt(selectedWeapon.damageSum, 10) || 0;
      const result = roll + damageSum;
      setDamageResult(result);
    }
  };

  return (
    <>
      <div className="actions_content_container">
        <div className="actions_header">ATTACK</div>
        <div className="weapon_selector_container">
          <WeaponSelector onWeaponChange={handleWeaponChange} />
        </div>
        <div className="attack_throws">
          <div className="attack_throw">
            <img
              className="black_dice"
              src={selectedWeapon?.attackDiceBlack || D20black}
              alt="Attack Dice"
            />
            <div className="attack_throw_button" onClick={handleAttackThrow}>
              ATTACK THROW
            </div>
            <div className="actions_result">
              {attackResult !== null
                ? `THE RESULT IS ${attackResult}`
                : "THE RESULT IS"}
            </div>
          </div>
          <div className="damage_throw">
            <img
              className="black_dice"
              src={selectedWeapon?.damageDiceBlack || D6black}
              alt="Damage Dice"
            />
            <div className="damage_throw_button" onClick={handleDamageThrow}>
              DAMAGE THROW
            </div>
            <div className="actions_result">
              {damageResult !== null
                ? `THE RESULT IS ${damageResult}`
                : "THE RESULT IS"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionsContent;
