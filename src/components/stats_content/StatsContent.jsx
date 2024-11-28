import React from "react";
import "./StatsContent.css";
import StatInfo from "../stat_info/StatInfo";
import {
  AC,
  HP,
  XP,
} from "../../helpers/stats_icons";
import { Progress } from "antd";
import stats from "../../helpers/stats";

function StatsContent() {
  return (
    <>
      <div className="stats_content_container">
        <div className="stats_info_grid">
          {stats.map((s) => (
            <StatInfo statImage={s.icon} statValue={s.value} />
          ))}
        </div>
        <div className="hp_xp_container">
          <div className="hp_container">
            <img src={HP} alt="hp" />
            <Progress
              percent={50}
              percentPosition={{ align: "center", type: "outer" }}
              showInfo={false}
              size={[400, 10]}
              strokeColor="#D82596"
            />
            <span>8/16 HP</span>
          </div>
          <div className="xp_container">
            <img src={XP} alt="xp" />
            <Progress
              percent={50}
              percentPosition={{ align: "center", type: "outer" }}
              showInfo={false}
              size={[400, 10]}
              strokeColor="#D82596"
            />
            <span>50/100 EXP</span>
          </div>
        </div>
        <StatInfo statImage={AC} statValue={10} />
      </div>
    </>
  );
}

export default StatsContent;
