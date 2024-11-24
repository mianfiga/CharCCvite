import React from "react";
import "./New.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import RaceSelector from "../../components/race_selector/RaceSelector";
import ClassSelector from "../../components/class_selector/ClassSelector";
import { InputNumber } from "antd";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import { NEXT } from "../../helpers/utility_icons";

function New() {
  return (
    <>
      <div className="new_container">
        <div className="new_title">
          <span>NEW CHARACTER</span>
        </div>
        <form className="new_form">
          <input type="text" className="medium_input" placeholder="NAME" />
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
          <input type="text" className="medium_input" placeholder="FACTIONS" />
          <input
            type="text"
            className="medium_input"
            placeholder="PERSONALITY TRAITS"
          />
          <input type="text" className="medium_input" placeholder="IDEALS" />
          <input type="text" className="medium_input" placeholder="FLAWS" />
          <textarea className="large_input" placeholder="BACKGROUND" />
        </form>
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
