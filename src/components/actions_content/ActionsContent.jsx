import React from "react";
import "./ActionsContent.css";
import { Select, Space } from "antd";
import weapons from "../../helpers/weapons";
import { SLASH } from "../../helpers/damage_types";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function ActionsContent() {
  return (
    <>
      <div className="actions_content_container">
        <Space wrap>
          <Select
            defaultValue="Select your weapon"
            style={{
              width: 800,
            }}
            onChange={handleChange}
            options={weapons.map((w) => (
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
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            disabled
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            loading
            options={[
              {
                value: "lucy",
                label: "antonio",
              },
            ]}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            allowClear
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
            placeholder="select it"
          />
        </Space>
      </div>
    </>
  );
}

export default ActionsContent;
