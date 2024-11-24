import React from "react";
import "./NewStats.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import { NEXT, PREVIOUS } from "../../helpers/utility_icons";
import NewGoTo from "../../components/new_go_to/NewGoTo";

function NewStats() {
  return (
    <>
      <div className="new_stats_container">
        <div className="new_stats_title">
          <span>STATS</span>
        </div>
        <a href="/new_1" className="previous_new">
          <img src={PREVIOUS} alt="" />
        </a>
        <a href="/new_3" className="next_new">
          <img src={NEXT} alt="" />
        </a>
        <NewGoTo />
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewStats;
