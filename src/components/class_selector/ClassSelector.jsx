import React from "react";
import { Select } from "antd";
import "./ClassSelector.css";
import classes from "../../helpers/classes";

function ClassSelector(){
    return(
        <>
        <Select
        style={{ width: "30vw" }}
        dropdownStyle={{
          backgroundColor: "#515151",
          border: "1px solid black",
          borderRadius: "20px",
        }}
        defaultValue="Class"
        options={classes.map((m) => {
          return {
            value: m.name,
            label: (
              <span className="class_name">{m.name}</span>
            ),
          };
        })}
      />
        </>
    )
}

export default ClassSelector;