import React from "react";
import "./ActionsContent.css";
import { Select, Form } from "antd";
import weapons from "../../helpers/weapons";
import { SLASH } from "../../helpers/damage_types";
import FormItem from "antd/es/form/FormItem";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function ActionsContent() {
  return (
    <>
      <div className="actions_content_container">
        <Form>
          <FormItem>
            <Select
              style={{ width: "80vw" }}
              defaultValue="Select your weapon"
              onChange={handleChange}
              labelRender={(value)=>value.value}
              options={weapons.map((w) => {
                return {
                  value: w.name,
                  label: (
                    <div className="weapon_container">
                      <span className="name_container">{w.name}</span>
                      <div className="attack_container">
                        <span>{w.attackQDice}</span>
                        <img
                          src={w.attackDice}
                          alt=""
                          className="select_image"
                        />
                        <span>+{w.attackSum}</span>
                      </div>
                      <div className="damage_container">
                        <span>{w.damageQDice} </span>
                        <img
                          src={w.damageDice}
                          alt=""
                          className="select_image"
                        />
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
          </FormItem>
        </Form>
      </div>
    </>
  );
}

export default ActionsContent;
