import { useEffect } from "react";
import "./New.css";
import MenuBar from "../../components/menu_bar/MenuBar";
import { Form, Input, InputNumber, Select, message } from "antd";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import { NEXT } from "../../helpers/utility_icons";
import TextArea from "antd/es/input/TextArea";
import races from "../../helpers/races";
import classes from "../../helpers/classes";

function New() {
  const [form] = Form.useForm();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("character_info"));
    if (savedData) {
      form.setFieldsValue(savedData);
    }
  }, [form]);

  function saveValue() {
    localStorage.setItem("character_info", JSON.stringify(form.getFieldsValue()));
  }

  const onFinish = (values) => {
    message.success("Character created successfully!");
    console.log("Submitted values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Please check the form for errors!");
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <>
      <div className="new_container">
        <div className="new_title">
          <span>NEW CHARACTER</span>
        </div>
        <div className="new_form">
          <Form
            onChange={saveValue}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <Form.Item
              name="name"
              className="medium_input_fix"
              rules={[
                { required: true, message: "Please enter a name" },
                { min: 3, message: "Name must be at least 3 characters long" },
              ]}
            >
              <Input placeholder="NAME" className="medium_input" />
            </Form.Item>

            <div className="new_selectors">
              <Form.Item
                name="race"
                style={{ marginBottom: "0px" }}
                rules={[{ required: true, message: "Please select a race" }]}
              >
                <Select
                  style={{ width: "30vw" }}
                  dropdownStyle={{
                    backgroundColor: "#515151",
                    border: "1px solid black",
                    borderRadius: "20px",
                  }}
                  placeholder="RACE"
                  options={races.map((m) => ({
                    value: m.name,
                    label: <span className="race_name">{m.name}</span>,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="class"
                style={{ marginBottom: "0px" }}
                rules={[{ required: true, message: "Please select a class" }]}
              >
                <Select
                  style={{ width: "30vw" }}
                  dropdownStyle={{
                    backgroundColor: "#515151",
                    border: "1px solid black",
                    borderRadius: "20px",
                  }}
                  placeholder="CLASS"
                  options={classes.map((m) => ({
                    value: m.name,
                    label: <span className="class_name">{m.name}</span>,
                  }))}
                />
              </Form.Item>
            </div>

            <div className="new_numbers">
              <span className="numbers_title">AGE</span>
              <Form.Item
                name="age"
                style={{ marginBottom: "0" }}
                rules={[
                  { required: true, message: "Please enter an age" },
                  {
                    type: "number",
                    min: 0,
                    max: 120,
                    message: "Age must be between 0 and 120",
                  },
                ]}
              >
                <InputNumber
                  style={{
                    backgroundColor: "#515151",
                    color: "#FFFFF",
                    border: "1px solid black",
                    borderRadius: "15px",
                  }}
                />
              </Form.Item>

              <span className="numbers_title">LEVEL</span>
              <Form.Item
                name="level"
                style={{ marginBottom: "0" }}
                rules={[
                  { required: true, message: "Please enter a level" },
                  {
                    type: "number",
                    min: 1,
                    max: 20,
                    message: "Level must be between 1 and 20",
                  },
                ]}
              >
                <InputNumber
                  style={{
                    backgroundColor: "#515151",
                    color: "#FFFFF",
                    border: "1px solid black",
                    borderRadius: "15px",
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="factions"
              className="medium_input_fix"
              rules={[
                { required: true, message: "Please enter factions" },
                { max: 50, message: "Factions must be less than 50 characters" },
              ]}
            >
              <Input placeholder="FACTIONS" className="medium_input" />
            </Form.Item>

            <Form.Item
              name="personality"
              className="medium_input_fix"
              rules={[{ required: true, message: "Please enter personality traits" }]}
            >
              <Input
                placeholder="PERSONALITY TRAITS"
                className="medium_input"
              />
            </Form.Item>

            <Form.Item
              name="ideals"
              className="medium_input_fix"
              rules={[{ required: true, message: "Please enter ideals" }]}
            >
              <Input placeholder="IDEALS" className="medium_input" />
            </Form.Item>

            <Form.Item
              name="flaws"
              className="medium_input_fix"
              rules={[{ required: true, message: "Please enter flaws" }]}
            >
              <Input placeholder="FLAWS" className="medium_input" />
            </Form.Item>

            <Form.Item
              name="bonds"
              className="medium_input_fix"
              rules={[{ required: true, message: "Please enter bonds" }]}
            >
              <Input placeholder="BONDS" className="medium_input" />
            </Form.Item>

            <Form.Item
              name="backstory"
              className="medium_input_fix"
              rules={[
                { required: true, message: "Please enter a backstory" },
                { min: 10, message: "Backstory must be at least 10 characters" },
              ]}
            >
              <TextArea
                placeholder="BACKSTORY"
                rows={5}
                className="large_input"
                style={{ height: "7vh" }}
              />
            </Form.Item>
          </Form>
        </div>
        <NewGoTo />
        <a href="/new_2" className="next_new">
          <img src={NEXT} alt="next" />
        </a>
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default New;
