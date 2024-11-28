import React from "react";
import MenuBar from "../../components/menu_bar/MenuBar";
import "./Explore.css";
import Input from "antd/es/input/Input";

function Explore() {
  return (
    <>
      <div className="explore_container">
        <div className="explore_title">
          <span>EXPLORE</span>
        </div>
        <div className="explore_content">
          <form className="explore_form">
            <input type="text" className="name_field" placeholder="NAME" />
          </form>
          <div className="filter_container">
            <div className="filter_title_container">
              <span className="filter_title">FILTER BY</span>
              <div className="line" />
            </div>
          </div>
        </div>
        <MenuBar selectedButton={"EXPLORE"} />
      </div>
    </>
  );
}

export default Explore;
