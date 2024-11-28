import React, { useEffect, useState } from "react";
import "./New.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import RaceSelector from "../../components/race_selector/RaceSelector";
import ClassSelector from "../../components/class_selector/ClassSelector";
import { Form, Input, InputNumber, Select } from "antd";

import NewGoTo from "../../components/new_go_to/NewGoTo";
import { NEXT } from "../../helpers/utility_icons";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import races from "../../helpers/races";
import classes from "../../helpers/classes";

function New() {
  const [repintado, setRepintado] = useState(1);
  const [form] = Form.useForm();

  useEffect(() => form.setFieldsValue(JSON.parse(localStorage.getItem("character_info"))));

  function saveValue(){
    localStorage.setItem("character_info", JSON.stringify(form.getFieldsValue()));
  }

  console.log(form.getFieldsValue());

  return (
    <>
      <div
        className="new_container"
        onClick={() => setRepintado(repintado + 1)}
      >
        <div className="new_title">
          <span>NEW CHARACTER</span>
        </div>
        <div className="new_form">
          <Form onChange={saveValue}
            form={form}
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <Form.Item name="name" className="medium_input_fix">
              <Input placeholder="NAME" className="medium_input" />
            </Form.Item>
            <div className="new_selectors">
              <Form.Item name="race">
                <Select
                  name="race"
                  style={{ width: "30vw" }}
                  dropdownStyle={{
                    backgroundColor: "#515151",
                    border: "1px solid black",
                    borderRadius: "20px",
                  }}
                  defaultValue="Race"
                  options={races.map((m) => {
                    return {
                      value: m.name,
                      label: <span className="race_name">{m.name}</span>,
                    };
                  })}
                />
              </Form.Item>
              <Form.Item name="class">
                <Select
                  style={{ width: "30vw" }}
                  dropdownStyle={{
                    backgroundColor: "#515151",
                    border: "1px solid black",
                    borderRadius: "20px",
                  }}
                  defaultValue="Class"
                  options={classes.map((m) => {
                    return {
                      value: m.name,
                      label: <span className="class_name">{m.name}</span>,
                    };
                  })}
                />
              </Form.Item>
            </div>
            <div className="new_numbers">
              <span className="numbers_title">AGE</span>
              <InputNumber
                style={{
                  backgroundColor: "#515151",
                  color: "#FFFFF",
                  border: "1px solid black",
                  borderRadius: "15px",
                }}
                min={0}
              />
              <span className="numbers_title">LEVEL</span>
              <InputNumber
                style={{
                  backgroundColor: "#515151",
                  color: "#FFFFF",
                  border: "1px solid black",
                  borderRadius: "15px",
                }}
                max={20}
                min={1}
              />
            </div>
            <Form.Item name="factions" className="medium_input_fix">
              <Input placeholder="FACTIONS" className="medium_input" />
            </Form.Item>
            <Form.Item name="personality" className="medium_input_fix">
              <Input
                placeholder="PERSONALITY TRAITS"
                className="medium_input"
              />
            </Form.Item>
            <Form.Item name="ideals" className="medium_input_fix">
              <Input placeholder="IDEALS" className="medium_input" />
            </Form.Item>
            <Form.Item name="flaws" className="medium_input_fix">
              <Input placeholder="FLAWS" className="medium_input" />
            </Form.Item>
            <Form.Item name="bonds" className="medium_input_fix">
              <Input placeholder="BONDS" className="medium_input" />
            </Form.Item>
            <Form.Item name="backstory" className="medium_input_fix">
              <TextArea
                placeholder="BACKSTORY"
                rows={5}
                className="large_input"
              />
            </Form.Item>
          </Form>
        </div>
        <NewGoTo />
        <a href="/new_2" className="next_new">
          <img src={NEXT} alt="" />
        </a>
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default New;
