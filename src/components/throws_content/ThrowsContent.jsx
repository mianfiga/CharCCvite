import React from "react";
import "./ThrowsContent.css";
import StatButton from "../stat_button/StatButton";
import { STRENGTH } from "../../helpers/stats_icons";

function ThrowsContent() {
  return (
    <>
      <div className="throws_content_container">
        <span className="stats_based_text">STATS BASED THROWS</span>
        <div className="stats_based_throws">
            <StatButton statIcon={STRENGTH} statValue={15} />
        </div>
      </div>
    </>
  );
}

export default ThrowsContent;
