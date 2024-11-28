import React from "react";
import "./RaceSelector.css";
import { Select } from "antd";
import races from "../../helpers/races";

function RaceSelector() {
  return (
    <>
      <Select name="race"
        style={{ width: "30vw" }}
        dropdownStyle={{
          backgroundColor: "#515151",
          border: "1px solid black",
          borderRadius: "20px",
        }}
        defaultValue="Race"
        options={races.map((m) => {
          return {
            value: m.name,
            label: (
              <span className="race_name">{m.name}</span>
            ),
          };
        })}
      />
    </>
  );
}

export default RaceSelector;
