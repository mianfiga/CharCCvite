import React from "react";
import "./NewFinish.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import { PREVIOUS } from "../../helpers/utility_icons";
import stats from "../../helpers/stats";
import StatInfo from "../../components/stat_info/StatInfo";

function NewFinish() {
  return (
    <>
      <div className="new_finish_container">
        <div className="new_finish_title">
          <span>FINISH</span>
        </div>
        <div className="new_finish_stats">
          {stats.map((s) => (
            <StatInfo statImage={s.icon} statValue={s.value} />
          ))}
        </div>
        <a href="/new_4" className="previous_new">
          <img src={PREVIOUS} alt="" />
        </a>
        <NewGoTo />
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewFinish;
