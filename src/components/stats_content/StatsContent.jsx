import React from "react";
import "./StatsContent.css";
import { PREVIOUS } from "../../helpers/utility_icons";

function StatsContent() {
  return (
    <>
      <div className="stats_content_container">
        <div className="previous_container">
          <img src={PREVIOUS} alt="img" />
        </div>
      </div>
    </>
  );
}

export default StatsContent;
