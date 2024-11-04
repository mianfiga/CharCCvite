import React from "react";
import "./StatInfo.css";

function StatInfo({statImage, statValue}){
    return(
        <>
        <div className="stat_info_container">
            <img src={statImage} alt="img" />
            <div className="stat_info_text">
                <span>{statValue}</span>
            </div>
        </div>
        </>
    );
}

export default StatInfo;