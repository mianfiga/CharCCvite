import React from "react";
import "./New.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import RaceSelector from "../../components/race_selector/RaceSelector";
import ClassSelector from "../../components/class_selector/ClassSelector";
import {
  Form,
  Input,
  InputNumber
} from "antd";

import NewGoTo from "../../components/new_go_to/NewGoTo";
import { NEXT } from "../../helpers/utility_icons";
import TextArea from "antd/es/input/TextArea";

function New() {
  return (
    <>
      <div className="new_container">
        <div className="new_title">
          <span>NEW CHARACTER</span>
        </div>
        <div className="new_form">
        <Form style={{display:"flex", flexDirection: "column", gap:"1em"}}>
          <Form.Item name="name" className="medium_input_fix">
            <Input placeholder="NAME" className="medium_input" />
          </Form.Item>
          <div className="new_selectors">
            <RaceSelector />
            <ClassSelector />
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
            <Input placeholder="PERSONALITY TRAITS" className="medium_input" />
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
            <TextArea placeholder="BACKSTORY" rows={5} className="large_input"/>
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
