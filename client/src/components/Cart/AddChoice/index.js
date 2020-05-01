import React, { useState } from "react";
import { Checkbox, Button, Row, Tag } from "antd";

function AddChoice(props) {
  const [choices, setChoices] = useState([]);
  const processChoices = () => {
    let selectedChoices = props.choices.filter(
      (ch) => choices.indexOf(ch.name) > -1
    );

    props.callback(selectedChoices);
  };
  return (
    <div>
      <Row>
        <Checkbox.Group
          onChange={(v) => {
            setChoices(v);
          }}
        >
          {(props.choices || []).map((choice) => {
            return (
              <Checkbox value={choice.name}>
                {choice.name} <Tag>{choice.price || 0}</Tag>
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Button onClick={processChoices} block type="primary">
          {" "}
          Add{" "}
        </Button>
      </Row>
    </div>
  );
}

export default AddChoice;
