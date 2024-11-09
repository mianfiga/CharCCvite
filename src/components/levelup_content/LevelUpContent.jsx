import React from "react";
import { Flex, Progress } from "antd";
import "./LevelUpContent.css";
import { MINUS, PLUS } from "../../helpers/utility_icons";

function LevelUpContent({ expLevel, expCount }) {
  return (
    <>
      <div className="levelup_content_container">
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
          <span>LEVEL {expLevel} </span>
          <br/>
          <span>{expCount}/100 EXP</span>
          <div className="add_experience">
          <img src={MINUS} alt="minus" />
          <span>1000</span>
          <img src={PLUS} alt="plus" />
        </div>
        </div>
      </div>
    </>
  );
}

export default LevelUpContent;
