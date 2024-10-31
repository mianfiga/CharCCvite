import React from "react";
import MenuBar from "../../components/menu_bar/MenuBar";
import "./Explore.css";
import Input from "antd/es/input/Input";

function Explore() {
  return (
    <>
      <div className="explore_container">
        <div className="explore_content">
          <div className="explore_title">
            <span>EXPLORE</span>
          </div>
          <Input />
        </div>
        <MenuBar selectedButton={"EXPLORE"} />
      </div>
    </>
  );
}

export default Explore;
