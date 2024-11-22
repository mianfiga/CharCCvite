import React from "react";
import "./New.css";
import MenuBar from "../../components/menu_bar/MenuBar";

function New() {
  return (
    <>
      <div className="new_container">
        <div className="new_content">
          <div className="new_title">
            <span>NEW CHARACTER</span>
          </div>
          <form className="new_form">
            <input type="text" className="medium_input" placeholder="NAME"/>
            <input type="text" className="medium_input" placeholder="FACTIONS"/>
            <input type="text" className="medium_input" placeholder="PERSONALITY TRAITS"/>
            <input type="text" className="medium_input" placeholder="IDEALS"/>
            <input type="text" className="medium_input" placeholder="FLAWS"/>
          </form>
        </div>
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default New;
