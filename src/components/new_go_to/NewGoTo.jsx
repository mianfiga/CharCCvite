import React from "react";
import { Select } from "antd";
import "./NewGoTo.css";

function NewGoTo() {
  return (
    <>
      <div className="new_go_to_container">
        <Select
          style={{ width: "20vw" }}
          placement="top"
          dropdownStyle={{
            backgroundColor: "#515151",
            border: "1px solid black",
            borderRadius: "20px",
            width: "30vw",
          }}
          defaultValue="GO TO"
          options={[
            {
              value: "INFO",
              label: <a href="/new_1">INFO</a>,
            },
            {
              value: "STATS",
              label: <a href="/new_2">STATS</a>,
            },
            {
              value: "PROFICIENCIES",
              label: <a href="/new_3">PROFICIENCIES</a>,
            },
            {
              value: "APPEARANCE",
              label: <a href="/new_4">APPEARANCE</a>,
            },
            {
              value: "FINISH",
              label: <a href="/new_5">FINISH</a>,
            },
          ]}
        />
      </div>
    </>
  );
}

export default NewGoTo;
