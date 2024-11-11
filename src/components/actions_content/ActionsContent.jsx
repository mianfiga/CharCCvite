import React from "react";
import "./ActionsContent.css";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function ActionsContent() {
  return (
    <>
      <div className="actions_content_container">
        <Space wrap>
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: <div className="aaa">jack</div>
              },
              {
                value: "lucy",
                label: <div className="aaa">lucy</div>,
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            disabled
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            loading
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            allowClear
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
            placeholder="select it"
          />
        </Space>
      </div>
    </>
  );
}

export default ActionsContent;
