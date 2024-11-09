import React from "react";
import { Flex, Progress } from "antd";
import "./LevelUpContent.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";
import { STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA } from "../../helpers/stats_icons";
import LevelUpStat from "../levelup_stat/LevelUpStat";

function LevelUpContent({ expLevel, expCount }) {
  return (
    <>
      <div className="levelup_content_container">
      <span>LEVEL {expLevel} </span>
        <Flex gap="small" vertical>
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "outer" }}
            showInfo={false}
            size={[400, 15]}
            strokeColor="#D82596"
          />
        </Flex>
        <div className="levelup_column">
          <span>{expCount}/100 EXP</span>
          <div className="add_experience">
            <img src={MINUS} alt="minus" />
            <span>1000</span>
            <img src={PLUS} alt="plus" />
          </div>
          <div className="add_experience_button">ADD EXPERIENCE</div>
          <div className="available_popup">YOU HAVE ABILITY POINTS AVAILABLE</div>
          <div className="stats_grid">
            <LevelUpStat statImage={STRENGTH} statValue={15} />
            <LevelUpStat statImage={DEXTERITY} statValue={16} />
            <LevelUpStat statImage={CONSTITUTION} statValue={13} />
            <LevelUpStat statImage={INTELLIGENCE} statValue={13} />
            <LevelUpStat statImage={WISDOM} statValue={10} />
            <LevelUpStat statImage={CHARISMA} statValue={8} />
          </div>
          <div className="spells_unlocked_button">NEW SPELLS UNLOCKED</div>
        </div>
      </div>
    </>
  );
}

export default LevelUpContent;
