import React from "react";
import "./ThrowsContent.css";
import StatButton from "../stat_button/StatButton";
import {
  CHARISMA,
  CONSTITUTION,
  DEXTERITY,
  INTELLIGENCE,
  STRENGTH,
  WISDOM,
} from "../../helpers/stats_icons";

function ThrowsContent() {
  return (
    <>
      <div className="throws_content_container">
        <span className="stats_based_text">STATS BASED THROWS</span>
        <div className="stats_based_throws">
          <StatButton statIcon={STRENGTH} statValue={15} />
          <StatButton statIcon={DEXTERITY} statValue={16} />
          <StatButton statIcon={CONSTITUTION} statValue={13} />
          <StatButton statIcon={INTELLIGENCE} statValue={13} />
          <StatButton statIcon={WISDOM} statValue={10} />
          <StatButton statIcon={CHARISMA} statValue={8} />
        </div>
        <span className="death_throw_text">DEATH SAVING THROW</span>
        <div className="death_throw_button">THROW</div>
      </div>
    </>
  );
}

export default ThrowsContent;
