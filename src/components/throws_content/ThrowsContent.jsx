import React from "react";
import "./ThrowsContent.css";
import StatButton from "../stat_button/StatButton";
import stats from "../../helpers/stats";

function ThrowsContent() {
  return (
    <>
      <div className="throws_content_container">
        <span className="stats_based_text">STATS BASED THROWS</span>
        <div className="stats_based_throws">
          {stats.map((s) => (
            <StatButton statIcon={s.icon} statValue={s.value} />
          ))}
        </div>
        <span className="death_throw_text">DEATH SAVING THROW</span>
        <div className="death_throw_button">THROW</div>
      </div>
    </>
  );
}

export default ThrowsContent;
