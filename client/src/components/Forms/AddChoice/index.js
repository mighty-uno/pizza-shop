import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import { addChoice } from "../../../state/actions";
export const AddChoice = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addChoice } = props;

  const onFinish = async (values) => {
    setIsLoading(true);

    await addChoice(values);

    setIsLoading(false);
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "enter choice name",
            },
          ]}
        >
          <Input placeholder="enter choice name"></Input>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder="enter description"></Input>
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: "enter choices price",
            },
          ]}
        >
          <Input placeholder="enter choices price"></Input>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={isLoading}
            disabled={isLoading}
            block
            type="primary"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addChoice,
};

export default connect(null, mapDispatchToProps)(AddChoice);
